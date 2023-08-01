import React, { useEffect, useState } from 'react'
import { Button, Box,Image,Text} from '@chakra-ui/react'
import './Css/detail.css'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import DetailCartItem from '../Redux/Action/DetailCartItem'
const ProductDetail = () => {
  const navigate=useNavigate()
    const {id}=useParams()
   const dispatch=useDispatch()
    const [Data,SetData]=useState([])
    console.log(Data);
    useEffect(()=>{
   axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
    SetData(res.data)
   }).catch((err)=>{
 alert('error')
   })
    },[])
  return (
    <>
      <Box className='Detailmain'>
           <Box className='img'>
           <Box style={{margin:"0px auto",width:"700px"}} boxSize='sm'>
  <Image src={Data.image}alt='Dan Abramov' style={{margin:"0px auto"}} width={500} height={500} />
</Box>
            </Box>  

            <Box className='content'>
                  <Text style={{fontSize:"50px",color:"#95a5a6"}}>{Data.category}</Text>
                  <Text fontWeight={300} style={{fontSize:"40px"}}>{Data.title}</Text>
                  <Text fontWeight={200}  style={{fontSize:"20px",marginTop:"20px"}}>{Data.description}</Text>
                  <Text fontWeight={700}  style={{fontSize:"40px",marginTop:"20px"}}>${Data.price}</Text>
                  <Box>
                  <Button  colorScheme='blue' onClick={()=>dispatch(DetailCartItem(Data))} style={{fontSize:"20px",marginTop:"20px"}}>Add To Cart</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button  colorScheme='blue' onClick={()=>navigate('/cart')} style={{fontSize:"20px",marginTop:"20px",backgroundColor:"#1dd1a1"}}>Go To Cart</Button>
                  </Box>
            </Box>  
        
      </Box>
    </>
  )
}

export default ProductDetail
