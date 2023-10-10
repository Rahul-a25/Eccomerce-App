import React, { useState } from 'react'
import './Css/login.css'
import { Button,Input, Box,Text,  Image,  } from '@chakra-ui/react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import { CartCondition } from '../Redux/Action/All'

import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { formEmail, formFullname, formPassword, formUsername } from '../Redux/Action/All'
const Login = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const conditionbutton=()=>{
        dispatch(CartCondition(true))
        navigate('/cart')
    }
    const getData=(e)=>{
      const { value, name } = e.target;
      console.log(value,name);
      dispatch(formUsername(value,name))
      dispatch(formFullname(value,name))
      dispatch(formEmail(value,name))
      dispatch(formPassword(value,name))
    }
//     const Username=(e)=>{
//        dispatch(formUsername(e.target.value))
//     }
//     const FullName=(e)=>{
//       dispatch(formFullname(e.target.value))
//    }
//    const Email=(e)=>{
//     dispatch(formEmail(e.target.value))
//  }
//  const Password=(e)=>{
//   dispatch(formPassword(e.target.value))
// }
const formData=useSelector((storeData)=>{
  return storeData.Form
})
const [data,setData]=useState([])
const addData=()=>{
  const {Username,FullName,Password,Email} =formData
  console.log(formData);
  const getuser=localStorage.getItem('FormData')
 if (Email === "") {
    alert('please Fill Email')
     toast.error('email field is requred',{
        position: "top-center",
    });
} else if (!Email.includes("@")) {
     toast.error('plz enter valid email addres',{
        position: "top-center",
    });
}  else if (Password === "") {
  alert('please Fill Password')
     toast.error('password field is requred',{
        position: "top-center",
    });
} else if (Password.length < 5) {
     toast.error('password length greater five',{
        position: "top-center",
    });
} else {
    console.log("data added succesfully");
    navigate("/login")
    localStorage.getItem("FormData");
    
    if (getuser && getuser.length) {
      const userdata = JSON.parse(getuser);
      const userlogin = userdata.filter((el, k) => {
          return el.Email === Email && el.Password === Password
      });

      if (userlogin.length === 0) {
          alert("invalid details")
      } else {
          // console.log("user login succesfulyy");
          alert('login succesfully')
          localStorage.setItem("user_login", JSON.stringify(userlogin))

          dispatch(CartCondition(true))
        navigate('/cart')
      }}
}
}
  return (
    <>
    <Navbar/>
    <Box className='login-main'>
         <Box className='login-text-main'>
         <Text className='login-text' fontSize='2xl'>Log In</Text>
         </Box>
         <Box className='email-main'>
         <Text className='font-size' style={{margin:0}}  >Enter Email</Text>
         <Input className='input-section' name='Email' onChange={getData} placeholder='Enter Email Your Email Address' width={500} size='md' />
         </Box>
         <Box className='password-main'>
         <Text className='font-size' style={{margin:0}} >Enter Password</Text>
         <Input className='input-section' name='Password' onChange={getData} placeholder='Enter Your Password'  width={500} size='md' />
         </Box>
         <Box className='main-btn'>
            <Button onClick={addData}  className='btn-wala font-size' width={500}>
                Sign In
            </Button>
         </Box>
         <Box className='create-an-account-main'>
         <Text className='font-size text-last'>Don't have an account? 
         <Button onClick={()=>navigate('/signup')} className='font-size' colorScheme='teal' variant='link'>
         Create an account
  </Button>
         </Text>
         </Box>
    </Box>
    </>
  )
}

export default Login
