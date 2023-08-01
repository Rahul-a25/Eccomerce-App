import React, { useEffect, useState } from 'react'
import { Button, Box,Image,Text} from '@chakra-ui/react'
import {FaStar} from "react-icons/fa";
// import { AiOutlineStar } from "react-icons/ai";
import './Css/detail.css'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import DetailCartItem from '../Redux/Action/DetailCartItem'
import Navbar from './Navbar'
const ProductDetail = () => {
  const navigate=useNavigate()
    const {id}=useParams()
   const dispatch=useDispatch()
    const [Data,SetData]=useState([])
    console.log(Data);
    useEffect(()=>{
   axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
    SetData([...Data,res.data])
   }).catch((err)=>{
 alert('error')
   })
    },[])

    
  return (
    <>
     <Navbar/>
      <Box className='Detailmain'>
           {
            Data.map((e)=>{
              return (
                <>
                <Box style={{marginTop:"50px"}}  className='img'>
           <Box key={e.id} style={{margin:"0px auto",width:"700px"}} boxSize='sm'>
  <Image src={e.image}alt='Dan Abramov' style={{margin:"0px auto"}} width={500} height={500} />
</Box>
            </Box>  

            <Box style={{marginTop:"50px"}} className='content'>
                  <Text style={{fontSize:"50px",color:"#95a5a6"}}>{e.category.toUpperCase()}</Text>
                  <Text fontWeight={300} style={{fontSize:"40px"}}>{e.title.slice(0,30)}</Text>
                  <Text fontWeight={200}  style={{fontSize:"20px",marginTop:"20px"}}>{e.description.slice(0,338)}</Text>
                  <Text style={{fontSize:"20px",marginTop:"20px",display:"flex"}}>< FaStar style={{color:"#fbc531",fontSize:"30px"}}/> &nbsp;&nbsp;&nbsp;&nbsp; <span style={{fontSize:"25px",fontWeight:"700px"}}>{e.rating.rate}</span></Text>
                  <Text fontWeight={700}  style={{fontSize:"40px",marginTop:"20px"}}>${e.price}</Text>
                  <Box>
                  <Button  colorScheme='blue' onClick={()=>dispatch(DetailCartItem(e))} style={{fontSize:"20px",marginTop:"10px"}}>Add To Cart</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button  colorScheme='blue' onClick={()=>navigate('/cart')} style={{fontSize:"20px",marginTop:"10px",backgroundColor:"#1dd1a1"}}>Go To Cart</Button>
                  </Box>
            </Box> 
                </>
              )
            })
           } 
        
      </Box>
    </>
  )
}

export default ProductDetail
