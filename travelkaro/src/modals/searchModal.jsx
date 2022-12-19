import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,Text,Box
} from '@chakra-ui/react'
import React from 'react'
import { FaMapMarkerAlt,FaPlane } from "react-icons/fa";

const SearchModal = ({dispatch}) => {
  return (
    <div>
      <Popover>
       <PopoverTrigger>
       <InputGroup w={"100%"}>
       <InputLeftElement pointerEvents='none' children={<FaMapMarkerAlt color='white'/>}/>
       <Input onChange={(e)=>dispatch({
                        type:"UPDATE",
                        value:e.target.value,
                        key :"search"
                     })} id="searchInput" border={"1px solid black"} borderColor={"white"} type='search' color={"white"} placeholder='Going To'/>
         </InputGroup>            
       </PopoverTrigger>
    <PopoverContent>
    <PopoverCloseButton />
    <PopoverHeader>Popular Destinations</PopoverHeader>
    <PopoverBody>
      <Stack gap={1}>
        <Box border={"0px solid black"} borderRadius="10px" _hover={{backgroundColor:"grey",color:"white"}} height="50px" display={"flex"} justifyContent={"left"}  >
          <Text onClick={()=>document.getElementById("searchInput").value="delhi"} marginLeft={"10px"} display={"flex"} alignItems="center" gap={4} cursor={"pointer"}><FaPlane/>Delhi</Text>
        </Box>
        <Box border={"0px solid black"} borderRadius="10px" _hover={{backgroundColor:"grey",color:"white"}} height="50px" display={"flex"} justifyContent={"left"}>
          <Text onClick={()=>document.getElementById("searchInput").value="dubai"}  value="dubai" marginLeft={"10px"} display={"flex"} alignItems="center" gap={4} cursor={"pointer"}><FaMapMarkerAlt/>Dubai</Text>
        </Box>
        <Box border={"0px solid black"} borderRadius="10px" _hover={{backgroundColor:"grey",color:"white"}} height="50px" display={"flex"} justifyContent={"left"}>
          <Text onClick={()=>document.getElementById("searchInput").value="jaipur"}  value="jaipur" marginLeft={"10px"} display={"flex"} alignItems="center" gap={4} cursor={"pointer"}><FaMapMarkerAlt/>Jaipur</Text>
        </Box>
        <Box border={"0px solid black"} borderRadius="10px" _hover={{backgroundColor:"grey",color:"white"}} height="50px" display={"flex"} justifyContent={"left"}>
          <Text onClick={()=>document.getElementById("searchInput").value="gurgaon"}  value="gurgaon" marginLeft={"10px"} display={"flex"} alignItems="center" gap={4} cursor={"pointer"}><FaMapMarkerAlt/>Gurgaon</Text>
        </Box>
      </Stack>
    </PopoverBody>
  </PopoverContent>
</Popover>
    </div>
  )
}

export default SearchModal
