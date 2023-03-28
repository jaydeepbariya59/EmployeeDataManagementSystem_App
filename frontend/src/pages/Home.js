import React from 'react'

const Home = () => {
  return (
    <div className='container' style={{marginTop : "100px", marginBottom : "100px"}}>
        <div className='row'>
            <div className='col'>
                <div className='card text-center shadow-lg p-3 mb-5 bg-body rounded'>
                    <div className='card-header bg-dark text-white p-4'>
                        Welcome To EDMS App
                    </div>

                    <div className='card-body border border-success p-4'>
                        <h5 className='card-title'>Features : </h5>
                        <ul className='list' style={{listStyleType:"none"}}>
                            <li className='list-item'>CREATE - Add Employee Record</li>
                            <li className='list-item'>READ - Get Employee Record</li>
                            <li className='list-item'>UPDATE - Update Employee Record</li>
                            <li className='list-item'>DELETE - Delete Employee Record</li>
                        </ul>
                    </div>
                    <div className='card-footer bg-dark text-white p-4'>
                        Thanks for Visiting...
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home