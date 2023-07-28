import React from 'react'
import { Button, Box,Text, Card, Image, Divider, ButtonGroup, CardFooter, Center } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import RemoveCart from '../Redux/Action/RemoveCart'
import Navbar from './Navbar'
const Cart = () => {
    const data = useSelector((storeData) => {
        return storeData.CartData
    })
    const dispatch= useDispatch()
    return (
        <>
          <Navbar/>
            <Box style={{ margin: "100px auto" }} >
                {
                    data.length > 0 ? (
                        data.map((e) => {
                            return (
                                <Box style={{ display:"flex",justifyContent:"space-between",alignContent:"center", width: "1000px", padding: "5px", border: "2px solid red", margin: "40px auto" }}>
                                    <Image
                                        style={{ backgroundColor: "black" }}
                                        boxSize='50px'
                                        // objectFit='cover'
                                        src={e.image}
                                        alt='Dan Abramov'

                                    />
                                    <Text>{e.title}</Text>
                                    <Text>Rs.{e.price}</Text>
                                    <Text>{e.rating.rate}</Text>
                                    <Button onClick={()=>{
                                        dispatch(RemoveCart(e))
                                    }}  colorScheme='blue'>Remove</Button>
                                </Box>
                            )
                        })

                    ) : <h1 style={{textAlign:"center",marginTop:"300px",color:"red",fontSize:"60px",boxShadow:"0px 0px 10px red",width:"90%",margin:"300px auto"}}>No Data</h1>
                }

            </Box>
        </>
    )
}

export default Cart
