import React, { useState } from 'react'
import './Css/login.css'
import { Button,Input, Box,Text,  Image,  } from '@chakra-ui/react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { formEmail, formFullname, formPassword, formUsername } from '../Redux/Action/All'
const SignUp = () => {
  const dispatch =useDispatch()
    const navigate=useNavigate()
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
const [data,SetData]=useState([])
const addData=()=>{
  const {Username,FullName,Password,Email} =formData
  console.log(formData);
  if (FullName === "") {
    toast.error(' name field is requred!',{
        position: "top-center",
    });
} else if (Email === "") {
     toast.error('email field is requred',{
        position: "top-center",
    });
} else if (!Email.includes("@")) {
     toast.error('plz enter valid email addres',{
        position: "top-center",
    });
}  else if (Password === "") {
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
    localStorage.setItem("FormData",JSON.stringify([...data,formData]));

}
}

  return (
    <>
    <Navbar/>
    <Box className='sign-up-main'>
         <Box className='login-text-main'>
         <Text className='login-text' fontSize='2xl'>Sign Up</Text>
         </Box>
         <Box className='email-main'>
         <Text className='font-size' style={{margin:0}} >Enter UserName</Text>
         <Input className='input-section' onChange={getData} name='userName' placeholder='Enter username' width={500} size='md' />
         </Box>
         <Box className='email-main'>
         <Text className='font-size' style={{margin:0}}  >Full Name</Text>
         <Input className='input-section' onChange={getData} name='FullName' placeholder='Enter full Name' width={500} size='md' />
         </Box>
         <Box className='email-main'>
         <Text className='font-size' style={{margin:0}} >Enter Email</Text>
         <Input className='input-section' onChange={getData} name='Email'  placeholder='Enter Email Your Email Address' width={500} size='md' />
         </Box>
         <Box className='password-main'>
         <Text className='font-size' style={{margin:0}} >Enter Password</Text>
         <Input className='input-section' onChange={getData} name='Password'  placeholder='Enter Your Password'  width={500} size='md' />
         </Box>
         <Box className='main-btn'>
            <Button onClick={addData} className='btn-wala font-size' width={500}>
                Register
            </Button>
         </Box>
         
    </Box>
    </>
  )
}

export default SignUp
