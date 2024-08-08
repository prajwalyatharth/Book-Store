import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import BookSection from '../Components/BookSection';


const Books = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/v1/getbook');
                setData(response.data.books);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
        console.log(data);
    }, []);
   

  return (
    <div className='bg-dark' style={{minHeight: '91.5vh'}}>
        <div className='d-flex justify-content-center align-items-center py-3'> 
        <h4 className='text-white'>Book Section</h4>

        </div>
        {data ? (
            <BookSection data = {data}/>
        ) : (<div className='text-white'>loading....</div>)}
    </div>
  )
}

export default Books
