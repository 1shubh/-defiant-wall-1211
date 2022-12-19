import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Box,
    Flex
  } from '@chakra-ui/react'
  import React from 'react'
  import {Link} from "react-router-dom"
  import { useNavigate } from 'react-router-dom'
  import {CgCheckR} from "react-icons/cg"

// export default function Order({payment}) {

//     const { isOpen, onOpen, onClose } = useDisclosure()
//     return (
//       <>
//         <Button onClick={onOpen} backgroundColor={"#0a438b"} color="white">{payment==="cash"? "Book Now Pay at Hotel" : "Pay Now"}</Button>
  
//         <Modal isOpen={isOpen} onClose={onClose}>
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>Modal Title</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody>
//               <Text>Hello</Text>
//             </ModalBody>
  
//             <ModalFooter>
//               <Button colorScheme='blue' mr={3} onClick={onClose}>
//                 Close
//               </Button>
//               <Button variant='ghost'>Secondary Action</Button>
//             </ModalFooter>
//           </ModalContent>
//         </Modal>
//       </>
//     )
//   }
export default function Order({payment,checkin,checkout,name}) {
    const navigate = useNavigate()

    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
  
    const OverlayTwo = () => (
      <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='80%'
        backdropBlur='2px'
      />
    )
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
  
    return (
      <>
        {/* <Button
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
          backgroundColor={"#0a438b"} color="white"
        >
          {payment==="cash"? "Book Now Pay at Hotel" : "Pay Now"}  
        </Button> */}
        <Button
          ml='4'
          onClick={() => {
            setOverlay(<OverlayTwo />)
            onOpen()
          }}
          backgroundColor={"#0a438b"} color="white"
        >
         {payment==="cash"? "Book Now Pay at Hotel" : "Pay Now"}
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent backgroundColor={"#0a438b"} color="white">
            <ModalHeader display={"flex"} justifyContent="space-around" width={"50%"} alignItems="center"><CgCheckR fontSize={"20px"}/>Congratulations</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Box borderRadius="10px" padding={"20px"} fontWeight="bold">
                    <Text>{name}</Text>
                    <Text>CheckIn:{checkin} CheckOut:{checkout}</Text>
                    <Text>You Booking Is Confirmed</Text>
                </Box>
            </ModalBody>
            <ModalFooter>
              <Link to="/"><Button onClick={onClose} backgroundColor="white" color={"#0a438b"}>Close</Button></Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }