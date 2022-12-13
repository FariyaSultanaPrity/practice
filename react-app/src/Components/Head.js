import React, {Components} from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axiosConfig from './axiosConfig';

const Head = () => {
 
  
        return(
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <a className="navbar-brand" href="/home">
            Vintage Car Auction System
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="./">
                  Home <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./contact">
                 Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./registration">
                Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./login">
                  Login
                </a>
               </li>
              
              
      
                  
             
              
            </ul>
          </div>
        </nav>
      
     
          
      )
    
   
}


export default Head;