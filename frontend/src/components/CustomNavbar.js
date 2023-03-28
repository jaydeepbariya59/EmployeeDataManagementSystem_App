import React, { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AppState} from '../App';
import {doLogout, isLoggedIn} from '../services/helper-service';


const CustomNavbar = () => {

    const useAppState = useContext(AppState);
    const navigate = useNavigate();

    const logout = ()=>{
        
        useAppState.setLogin(false);
        doLogout();
        navigate("/");
    }

  return (
    <div>
        <nav className='navbar navbar-white bg-success d-flex justify-content-between'>

            <div className='container-fluid'>
                <Link className="navbar-brand fw-bold mx-3" to="/">EDMS Application</Link>
            


            {
                (useAppState.login==false)
                ?
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-info' onClick={()=> navigate("/login")}>Login</button>
                    <button className='btn btn-warning mx-5' onClick={()=> navigate("/sign-up")}>Signup</button>
                </div>
                :
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-info mx-5' onClick={logout}>Log Out</button>
                </div>
            }
            </div>

        </nav>
    </div>
  )
}

export default CustomNavbar