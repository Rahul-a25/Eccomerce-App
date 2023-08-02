import React from 'react'
import { Button, Box,Text,  Image,  } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import './Css/home.css'
import RemoveCart from '../Redux/Action/RemoveCart'
import Navbar from './Navbar'
import Dec from '../Redux/Action/DecCount'
import {FaStar} from "react-icons/fa";
const Cart = () => {
    const data = useSelector((storeData) => {
        return storeData.CartData
    })
    const Cartfn=(e)=>{
        dispatch(RemoveCart(e))
        dispatch(Dec(1))
    }
    const dispatch= useDispatch()
    return (
        <>
          <Navbar/>
            <Box style={{ margin: "100px auto" }} >
                {
                    data.length > 0 ? (
                        data.map((e) => {
                            return (
                                <Box key={e.id} style={{ display:"flex",justifyContent:"space-between",alignContent:"center", width: "1200px", padding: "5px", boxShadow:"0px 10px 10px #dfe4ea", margin: "40px auto" }}>
                                    <Image
                                        style={{ backgroundColor: "black",marginLeft:"15px" }}
                                        boxSize='100px'
                                        // objectFit='cover'
                                        src={e.image}
                                        alt='Dan Abramov'

                                    />
                                    <Text className='font' style={{marginTop:'30px',color:"rgb(149, 165, 166)"}} fontSize={30}>{e.title.slice(0,40)}</Text>
                                    <Text className='font' style={{marginTop:'30px'}} fontSize={30} fontWeight={700}>${e.price}</Text>
                                    <Text className='font' style={{marginTop:'30px',display:"flex"}} fontSize={30}><FaStar style={{color:'#fbc531',marginTop:"5px"}} />&nbsp;<span>{e.rating.rate}</span></Text>
                                    {/* dispatch(RemoveCart(e)) */}
                                    <Button className='font' style={{marginTop:'30px',marginRight:"15px"}} onClick={()=>{
                                        Cartfn(e)
                                    }}  colorScheme='red'>Remove</Button>
                                </Box>
                            )
                        })

                    ) : <h1 className='font' style={{textAlign:"center",marginTop:"300px",color:"red",fontSize:"40px",boxShadow:"0px 0px 10px #dfe4ea",width:"90%",margin:"300px auto"}}>Empty Cart</h1>
                }

            </Box>
        </>
    )
}

export default Cart
