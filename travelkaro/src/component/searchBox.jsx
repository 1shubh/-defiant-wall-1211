import "../styles/searchBox.css"
import { Input,InputGroup,InputLeftElement,Text,Button,Link, useStatStyles} from '@chakra-ui/react'
import NumberOfPerson from "../modals/NumberOfPerson";
import { useNavigate } from "react-router-dom"
import { FaMapMarkerAlt } from "react-icons/fa";
import { useReducer, useState } from "react";


let initalValue = {
    search:"",
    checkin:"",
    checkout:"",
    adult:"",
    child:""
}
function reducer(state, action) {
    switch (action.type) {
      case 'UPDATE':
        return {
          ...state,
          [action.key]: action.value,
        }
      default:
        return state
    }
  }
export default function SearchBox(){
    let navigate = useNavigate()
    const [state,dispatch] = useReducer(reducer,initalValue)
    const [adult,SetAdult] = useState(1)
    const [Child,setChild] = useState(0)
    
    const data = {
        search : state.search,
        checkin : state.checkin,
        checkout : state.checkout,
        adult : adult,
        child : Child,
    }
    const handlesearch = () => {
       localStorage.setItem("searchQuery",JSON.stringify(data.search))

       navigate("searchresult")
    }

     
    return <div id="searchBox">
        <div id="homeVideo">
            {/* <img src="https://images.pexels.com/photos/4655770/pexels-photo-4655770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" /> */}
            <video autoPlay muted loop>
                <source src={require("../video/boaat.mp4")} type="video/mp4"/>
            </video>
        </div>
        <div id="searchBar">
            <Text fontSize='md' color={"white"} marginLeft={"60px"} >Search Hotels</Text>
            <hr style={{width:"90%",margin:"auto"}} />
            <div className="searchBar">
                  <InputGroup w={"40%"}>
                     <InputLeftElement pointerEvents='none' children={<FaMapMarkerAlt color='white'/>}/>
                     <Input onChange={(e)=>dispatch({
                        type:"UPDATE",
                        value:e.target.value,
                        key :"search"
                     })} id="searchInput" border={"1px solid black"} borderColor={"white"} type='search' color={"white"} placeholder='Going To'/>
                 </InputGroup>
                     <span style={{color:"white"}}>CheckIn</span><Input onChange={(e)=>dispatch({
                        type:"UPDATE",
                        value:e.target.value,
                        key :"checkin"
                     })} cursor={"pointer"} borderColor={"white"} color="white" placeholder="Select CheckIn Date" size="md" type="date" width={"10%"}/>
                     <span style={{color:"white"}}>CheckIn</span><Input onChange={(e)=>dispatch({
                        type:"UPDATE",
                        value:e.target.value,
                        key :"checkout"
                     })}  cursor={"pointer"} borderColor={"white"} color="white" placeholder="Select Checkout Date" size="md" type="date" width={"10%"}/>
                 <NumberOfPerson adult={adult} SetAdult={SetAdult} Child={Child} setChild={setChild}/>
            </div>
            <div className="searchBtn">
              <Button colorScheme='blue' w={"100%"} onClick={()=>{
                handlesearch()
            }}>Search</Button>
            </div>
        </div>
    </div>
}