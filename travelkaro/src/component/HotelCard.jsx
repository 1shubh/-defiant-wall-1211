import React from 'react'
import {Box,Flex,Image,Heading} from "@chakra-ui/react"
const HotelCard = (prop) => {
    const {image,city,name,rating,review,price} = prop
  return (
    <div style={{border:"1px solid black"}}>
        <Flex>
           <Box>
              <Image src="https://images.trvl-media.com/hotels/1000000/540000/531700/531648/57dcfbeb.jpg?impolicy=resizecrop&rw=455&ra=fit"/>
           </Box>
           <Box>
               <Heading fontSize={}>My Hotel</Heading>
           </Box>
        </Flex>
    </div>
  )
}

export default HotelCard
