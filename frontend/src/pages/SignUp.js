import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import {userSignUp} from '../services/user-service';

const Signup = () => {

    const [signUpdata, setSignUpData] = useState({
        email : "",
        password : ""
    });

    const navigate = useNavigate();

    const handleChange = (field, event) =>{
        setSignUpData({...signUpdata, [field] : event.target.value});
    }

    const signUp = (e) =>{
        e.preventDefault();

        if(signUpdata.email.trim() == ""){
            toast.error("Empty Email");
            return ;
        }
        if(signUpdata.password.trim() == ""){
            toast.error("Empty Password");
            return ;
        }

        userSignUp(signUpdata)
            .then((response)=>{
                alert("User Registered Successfully.. Now Login");
                navigate("/login");
            })
            .catch((error)=>{
                toast.error("Something went wrong");
            });
    }

    const resetForm = ()=>{
        setSignUpData({
            email : "",
            password : ""
        });
    }

  return (
    <div>
    <div className='container w-50' style={{marginTop:"100px", marginBottom:"100px"}}>
        <div className='card shadow p-3 mb-5 bg-body rounded'>
            <div className='card-header bg-info'>
                Sign Up Form
            </div>
            <div className='card-body'>
                <h5 className='card-title'>Register here to Use the App..</h5>
                <form onSubmit={(e)=> signUp(e)}>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email Id : </label>
                        <input type="email" className='form-control' id="email" aria-describedby='email' placeholder='Enter Email' 
                            value={signUpdata.email}
                            onChange={(e)=> handleChange("email", e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'>Password : </label>
                        <input type="password" className='form-control' id="password" aria-describedby='emaipasswordl' placeholder='Enter Password' 
                            value={signUpdata.password}
                            onChange={(e)=> handleChange("password", e)}
                        />
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                        <div className='col'>
                            <button type='reset' className='btn btn-danger' onClick={resetForm}>Reset</button>
                        </div>
                    </div>
                </form>

                <ToastContainer />
            </div>
        </div>
    </div>

    <ToastContainer />
</div>
  )
}

export default Signup