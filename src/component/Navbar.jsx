import { Box,Input,Button, background } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import './Css/navbar.css'
import { BiCart } from "react-icons/bi";
import {  BsCartFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
const Navbar = () => {
    const CountData=useSelector((storeData)=>{
        return storeData.Count
    })
    
    return (
        <>
            <Box className='Nav'>
                <Box className='name'>
                    <Link className='link' >My Mart</Link>
                </Box>
                <Box className='mid'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/product'>Product</Link>
                    <Link className='link' to='/services'>Services</Link>
                   
                    </Box>
                    {/* <Button width={200} variant='outline'rightIcon={<BiCart />} > <Link className='link' to='/cart'>Cart</Link></Button> */}
                <Box className='last' >
                <Link className='link' to='/cart'> <Button width={200} variant='outline'leftIcon={< BsCartFill />}> <span style={{fontSize:"20px"}}>{CountData}</span> </Button></Link>
                
                  
                </Box>
            </Box>
        </>
    )
}

export default Navbar
