import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axiosConfig from './axiosConfig';
import { useNavigate  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFile,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
const Dash = () => {
    const navigate = useNavigate();
    axiosConfig.post("dash")
    .then(resp=>{
        
       
    }).catch(err=>{
        if(err.message == "Request failed with status code 401"){
            navigate('/login'); 
        }
    }
);

    return(
      <div>

        <MDBContainer fluid>
              <MDBRow>
        
                <MDBCol sm='2' className='d-none d-sm-block px-0'>
                <div className="sm='2' bg-light">
                  <ul className="navbar-nav" style={{backgroundColor: "lightblue"}}>
                    <h3>Menu Bar</h3>
                    <li className="nav-item">
                    <a className="nav-link" href="./dash">
                    Dashboard
                    </a>
                  </li>
                    <li className="nav-item">
                    <a className="nav-link" href="./createproduct">
                     Add Product
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./viewproduct">
                      Product List
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./logout">
                     Logout
                    </a>
                  </li>
                   
                   
                   
                  
                    
                  </ul>
                </div>

        </MDBCol>

        <MDBCol sm='10' className='d-none d-sm-block px-0'>
    
          
        </MDBCol>

      </MDBRow>

    </MDBContainer>
       
        
      </div>
   

   
 
    )
}
export default Dash;