import React from 'react'
import logos from  '../Components/styles/logot2.png'
import '../Components/styles/style.css';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <div>
      <div className='navi' style={{position:'static'}}>
       
        <img src={logos}  alt="logo" className='logo'/>
       
        <ul>
            <NavLink to ='/all' className='li'>Display Users</NavLink>
            <NavLink to ='/add' className='li'>Create User</NavLink>
        </ul>
      </div>

    </div>
  )
}

export default Navbar