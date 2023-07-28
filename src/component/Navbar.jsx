import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import './Css/navbar.css'
const Navbar = () => {
    return (
        <>
            <Box className='Nav'>
                <Box className='name'>
                    <Link >Rahul Arora</Link>
                </Box>
                <Box className='mid'>
                    <Link to='/'>Home</Link>
                    <Link to='/product'>Product</Link>
                    <Link to='/services'>Services</Link>
                    </Box>
                <Box className='last'>
                    <Link to='/cart'>Cart</Link>
                </Box>
            </Box>
        </>
    )
}

export default Navbar
