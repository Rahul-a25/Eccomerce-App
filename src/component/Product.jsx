import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ApiData from '../Redux/Action/ApiDataAction'
import { Button, Box, Card, Image,Divider,ButtonGroup, CardFooter} from '@chakra-ui/react'
import './Css/product.css'
import FilterData from '../Redux/Action/FilterData'
import ProductButton from './ProductButton'
import CartData from '../Redux/Action/Cart'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
const Product = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
     axios.get('https://fakestoreapi.com/products').then((res)=>{
        console.log(res.data);
        dispatch(ApiData(res.data))
        dispatch(FilterData(res.data))
     }).catch((err)=>{
        alert('error')
     })
    },[])
    const Data=useSelector((storeData)=>{
      return storeData.ApiData
  })
  return (
    <>
    <Navbar/>
    <Box style={{height:"100%",marginTop:"100px"}} >
        <Box>
           <ProductButton/>
        </Box>
        <Box className='container'>
        {
            Data.length>0?(
               Data.map((e,id)=>{
                 return (
                    <Card key={e.id} className='card' maxW={250} style={{boxShadow:"0px 0px 10px gray"}} >
  
    <Image
      style={{width:'200px',margin:"5px auto"}}
      src={e.image}
      alt='No Image'
      borderRadius='lg'
    />
  
 
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Link to={`/productDetail/${e.id}`}><Button variant='solid' style={{backgroundColor:"#1dd1a1",color:"white"}}>
        Buy now
      </Button></Link>
      <Button onClick={()=>{dispatch(CartData(e))}} variant='solid' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card> 
                 )
               })
            ): <h1> No Product </h1>
        }
        </Box>  
    </Box>
    </>
  )
}

export default Product
