const express = require('express');
const cors = require('cors');
const app = express();
const bookRoute = require('../backendtwo/Routing/bookroutes');
require('./connection/connect'); // database importing


app.use(cors()); 
app.use(express.json());         // thunderclient mai data json mai ara hai toh usko yahan store karne liye
app.use('/api/v1', bookRoute);

app.listen(5001, () =>{
    console.log('server is running')
})


app.get('/', (req, res) => {
    console.log('hello')
})