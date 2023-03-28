import React, { useState } from 'react';


const Footer = () => {

    const [email, setEmail] = useState("");

    const handleChange = (e)=>{
        setEmail(e.target.value);
    }

    const submitMail = ()=>{
        console.log("Got Email..."+ email);
    }

  return (
    <div className='container-fluid bg-success p-4 mb-0'>

        <div className='row'>
            <div className='col'>
                <p className='text-center fw-bold'>Our Services</p>

                <ul className='text-center' style={{listStyleType:"none"}}>
                    <li>FrontEnd</li>
                    <li>Backend</li>
                    <li>Database</li>
                </ul>
            </div>

            <div className='col'>
            </div>

            <div className='col'>
                <p className='text-center fw-bold'>Get Amazing Updates from Us : </p>
                <label htmlFor='email'>Email Id : </label>
                <input type="email" value={email} onChange={handleChange} placeholder="Enter Email" />
                <button className='btn btn-info mx-3' onClick={submitMail}>Submit</button>
            </div>
        </div>

        <div className='row'>
            <div className='col text-center text-light'>
                All Rights Reserved. Developed By Jaydeep Bariya
            </div>
        </div>

    </div>
  )
}

export default Footer