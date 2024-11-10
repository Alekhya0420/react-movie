import React,{useState}from 'react'
import registrationData from'../database/db.json'
import {base_url,end_point} from '../api/api';
import {Container,Col,Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../stylemodules/Login.css'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Login() {

  

    let[loginData,setLoginState]=useState({mymail:"",mypass:""})
    let api_url=base_url+end_point.registration;
    let navigate=useNavigate();


    let res1 = registrationData.registration.filter((data) => {
      return data.user_mail === loginData.mymail;
    });
  
    let myid = res1.map((name) => {
      return name.id;
    });



    let handleChange=(event)=>{
      let{name,value}=event.target;
      setLoginState({...loginData,[name]:value})
    };


    let handleSubmit=(event)=>{
      event.preventDefault();
      console.log("my login credentials are",loginData);

      let userData=
      {
        "user_mail":loginData.mymail,
        "password":loginData.mypass,
        "confirm-password":loginData.cpass
      }

      if(registrationData.registration.some(user=>user.user_mail===loginData.mymail
        && user.password===loginData.mypass))

      {
         console.log("my id is",myid)
         window.localStorage.setItem("StoreId",myid)
         alert("Successful log in")
         navigate(`/movie-page`);
      }

      else
      {
        alert("wrong credentials");
      }
      
    }
    

  return (
    <Container className='d-flex justify-content-center align-items-center vh-100 bg-dark'>
   
   <Form className='mb-3 px-5 py-3 my-5 rounded border border-info ' onSubmit={handleSubmit}>
    

   <i class="ri-user-3-fill text-danger login-remix"></i>
   <hr></hr>

      <Form.Group className="mb-3" controlId="formBasicEmail">
       <div className='d-flex justify-content-start'> 
        <Form.Label className='text-white'>Email Address:</Form.Label>
       </div>  

        <Form.Control type="email" 
        placeholder="Enter email" 
        onChange={handleChange}
        className='bg-dark text-white'
        name='mymail'
        style={{border:'none',borderBottom:'1px solid white',borderRadius: '0'}}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <div className='d-flex justify-content-start'>
         <Form.Label className='text-white'>Password:</Form.Label>
        </div>

        <Form.Control type="password" 
        placeholder="Password" 
        className='bg-dark text-white'
        onChange={handleChange}
        name='mypass'
        style={{border:'none',borderBottom:'1px solid white',borderRadius: '0'}}
        />
      </Form.Group>


      {/* <Form.Group className="mb-3" controlId="formConfirmPassword">
        <div className='d-flex justify-content-start'>
         <Form.Label className='text-white'>Confirm Password:</Form.Label>
        </div> 
        <Form.Control type="hidden" 
        placeholder="Password"  
        className='bg-dark text-white'
        onChange={handleChange}
        name="cpass"
        style={{border:'none',borderBottom:'1px solid white',borderRadius: '0'}}
        />
      </Form.Group> */}


      <Form.Group className="mb-3" controlId="formSignin">
      <Button variant="dark" className='border-primary px-5' type="submit">
        Sign in
      </Button>
      </Form.Group>


      



    </Form>



    </Container>
  )
}

export default Login