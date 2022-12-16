import { useState } from "react";
import {FaUser} from "react-icons/fa";
import { Button, ButtonGroup,Text } from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react";
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
  } from '@chakra-ui/react'

export default function NumberOfPerson(){
    const {onClose} = useDisclosure()
    const [adult,SetAdult] = useState(1)
    const [Child,setChild] = useState(0)

    const handleClickAdult = (value) => {
           SetAdult(adult+value)
    }
    const handleClickChild = (value) => {
        setChild(Child+value)
    }
    return <div id="numberOfPerson">
        <Popover>
             <PopoverTrigger>
                     <div className="boxPerson" style={{display:"flex",
                                                 justifyContent: "space-around",
                                                 padding: "8px",
                                                 alignItems: "center",
                                                 cursor: "pointer",
                                                 color:"white"
                                                 }}>
                         <FaUser color="white"/>
                         <p>{adult} Adult</p>
                         <p>{Child} Child</p>
                     </div>
             </PopoverTrigger>
         <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton/>
              <PopoverHeader fontWeight={"bold"} fontSize={"20px"}>Travelers</PopoverHeader>
              <PopoverBody display={"grid"} gap={"10px"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingBottom={10}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <p>Adult</p>
                    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                          <Button disabled={adult===1} fontSize={"20px"} textAlign={"center"}  onClick={()=>handleClickAdult(-1)}>-</Button>
                          <Text width={5} textAlign={"center"}>{adult}</Text>
                          <Button fontSize={"20px"} textAlign={"center"} onClick={()=>handleClickAdult(1)}>+</Button>
                    </div>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <p>Child</p>
                    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                          <Button disabled={Child===0} fontSize={"20px"} onClick={()=>handleClickChild(-1)}>-</Button>
                          <Text width={5} textAlign={"center"}>{Child}</Text>
                          <Button borderRadius={10} fontSize={"20px"} textAlign={"center"} onClick={()=>handleClickChild(1)}>+</Button>
                    </div>
                </div> 
              </PopoverBody>
         </PopoverContent>
</Popover>
    </div>
}