import React from 'react'
import {Box,Flex,Image,Heading,Text,Grid, Stack, GridItem,Button} from "@chakra-ui/react"
import {Link as RouterLink} from "react-router-dom"


const HotelCard = (prop) => {
    const {image1,city,name,rating,review,price,price2,review1,id} = prop
  return (
    <Box style={{border:"0px solid black",borderRadius:"10px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",cursor:"pointer"}} w="80%" margin={"auto"} height="fit-content">
        <RouterLink to={`/searchresult/${id}`}>
        <Flex justifyContent={"space-between"}>
           <Box border={"0px solid red"}>
              <Image borderTopLeftRadius={"10px"} borderBottomLeftRadius="10px" w={"100%"} src={image1}/>
           </Box>
           <Stack border={"0px solid blue"} width="70%" height={"98%"} margin="auto" gap={"20"}>
               <Grid marginLeft={"30px"}>
                   <Heading size="md">{name}</Heading>
                   <Text fontSize="sm">{city}</Text>
               </Grid>
               <Flex justifyContent={"space-around"} border="0px solid black" marginLeft="50px">
                   <Text marginLeft={"30px"} fontWeight={"bold"}>{rating} {review1} {review}</Text>
                   <Grid>
                        <Heading fontSize="2xl" marginRight={"30px"} fontFamily={"sans-serif"}>{price}</Heading>
                        <Text fontSize={"md"} fontWeight="bold">{price2}</Text>
                        <Text fontSize={"sm"}>includes taxes & fees</Text>
                        <Button w={"90%"} backgroundColor={"#0a438b"} color={"white"} >Check Availability</Button>
                   </Grid>
               </Flex>
           </Stack>
        </Flex>
        </RouterLink>
    </Box>
  )
}

export default HotelCard
