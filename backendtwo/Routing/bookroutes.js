const router = require('express').Router();                // router for routing
const bookModel = require('../model/booksModel');

router.post('/add', async (req, res) => {                          // async so that post does not block
    try{
        const data = req.body;                                    // frontend console mai data aa jayega to req.data se uthayenge
        const newBook = new bookModel(data);                          //newbook create kiya jo bookmodel jaisa hoga  fir usmain data store karenge
        await newBook.save().then(() => {                            // database mai store ho jaye newbook
            res.status(200).json({message : " book added successfully"})   // status se hum server ko batadenge ki data chalegya fir json file main message ayega
        })
    }catch(error){
        console.log(error);                                     // if there is error it will show error that this place is getting error
    }
});

//get request
router.get('/getbook',async (req,res) => {
    let books;
    try {
       books = await bookModel.find();                           // bookmodel ka data books mai aa jaye 
       res.status(200).json({books});
    }catch (error) {
        console.log(error);
    }

});


//get request by id
router.get('/getbook/:id',async (req,res) => {               
    let books;
    const id = req.params.id;                              // req.params.id se hum id fetch karenge
    try {
       books = await bookModel.findById(id);               // bookmodel se id ke base pe data lenge            
       res.status(200).json({books});
    }catch (error) {
        console.log(error);
    }

});

//update request by id
router.put('/updatebook/:id',async (req,res) => {    
    let books;           
    const {bookname,description,author,image,price} = req.body;    // body mai se data ayega iss format mai
    const id = req.params.id;                              // req.params.id se hum id fetch karenge
    try {
    books = await bookModel.findByIdAndUpdate(id, {                    //  id ke base pe update karenge  
        bookname,
        description,
        author,
        image,
        price, 
    });                       
    await books.save()                                                  // book ke update ko humne save kiya 
    .then(() => res.json({ books}));   
    }catch (error) {
        console.log(error);
    }

});


//delete by id
router.delete('/deletebook/:id',async (req,res) => {               
    const id = req.params.id;                              // req.params.id se hum id fetch karenge
    try {
       await bookModel.findByIdAndDelete(id)               // bookmodel se id ke base pe book delete kardenge          
       .then(() => res.status(201).json({message : "book has been deleted"}));
    }catch (error) {
        console.log(error);
    }

});

module.exports = router