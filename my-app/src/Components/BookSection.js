import React from 'react';

const BookSection = ({ data }) => {
  console.log(data); // Display the data in the console

                     // data show karane ke liye
                       //pura data item ke andar store ho jayega 
                   // data.map use kiya hai array ko show karne keliye  


  return (
    <div className="d-flex justify-content-center align-items-center">
      {data &&
        data.map((item, index) => (
          <div key={index} className="card m-2">
            <div style={{ width: '100px', height: '190px' }} className="img-fluid">
              <img src={item.image} alt="Book" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{ fontSize: '15px' }} className="px-2 my-1">    
              {item.bookname.slice(0, 30)}...
            </div>
            <b style={{ fontSize: '20px' }} className="m-0 px-2">
              Rs. {item.price}
            </b>
            <div className="d-flex justify-content-around align-items-center">
              <button className="btn btn-primary">Update</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BookSection;
