import React, {useState,useEffect} from 'react'
import {base_url,end_point} from '../api/api'
import axios from 'axios'
import {Container,Form,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function Forgot() {
    let api_url=base_url+end_point.registration;
    let storeId=window.sessionStorage.getItem("StoreId");
   console.log("my url is",api_url);
    let[input,setInputState]=useState({
        user_name:"",
        user_mail:"",
        password:"",
        'confirm-password':""
    })

    function fetch()
    {
        axios.get(`${api_url}/${storeId}`)
        .then((res)=>{
            setInputState({...input,user_mail:res.data.user_mail,user_name:res.data.user_name,
                password:res.data.password, 'confirm-password': res.data['confirm-password']
            });
            console.log(input);
        })
        .catch((error)=>console.log("error is",error))
    }

    useEffect(()=>{
        fetch()
    },[])

    let handleChange = (event) => {
        let {name,value} = event.target;
        setInputState({...input,[name]:value});
      };

    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log("Data is",input);

        axios.put(`${api_url}/${storeId}`,input)
        .then((res)=>{
            alert("updated successfully")
        })

        .catch((error)=>console.log("Error is",error));
        
    }



  return (
    <Container className='d-flex justify-content-center align-items-center vh-100 bg-dark'>
   
   <Form className='mb-3 px-5 py-3 my-5 rounded border border-info' onSubmit={handleSubmit}>
    

   <i class="ri-user-3-fill text-danger login-remix"></i>
   <hr></hr>

{/* 
   <Form.Group className="mb-3" controlId="formBasicEmail">
       <div className='d-flex justify-content-start'> 
        <Form.Label className='text-white'>Name:</Form.Label>
       </div>  

        <Form.Control type="hidden" 
        placeholder="Enter name" 
        className='bg-dark text-white'
        name='user_name'
        value={input.user_name}
        onChange={handleChange}
        style={{border:'none',borderBottom:'1px solid white',borderRadius: '0'}}
        />
      </Form.Group> */}


      <Form.Group className="mb-3" controlId="formBasicEmail">
       <div className='d-flex justify-content-start'> 
        <Form.Label className='text-white'>Email Address:</Form.Label>
       </div>  

        <Form.Control type="email" 
        placeholder="Enter email" 
        className='bg-dark text-white'
        name='user_mail'
        onChange={handleChange}
        value={input.user_mail}
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
        name='password'
        onChange={handleChange}
        value={input.password}
        style={{border:'none',borderBottom:'1px solid white',borderRadius: '0'}}
        />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formConfirmPassword">
        <div className='d-flex justify-content-start'>
         <Form.Label className='text-white'>Confirm Password:</Form.Label>
        </div> 
        <Form.Control type="password" 
        className='bg-dark text-white'
        name="confirm-password"
        value={input['confirm-password']}
        onChange={handleChange}
        style={{border:'none',borderBottom:'1px solid white',borderRadius: '0'}}
        />
      </Form.Group>



      <Button variant="dark" className='border-primary px-5' type="submit">
        Submit
      </Button>  



    </Form>



    </Container>
  )
}

export default Forgot