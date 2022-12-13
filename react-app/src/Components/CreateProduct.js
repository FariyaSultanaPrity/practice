import React, {useState, userEffect} from 'react';
import axios from "axios";
import Dash from './Dash';
import axiosConfig from './axiosConfig';

import { useNavigate  } from "react-router-dom";
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


const CreateProduct = () =>{
    axiosConfig.post("dash")
    .then(resp=>{
        
       
    }).catch(err=>{
        if(err.message == "Request failed with status code 401"){
            navigate('/login'); 
        }
    }
);

  
    let[model, setModel] = useState("");
    let[color, setColor] = useState("");
    let[glass, setGlass] = useState("");
    let[wheel_size, setWheelSize] = useState("");
    let[body, setBody] = useState("");
    const navigate = useNavigate();
   
   

    const Post = () =>{
        var obj = {model: model, color: color, glass: glass, wheel_size: wheel_size, body: body};
        console.log(obj);
        axiosConfig.post("catagory/list-post",obj)
        .then(resp=>{
            var response = resp.data;
         

            if(response.message === "Post Failed"){

                    document.getElementById('msg').innerHTML = response.message;
            }
            else{
                navigate('/viewproduct');
              
        }

        }).catch(err=>{
            if(err.message == "Request failed with status code 401"){
                navigate('/login'); 
            }
        });
    }

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
        <center><h1>Add Product</h1></center>
        <center><form className='form-group p-4 '>



<div className='input-group mb-3'>
    <span className='input-group-text bg-primary'>
        <i className='bi bi-person-plus-fill text-white'></i>
    </span>
    <input type="text" className='form-control' name="model" id="username" placeholder='Model' required value={model} onChange={(e)=>setModel(e.target.value)}></input>
</div>



<div className='input-group mb-3'>
    <span className='input-group-text bg-primary'>
        <i className='bi bi-key-fill text-white'></i>
    </span>
    <input type="text" className='form-control' name="color" id="color"  placeholder='Color' required value={color} onChange={(e)=>setColor(e.target.value)}></input>
</div>

<div className='input-group mb-3'>
    <span className='input-group-text bg-primary'>
        <i className='bi bi-key-fill text-white'></i>
    </span>
    <input type="text" className='form-control' name="glass" id="glass" placeholder='Glass' required value={glass} onChange={(e)=>setGlass(e.target.value)}></input>
</div>

<div className='input-group mb-3'>
    <span className='input-group-text bg-primary'>
        <i className='bi bi-key-fill text-white'></i>
    </span>
    <input type="text" className='form-control' name="wheel_size" id="color" placeholder='Wheel_Size' required value={wheel_size} onChange={(e)=>setWheelSize(e.target.value)}></input>
</div>

<div className='input-group mb-3'>
    <span className='input-group-text bg-primary'>
        <i className='bi bi-key-fill text-white'></i>
    </span>
    <input type="text" className='form-control' name="body" id="body" placeholder='Body' value={body} required onChange={(e)=>setBody(e.target.value)}></input>
</div>




</form>
<div className="d-grid col-12 mx-auto p-4">
    <button type='submit' className="btn btn-primary" onClick={Post}>Submit</button>
</div>
<div className="d-grid col-12 mx-auto p-4">
<h1 id='msg'></h1>
</div>



            </center>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
            

        </div>
    )
}
export default CreateProduct;