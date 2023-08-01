import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import { Box, Image } from '@chakra-ui/react';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
const ProductCarousel = () => {
    return (
        <>
            <Box style={{ marginTop: "70px",height:"500px"}}>
                <Carousel data-bs-theme="white">
                    <Carousel.Item>
                        <img
                            style={{height:"500px"}}
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1610502778270-c5c6f4c7d575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            style={{height:"500px"}}
                            className="d-block w-100"
                            src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                             style={{height:"500px"}}
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1675455137349-399d41cfcd72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
                            alt="Third slide"
                        />
    
                    </Carousel.Item>
                </Carousel>
            </Box>
        </>
    )
}

export default ProductCarousel
