import React, { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import {doLogin} from '../services/helper-service';
import {userLogin} from '../services/user-service';
import {AppState} from '../App';

const Login = () => {
  
    const useAppState = useContext(AppState);

    const [loginData, setLoginData] = useState({
        email : "",
        password : ""
    });

    const navigate = useNavigate();

    const handleChange = (field, event) =>{
        setLoginData({...loginData, [field]: event.target.value});
    }

    const login = (e)=>{
        e.preventDefault();

        if(loginData.email.trim() == ""){
            toast.error("Email cannot be empty");
            return ;
        }
        
        if(loginData.password.trim() == ""){
            toast.error("Password cannot be empty");
            return ;
        }

        userLogin(loginData)
            .then((response) =>{
                doLogin(response.token);

                useAppState.setLogin(true);

                alert("Logged In Successfully");

                navigate("/user/all-employee");
            })
            .catch((error) =>{
                alert("Invalid Credentials");
            });
    }

    const resetForm = () =>{
        setLoginData({
            email : "",
            password : ""
        });
    }

    return (
        <div>
            <div className='container w-50' style={{marginTop:"100px", marginBottom:"100px"}}>
                <div className='card shadow p-3 mb-5 bg-body rounded'>
                    <div className='card-header bg-info'>
                        Login Form
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'>Login here to Use the App..</h5>
                        <form onSubmit={(e)=> login(e)}>
                            <div className='mb-3'>
                                <label htmlFor='email' className='form-label'>Email Id : </label>
                                <input type="email" className='form-control' id="email" aria-describedby='email' placeholder='Enter Email' 
                                    value={loginData.email}
                                    onChange={(e)=> handleChange("email", e)}
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='password' className='form-label'>Password : </label>
                                <input type="password" className='form-control' id="password" aria-describedby='emaipasswordl' placeholder='Enter Password' 
                                    value={loginData.password}
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

export default Login