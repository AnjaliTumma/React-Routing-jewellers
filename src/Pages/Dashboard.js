import {  NavLink, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import React from 'react';

function Dashboard() {
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.removeItem('token');
    navigate('/')
  }
  return (
    <div>
          <div className="header">
            <div className='logo'>
              <img src='https://thumbs.dreamstime.com/b/dazzling-diamond-black-background-design-dazzling-diamond-black-background-152365504.jpg'/>
              <h1>Angna Jeweller's</h1>
            </div>
            <div className='nav'>           
              <NavLink to ="/Dashboard/Home" className='Link1'>Home</NavLink>
              <NavLink to="/Dashboard/About" className='Link1'>About Us</NavLink>
              <NavLink to="/Dashboard/Category" className='Link1'>Category</NavLink>
              <NavLink to="/Dashboard/Product" className='Link1'>Products</NavLink>
              <NavLink to="/Dashboard/Why" className='Link1'>Why Us</NavLink>
              <NavLink to="/Dashboard/Contact" className='Link1'>Contact Us</NavLink>
              <input type='' placeholder='Search'/>
              <button onClick={logout}>LogOut</button>              
            </div>
          </div>
        </div>
  );
}
export default Dashboard;
