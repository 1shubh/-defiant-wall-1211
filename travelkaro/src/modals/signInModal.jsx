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
    Button,
    Portal
  } from '@chakra-ui/react'
  import { Link } from 'react-router-dom'
 
  


export default function SignInModal(){
    return (
        <>
           <Popover>
                <PopoverTrigger>
                  <p>Sign In</p>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent width="350px" marginRight={"150px"} marginTop={"10px"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
                    {/* <PopoverArrow /> */}
                        <PopoverHeader fontFamily={"sans-serif"} fontWeight="bold" fontSize={17}>Members can access discounts and special features</PopoverHeader>
                    {/* <PopoverCloseButton /> */}
                    <PopoverBody textAlign={"center"} display="grid" gap={"5"}>
                      <Link to="/signin"><Button width={80} color={"white"} bgColor={"rgb(14,91,185)"}>Sign In</Button></Link>
                      <Link to="/signup"><p style={{color:"#0e5bb9",cursor:"pointer"}}>Create Free Account</p></Link>
                    </PopoverBody>
                    <PopoverFooter cursor={"pointer"}>Feedback</PopoverFooter>
                  </PopoverContent>
                </Portal>
              </Popover>
        </>
    )
}