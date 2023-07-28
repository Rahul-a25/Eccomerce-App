import React from 'react'
import Electronic from '../Redux/Action/Ele'
import MenCloth from '../Redux/Action/MenCLoth'
import AllData from '../Redux/Action/AllData'
import Jewelery from '../Redux/Action/Jewelary'
import WomanCloth from '../Redux/Action/WomanCloth'
import { Button, Box} from '@chakra-ui/react'
import {  useDispatch,useSelector } from 'react-redux'
const ProductButton = () => {
    const dispatch=useDispatch()
    const FilData=useSelector((storeData)=>{
      return storeData.FilterData
  })
  return (
    <>
      <Box className='button'>
       <Button onClick={()=>{
      dispatch(AllData(FilData))
  }} colorScheme='teal' size='md'>
    All
  </Button>
  <Button onClick={()=>{
    dispatch(MenCloth(FilData))
  }} colorScheme='teal' size='md'>
    Men's Cloth
  </Button>
  <Button onClick={()=>{
      dispatch(WomanCloth(FilData))
  }} colorScheme='teal' size='md'>
    Woman Cloth
  </Button>
  <Button onClick={()=>{
      dispatch(Electronic(FilData))
  }} colorScheme='teal' size='md'>
    Electronic
  </Button>
  <Button onClick={()=>{
      dispatch(Jewelery(FilData))
  }}  colorScheme='teal' size='md'>
     Jewelary
  </Button>
        </Box>   

    </>
  )
}

export default ProductButton
