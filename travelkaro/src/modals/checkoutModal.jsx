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
    Select,
    FormControl,
    Input,
    FormLabel,
    Center
  } from '@chakra-ui/react'
  import Order from "./Order"
import { useState } from 'react'
let r = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
export default function Checkout(prop) {
    // const [size, setSize] = React.useState('')
    const {price,name,checkin,checkout} = prop
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [room,setRoom] = useState(1)
    const [RoomsAvailable,SetRoomAvailable] = useState(r)
    const [payment,setPay] = useState("")
    
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
        setPay(selected)
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
              backgroundColor={"#0a438b"}
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
              <Flex justifyContent={"space-between"} alignItems={"center"} borderRadius={"10px"} padding={"10px"} backgroundColor={"#0a438b"} color={"white"}>
              <Heading size={"md"}>{name}</Heading>
              <Text fontWeight={"bold"}>Check In:{checkin}</Text>
              <Text fontWeight={"bold"}>Check Out:{checkout}</Text>
              </Flex>
              <Text fontSize={"20px"} fontWeight="bold">Price Per Room : ${price} USD</Text>
              <Text>Rooms Available : {RoomsAvailable}</Text>

              <Text>Number Of Rooms: {room}</Text>
              <Flex gap={1}>
              <Button disabled={room===1} onClick={()=>handleRoom(-1)}>-</Button>
              <Button>{room}</Button>
              <Button disabled={room===RoomsAvailable} onClick={()=>handleRoom(1)}>+</Button>
              </Flex>
              <Text fontWeight={"bold"} fontSize="20px">Total Amount : $ {total} For {room} Room per Night</Text>
              <Box marginTop={"50px"}>
                <Text fontWeight={"bold"} fontSize={"20px"}>Payment Options</Text>
                <Select w={"50%"} onChange={handleChange} borderColor={"black"} placeholder="Select Pay Method">
                    <option value="cash">Cash</option>
                    <option value="card">Card</option>
                </Select>
                <FormControl width={"30%"} marginTop="20px" display={"grid"} gap="10px">
                   <FormLabel fontSize={"20px"} fontWeight="bold">Enter Card Details</FormLabel>
                   <Select placeholder='Select Card' borderColor={"black"} disabled={payment==="cash"}>
                    <option value="Visa">Visa</option>
                    <option value="Rupay">Rupay</option>
                    <option value="MasterCard">Master Card</option>
                   </Select>
                   <Input type="text" placeholder='Card Holder Name' borderColor={"black"} disabled={payment==="cash"} />
                   <Input type={"number"} placeholder="Card Number" borderColor={"black"} disabled={payment==="cash"} />
                   <Flex gap={2}>
                   <Input type={"month"} placeholder="Expiry Date" borderColor={"black"} disabled={payment==="cash"}/>
                   <Input type="number" placeholder='CVV' borderColor={"black"} disabled={payment==="cash"}/>
                   </Flex>
                </FormControl>
              </Box>
              <Box marginTop="20px" onClose={onClose}>
                 {/* <Button backgroundColor={"#0a438b"} color="white">{payment=="cash"? "Book Now Pay at Hotel" : "Pay Now"}</Button> */}
                 <Order payment={payment} checkin={checkin} checkout={checkout} name={name}/>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }