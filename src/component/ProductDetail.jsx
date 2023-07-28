import React, { useEffect, useState } from 'react'
import { Button, Box,Image,Text} from '@chakra-ui/react'
import './Css/detail.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const ProductDetail = () => {
    const {id}=useParams()
    const [Data,SetData]=useState([{}])
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
           <Box boxSize='sm'>
  <Image src={Data.image}alt='Dan Abramov' width={700} height={550} />
</Box>
            </Box>  

            <Box className='content'>
                  <Text style={{fontSize:"50px"}}>{Data.title}</Text>
                  <Text style={{fontSize:"20px",marginTop:"20px"}}>{Data.description}</Text>
                  <Text style={{fontSize:"20px",marginTop:"20px"}}>{Data.price}</Text>
                  <Button  colorScheme='blue' style={{fontSize:"20px",marginTop:"20px"}}>Add To Cart</Button>
            </Box>  
        
      </Box>
    </>
  )
}

export default ProductDetail
