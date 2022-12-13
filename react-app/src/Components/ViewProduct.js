import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate  } from "react-router-dom";
import React, {useEffect, useState} from "react";
import axiosConfig from './axiosConfig';
import Dash from './Dash';

import vcar1 from './images/var.png';
import 'bootstrap/dist/css/bootstrap.min.css';

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

const ViewProduct = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState ([]);

    useEffect(()=>{
        axiosConfig.get("catagory/list")
        .then(resp=>{
            
            setProducts(resp.data);
        }).catch(err=>{
            if(err.message == "Request failed with status code 401"){
                navigate('/login'); 
            }
        });
    },[]);

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
        <center><h1>Your Product Details</h1></center>
        <center><table class="table table-border">
        <tr>
                    <th>ID</th>
                    <th>Model</th>
                    <th>Color</th>
                    <th>Picture</th>
                    <th>Glass</th>
                </tr>
                {products.map(product=>(
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.Model}</td>
                        <td>{product.Color}</td>
                        <td>
                        {<img src={vcar1} width="100" height="100"/>}
                            
       </td>
                        <td>{product.Glass}</td>
                    </tr>
                ))}
            </table>
            </center>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
            

        </div>
    );

}

export default ViewProduct;