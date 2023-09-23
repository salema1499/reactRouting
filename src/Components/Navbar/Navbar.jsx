import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
  return (
    <>
    <nav className="navbar fixed-top py-3 navbar-expand-lg navbar-expand-lg position-fiexed">
    <div className="container ">
    
    
    <Link className="navbar-brand" to="/">START FRAMEWORK</Link>
    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-white active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="contact">Contact</Link>
        </li>
       
      </ul>
      
    </div>
    
    </div>
    

  </nav>


  
  
  </>
  )

  }