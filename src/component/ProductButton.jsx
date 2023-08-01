import React from 'react'
import Electronic from '../Redux/Action/Ele'
import MenCloth from '../Redux/Action/MenCLoth'
import AllData from '../Redux/Action/AllData'
import Jewelery from '../Redux/Action/Jewelary'
import WomanCloth from '../Redux/Action/WomanCloth'
import { Button, Box} from '@chakra-ui/react'
import {  useDispatch,useSelector } from 'react-redux'
import { BiCart } from "react-icons/bi";
import {  GiClothes,GiLoincloth,GiGoldBar} from "react-icons/gi";
import { TbBrandElectronicArts } from "react-icons/tb";
const ProductButton = () => {
    const dispatch=useDispatch()
    const FilData=useSelector((storeData)=>{
      return storeData.FilterData
  })
 
  return (
    <>
      <Box className='button'>
       <Button variant='outline' rightIcon={<BiCart />}  className='same' onClick={()=>{
      dispatch(AllData(FilData))
  }} colorScheme='teal' size='lg'>
    All
  </Button>
  <Button rightIcon={<GiClothes  />}  variant='outline'  className='samebtn'  onClick={()=>{
    dispatch(MenCloth(FilData))
  }} colorScheme='teal' size='lg'>
    Men's Cloth
  </Button>
 
  <Button rightIcon={< GiLoincloth/>} variant='outline'  className='samebtn' onClick={()=>{
      dispatch(WomanCloth(FilData))
  }} colorScheme='teal' size='lg'>
    Woman Cloth
  </Button>
 
  <Button rightIcon={<  TbBrandElectronicArts/>}   variant='outline' className='samebtn'  onClick={()=>{
      dispatch(Electronic(FilData))
  }} colorScheme='teal' size='lg'>
    Electronic
  </Button>
  
  <Button rightIcon={<  GiGoldBar/>}  className='samebtn'  variant='outline' onClick={()=>{
      dispatch(Jewelery(FilData))
  }}  colorScheme='teal' size='lg'>
     Jewelary
  </Button>
        </Box>   

    </>
  )
}

export default ProductButton
