import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    useColorModeValue,
    Button,
    Text,
    Heading,
    Flex,
    Box,
    Select
  } from '@chakra-ui/react'
  
import { useState } from 'react'

export default function Checkout(prop) {
    // const [size, setSize] = React.useState('')
    const {price,name} = prop
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [room,setRoom] = useState(1)
    
    const handleClick = () => {
      onOpen()
    }
    const handleRoom = (val) => {
        setRoom(room+val)
    }
    const total = price*room
    // const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

    const handleChange = (e) => {
        let selected = e.target.value;
        if(selected==="cash"){
            return <>
               <Button>Book Now Pay at Hotel</Button>
            </>
        }else{
            return <>
              <form action="">
              </form> 
            </>
        }
    }
  
    return (
      <>
        <Button
            onClick={() => handleClick()}
            m={4}
            rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
          >Book Now</Button>
  
        <Drawer onClose={onClose} isOpen={isOpen} size={"xl"}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Confirm Booking</DrawerHeader>
            <DrawerBody>
               
              <Heading>Hotel Name : {name}</Heading>
              <Text fontSize={"20px"} fontWeight="bold">Price Per Room : {price} USD</Text>
              <Text>Number Of Rooms: {room}</Text>
              <Flex gap={1}>
              <Button disabled={room===1} onClick={()=>handleRoom(-1)}>-</Button>
              <Button>{room}</Button>
              <Button disabled={room===4} onClick={()=>handleRoom(1)}>+</Button>
              </Flex>
              <Text fontWeight={"bold"} fontSize="20px">Total : $ {total}</Text>
              <Box marginTop={"50px"}>
                <Text fontWeight={"20px"}>Payment Options</Text>
                <Select w={"50%"} onChange={handleChange}>
                    <option value="cash">Cash</option>
                    <option value="card">Card</option>
                </Select>
              </Box>
              <Box marginTop="20px">
                 <Button backgroundColor={"#0a438b"} color="white">Book Now & Pay at Hotel</Button>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }