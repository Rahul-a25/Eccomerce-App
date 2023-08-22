import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ApiData from '../Redux/Action/ApiDataAction'
import { Button,Input,Divider,AbsoluteCenter, Box, Card,Text, Image,ButtonGroup,} from '@chakra-ui/react'
import './Css/product.css'
import './Css/home.css'
import FilterData from '../Redux/Action/FilterData'
import ProductButton from './ProductButton'
import CartData from '../Redux/Action/Cart'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import ProductCarousel from './ProductCarousel'
import Search from '../Redux/Action/Search'
const Home = () => {
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
  const searchfn=(e)=>{
    dispatch(Search(e.target.value))
  }
  const homefn=(e)=>{
    dispatch(CartData(e,1))
    // dispatch(CartData(1))
  }
  return (
    <>
    <Navbar/>

    {/* Carousel */}
   
<ProductCarousel/> 
{/* Teaxt wlaa Latest Product wala */}
<Box position='relative' padding='10'>
  <Divider />
  <AbsoluteCenter bg='white' px='4'>
  <Text className='font' style={{textAlign:"center",margin:"20px 0px ",}} fontSize='4xl'>Letest Product</Text>
  </AbsoluteCenter>
</Box>




    {/* Button */}
     
    <Box style={{height:"100%",marginTop:"50px"}} >
        <Box style={{width:"90%"}} >
           <ProductButton/> 
           <Input style={{width:"89%"}} onChange={(e)=>{searchfn(e)}}  className='input' placeholder='Search Your Product....' size='lg' />
        </Box>
        <Box className='container'>
        {
            Data.length>0?(
               Data.map((e,id)=>{
                 return (
                    <Card key={e.id} className='card' maxW={250} style={{boxShadow:"0px 0px 10px #dfe4ea"}} >
  
    <Image
      className='cardimage'
      src={e.image}
      alt='No Image'
      borderRadius='lg'
    />
  
 
  <Box  style={{display:"flex",flexDirection:"column",width:"100%"}}>
  <Text className='font'  style={{width:"200px",textAlign:"center"}} fontSize='xl' fontWeight={400}>{e.title.slice(0,15)}</Text>
  <Text className='font'  style={{width:"200px",textAlign:"center"}} fontSize='lg'  fontWeight={700}>${e.price}</Text>
    {/* <Text fontSize='lg'>{e.description}</Text> */}
    <ButtonGroup style={{margin:"0px auto"}} spacing='2'>
    
      <Link className='font'  to={`/productDetail/${e.id}`}><Button variant='solid' color='' colorScheme='gray' >
        Buy now
      </Button></Link>
      {/* dispatch(CartData(e)) */}
      <Button className='font'  onClick={()=>{homefn(e)}} variant='solid' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </Box>
</Card> 
                 )
               })

            ):<div style={{margin:"0px auto",width:"100%"}}> <h1 className='font'  style={{color:"red",fontSize:"50px",boxShadow:"0px 0px 10px #dfe4ea ",margin:"300px auto",marginTop:"200px"}}> Please Wait.... </h1></div>
        }
        </Box>  
    </Box>
    </>
  )
}

export default Home
