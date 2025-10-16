import React from 'react'
import { CiGlobe } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import logo from '../Image/logo.png'
import { IoSearch } from "react-icons/io5";
const Nav = () => {
  return (
    <div>
    <div className='boady'>
        <input  className='search2' type placeholder="Search" ></input>
    <h3 className='logo'>  <img src={logo} alt='logo' className='logo1'></img>airbnb</h3>
     <nav className='nav1'>
         <div className='nav2'>
            <button className='bt1'>🏠Home</button>
            <button className='bt2'>🎈Experience</button>
            <button className='bt3'>🛎️ Services</button>
         </div>
         </nav>
         <div className='nav5'>
              <button className='bt4'><strong>Become a host </strong></button>
              <button className='glb'> <CiGlobe /> </button> 
             <button className='menu'> <IoMenu /></button>
        </div>
 <div className='nav3'>
     <button className='bt5'><strong>where </strong> <br></br><span className='button'>Search destination </span></button><div className='vr1'></div>
     <button className='bt5'> <strong>Check in</strong> <br></br> <span className='button'>Add dates</span> </button><div className='vr1'></div>
     <button className='bt5'> <strong>Check out</strong> <br></br> <span className='button'>Add dates</span></button><div className='vr1'></div>
     <button className='bt6'> <strong>Who </strong><br></br><span className='button1'>  Add guests  </span> <div className='search'><IoSearch className='search1' /></div></button> 
 </div>
 </div>
 </div>
  )
}

export default Nav