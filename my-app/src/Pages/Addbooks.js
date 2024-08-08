import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Addbooks = () => {
  const [data, setData] = useState({
    bookname: "",
    author: "",
    description: "",
    image: "",
    price: ""
  });

  const change = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    })); 
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5001/api/v1/add',data)
    .then((res) => alert(res.data.message));
    setData({
    bookname: "",
    author: "",
    description: "",
    image: "",
    price: ""
    })
  }



  return (
    <div className='bg-dark d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
      <div className='container p-4'>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label text-white">Book Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter book name"
            name='bookname'
            onChange={change}
            value={data.bookname}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label text-white">Author</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter author name"
            name='author'
            onChange={change}
            value={data.author}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label text-white">Description</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter the description of book"
            name='description'
            onChange={change}
            value={data.description}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label text-white">Image</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter the URL of the image"
            name='image'
            onChange={change}
            value={data.image}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label text-white">Price</label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Price of the book"
            name='price'
            onChange={change}
            value={data.price}
          />
        </div>

        <button className='btn btn-success' onClick={submit}>Submit</button>
      </div>
    </div>
  );
}

export default Addbooks;
 