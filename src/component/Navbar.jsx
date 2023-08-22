import { Box,Input,Button, background } from '@chakra-ui/react'
import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './Css/navbar.css'
import startmart from './assest/smartMart.png'

import {  BsCartFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
const Navbar = () => {
    const CountData=useSelector((storeData)=>{
        return storeData.Count
    })
    
    return (
        <>
            <Box className='Nav' >
                <Box className='content' >
                <Box className='name'>
                    <Link style={{display:"flex"}} className='link' ><img width={120} height={110} src={startmart} alt="" /></Link>
                </Box>
                <Box className='mid'>
                    <NavLink className='link midlink' to='/'>Home</NavLink>
                    <NavLink className='link midlink' to='/product'>Product</NavLink>
                    <NavLink className='link midlink' to='/services'>Services</NavLink>
                   
                    </Box>
                    {/* <Button width={200} variant='outline'rightIcon={<BiCart />} > <Link className='link' to='/cart'>Cart</Link></Button> */}
                <Box className='last' >
                <NavLink className='link' to='/cart'> <Button width={200} variant='outline'leftIcon={< BsCartFill />}> <span style={{fontSize:"20px"}}>{CountData}</span> </Button></NavLink>
                
                  
                </Box>
                </Box>
            </Box>
        </>
    )
}

export default Navbar
