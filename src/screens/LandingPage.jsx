import React from 'react'
import LogoWhite from '../assets/images/logo-white.png'
import { Link } from "react-router-dom";
import "../App.css"


const LandingPage = () => {
  return (
    <div className="position-absolute main h-100 w-100" style={{backgroundColor: "#191f28"}}>
      <div className="navbar-item pt-lg-2">
        <ul className='text-white list-unstyled gap-5 d-inline-flex vw-100 justify-content-center p-10'>
            <li className='home-link bg-white rounded text-black'>Home</li>
            <li className='home-link'><Link to="/login" className="home-link-a " style={{cursor:"pointer"}}>Contact us</Link></li>
            <li className='home-link'><Link to="/login" className="home-link-a" style={{cursor:"pointer"}}>Login</Link></li>
            <li className='home-link'><Link to="/registration" className="home-link-a" style={{cursor:"pointer"}}>Register</Link></li>
        </ul>
      <div className="flex align-center justify-content-center" style={{backgroundColor: "#191f28"}}>
        <img src={LogoWhite} alt="" className="pt-4" style={{width:"240px"}}/>
      </div>
      <div className="text-white flex align-center justify-content-center w-100 h-25">
        <h5>The Intuitive AI - Powered Hybrid Energy Management System</h5>
      </div>
      </div>
    </div>
  )
}

export default LandingPage
