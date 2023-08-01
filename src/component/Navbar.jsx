import { Box,Input } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import './Css/navbar.css'
const Navbar = () => {
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
                    <Input className='input' placeholder='medium size' size='md' />
                    </Box>
                <Box className='last'>
                    <Link className='link' to='/cart'>Cart</Link>
                </Box>
            </Box>
        </>
    )
}

export default Navbar
