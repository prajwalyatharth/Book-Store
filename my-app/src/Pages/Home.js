import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center'>
        <div className="row container">
            <div
            className='col-lg-6 d-flex justify-content-center align-items-start flex-column'
            style={{height: "91.5vh"}} 
            >
                <h2 className = "mb-10" style={{fontSize: "70px"}}>Your Book Store</h2>
                <p style={{fontSize: '20px'}}>Check out the books</p>

                <Link className='viewbook' to = "/books" >View Books</Link> 
            </div>

            <div
            className='col-lg-6 d-flex justify-content-center align-items-center flex-column'
            style={{height: "91.5vh"}} 
            >
                Registeration Form 
            </div>


        </div>
    </div>
  )
}

export default Home
