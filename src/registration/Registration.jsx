import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import '../stylemodules/Registration.css'
import axios from 'axios';
import registrationData from '../database/db.json'
import {base_url,end_point} from '../api/api'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Registration = () => {

  let api_url=base_url+end_point.registration;
  let[input,setReg]=useState({myname:"",mymail:"",mypass:"",cpass:""})
  let navigate=useNavigate();

  let handleChange=(event)=>{
    let{name,value}=event.target;
    setReg({...input,[name]:value});
  }

  let handleSubmit=(event)=>{
    event.preventDefault();
    console.log(input);

    let userData=
    {
      "user_name":input.myname,
      "user_mail":input.mymail,
      "password":input.mypass,
      "confirm-password":input.cpass
    }
   
if(registrationData.registration.some(user=>user.user_mail === input.mymail||user.password===input.mypass
    ||user['confirm-password']===input.cpass))
    {
      alert("user already exist");
    }

    else
    {
    axios.post(api_url,userData)
    .then((res)=>{
      console.log(res);
      alert("Congratulations");
      navigate("/login-page");
    })

    .catch((error)=>console.log("Axios Error",error))
    }

  }

  return (
    <Container className="bg-dark d-flex justify-content-center align-items-center">
      <div>
<Form className='mb-3 p-5 my-5 rounded text-white fs-5 border border-primary' onSubmit={handleSubmit}>

         
        <Form.Group controlId="formname">

            <div className='d-flex justify-content-start'>
            <Form.Label>Your Name:</Form.Label>
            </div>

            <Form.Control
              type="text"
              className="bg-none text-white"
              placeholder='Enter name'
              onChange={handleChange}
              name="myname"
              style={{background:"none",border:'none',borderBottom:'1px solid white',borderRadius:'0'}}
            />
          </Form.Group>


          <Form.Group controlId="formEmail">

            <div className='d-flex justify-content-start'>
              <Form.Label>Email address</Form.Label>
            </div>

            <Form.Control
              type="email"
              className="bg-none text-white"
              placeholder='Enter email'
              onChange={handleChange}
              name="mymail"
              style={{ background:"none",border: 'none', borderBottom: '1px solid white', borderRadius: '0' }}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">

          <div className='d-flex justify-content-start'>
            <Form.Label>Password</Form.Label>
          </div>  

            <Form.Control
              type="password"
              className="bg-none text-white"
              placeholder="Password"
              name="mypass"
              onChange={handleChange}
              style={{ background:"none",border: 'none', borderBottom: '1px solid white', borderRadius: '0' }}
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword">
          <div className='d-flex justify-content-start'>
            <Form.Label>Confirm Password</Form.Label>
          </div>  
            <Form.Control
              type="password"
              className="bg-none text-white"
              placeholder="Confirm Password"
              name="cpass"
              onChange={handleChange}
              style={{background:"none", border: 'none', borderBottom: '1px solid white', borderRadius: '0' }}
            />
          </Form.Group>

          <Form.Group controlId="formSignUpButton" className='mt-4'>
            <Button variant="danger" type="submit" className='px-5'>
              Sign up
            </Button>
          </Form.Group>

          <Form.Group controlId="formSignInButton" className='mt-4'>
          <Link to="/login-page">  
            <Button variant="dark" type="button" className='border-info px-5'>
              Sign in
            </Button>
          </Link>  
          </Form.Group>

        </Form>
      </div>
    </Container>
  );
};

export default Registration;
