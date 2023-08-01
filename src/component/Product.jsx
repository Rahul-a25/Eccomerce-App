import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ApiData from '../Redux/Action/ApiDataAction'
import { Button, Box, Card,Text, Image,ButtonGroup, CardFooter} from '@chakra-ui/react'
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
      className='cardimage'
      src={e.image}
      alt='No Image'
      borderRadius='lg'
    />
  
 
  <Box  style={{display:"flex",flexDirection:"column",width:"100%"}}>
  <Text style={{width:"200px",textAlign:"center"}} fontSize='xl' fontWeight={400}>{e.title.slice(0,15)}</Text>
  <Text style={{width:"200px",textAlign:"center"}} fontSize='lg'  fontWeight={700}>${e.price}</Text>
    {/* <Text fontSize='lg'>{e.description}</Text> */}
    <ButtonGroup style={{margin:"0px auto"}} spacing='2'>
    
      <Link to={`/productDetail/${e.id}`}><Button variant='solid' style={{backgroundColor:"#1dd1a1",color:"white"}}>
        Buy now
      </Button></Link>
      <Button onClick={()=>{dispatch(CartData(e))}} variant='solid' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </Box>
</Card> 
                 )
               })
            ): <h1 style={{textAlign:"center",marginTop:"300px",color:"red",fontSize:"50px",boxShadow:"0px 0px 10px black",width:"90%",margin:"300px auto"}}> Please Wait.... </h1>
        }
        </Box>  
    </Box>
    </>
  )
}

export default Product
