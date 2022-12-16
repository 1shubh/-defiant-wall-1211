import "../styles/searchBox.css"
import { Input,InputGroup,InputLeftElement,Text,Button} from '@chakra-ui/react'
import NumberOfPerson from "../modals/NumberOfPerson";

import { FaMapMarkerAlt } from "react-icons/fa";
export default function SearchBox(){
    return <div id="searchBox">
        <div id="homeVideo">
            {/* <img src="https://images.pexels.com/photos/4655770/pexels-photo-4655770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" /> */}
            <video autoPlay muted loop>
                <source src={require("../video/boaat.mp4")} type="video/mp4"/>
            </video>
        </div>
        <div id="searchBar">
            <Text fontSize='md' color={"white"} marginLeft={"60px"}>Search Hotels</Text>
            <hr style={{width:"90%",margin:"auto"}} />
            <div className="searchBar">
                  <InputGroup w={"40%"}>
                  <InputLeftElement pointerEvents='none' children={<FaMapMarkerAlt color='white'/>}/>
                  <Input id="searchInput" border={"1px solid black"} borderColor={"white"} type='search' color={"white"} placeholder='Going To'/>
                 </InputGroup>
                 <span style={{color:"white"}}>CheckIn</span><Input cursor={"pointer"} borderColor={"white"} color="white" placeholder="Select CheckIn Date" size="md" type="date" width={"10%"}/>
                 <span style={{color:"white"}}>CheckIn</span><Input cursor={"pointer"} borderColor={"white"} color="white" placeholder="Select Checkout Date" size="md" type="date" width={"10%"}/>
                 <NumberOfPerson/>
            </div>
            <div className="searchBtn">
               <Button colorScheme='blue' w={"100%"}>Search</Button>
            </div>
        </div>
    </div>
}