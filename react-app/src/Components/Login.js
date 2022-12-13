import React, {useState, userEffect} from "react";
import axios from "axios";
import axiosConfig from './axiosConfig';
import { useNavigate } from "react-router-dom";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  }
  from 'mdb-react-ui-kit';
const Login = ()=>{
    let[token, setToken]= useState("");
    let[U_Email, setU_Email] = useState("");
    let[U_Pass, setU_Pass] =useState("");
    const navigate = useNavigate();

    const loginSubmit= ()=>{
        var obj = {U_Email: U_Email, U_Pass: U_Pass};
   
        axiosConfig.post("login",obj)
        .then(resp=>{
            var token = resp.data;
         
           var user = {userId: token.U_Id, access_token:token.tokenn};
          
            localStorage.setItem('user',JSON.stringify(user));
           
            if(token == "No user found"){
                navigate('/login');
             }else{
                 navigate('/dash');
             }
         }).catch(err=>{
             console.log(err);
         });
     

    }
    return(
        <div>

<MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4 h-75'>
           <br/>
           <br/>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

            <MDBInput wrapperClass='mb-4 mx-5 w-100'  value={U_Email} onChange={(e)=>setU_Email(e.target.value)} placeholder="Email address" id='formControlLg' type='email' size="lg"/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' value={U_Pass} onChange={(e)=>setU_Pass(e.target.value)} placeholder="Password" id='formControlLg' type='password' size="lg"/>

            <MDBBtn className="mb-4 px-5 mx-5 w-100" onClick={loginSubmit} color='primary' >Login</MDBBtn>
            <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p>
            <p className='ms-5'>Don't have an account? <a href="/Components/Registration" class="link-info">Sign Up</a></p>

          </div>

        </MDBCol>

        

      </MDBRow>

    </MDBContainer>
       </div>
           

    )
}
export default Login; 