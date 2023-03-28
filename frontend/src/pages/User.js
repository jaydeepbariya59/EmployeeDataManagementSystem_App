import React, { useContext } from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import {AppState} from '../App';

const User = () => {

    const appContext = useContext(AppState);

    const navigate = useNavigate();

  return (
    <div>
        {
            (appContext.login == false)
            ?
            (
                <div className='container-fluid'>
                    <h1>Please, Login First To Access This Page</h1>

                    <button className='btn btn-success' onClick={()=> navigate("/login")}>Login</button>
                </div>
            )
            :
            <Outlet />
        }
    </div>
  )
}

export default User