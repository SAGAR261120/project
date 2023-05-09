import React, { Component } from 'react'
import { Link } from 'react-router-dom';

function Navbar(props){
    return (

   <header id="header" class="header d-flex align-items-center">
   <br></br>
   <br></br>
   <br></br>
   <br></br>
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="/" class="logo bg-dark d-flex align-items-center">

        <h1>BACK TO HAME-PAGE<span>.</span></h1>
      </a>

      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
       <nav id="navbar" className="navbar d-flex  bg-dark">
        <ul> 
          {/* <li><Link to="/">Home</Link></li> */}
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/project">Projects</Link></li>
          <li><Link to="/blog">Blog</Link></li>
           <li><Link to="/post">Post</Link></li>
          <li className="dropdown"><Link href="#"><span>Dropdown</span> <i
                className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li><Link to="#">Dropdown 1</Link></li>
              <li className="dropdown"><Link to="#"><span>Deep Dropdown</span> <i
                    className="bi bi-chevron-down dropdown-indicator"></i></Link>
                <ul>
                  <li><Link to="#">Deep Dropdown 1</Link></li>
                  <li><Link to="#">Deep Dropdown 2</Link></li>
                  <li><Link to="#">Deep Dropdown 3</Link></li>
                  <li><Link to="#">Deep Dropdown 4</Link></li>
                  <li><Link to="#">Deep Dropdown 5</Link></li>
                </ul>
              </li>
              <li><Link to="#">Dropdown 2</Link></li>
              <li><Link to="#">Dropdown 3</Link></li>
              <li><Link to="#">Dropdown 4</Link></li>
            </ul>
          </li>
          <li><Link to="/contact">Contact</Link></li>
      <li><Link onClick={props.login}>{props.status==true ? "Logout" : "Login"}</Link></li>{/* it will switch log & logout */}
        
        </ul>
      </nav> 

    </div>
  </header>
    )
  }
export default Navbar