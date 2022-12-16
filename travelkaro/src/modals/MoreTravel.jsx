import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
  import { FaHotel,FaCarAlt,FaPlaneDeparture,FaTicketAlt,FaGlobeAsia } from "react-icons/fa"

  function MoreTravel(){
    const iconStyle = {
        fontSize:"20px"
    }
      return <>    
 <Menu>
    <MenuButton>
       <p id='menueTitle'>More Travel &#709;</p> 
    </MenuButton>
  <MenuList width={"300px"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
    <MenuItem minH='48px' fontFamily="sans-serif">
        <div id='menuDiv'>
           <FaHotel style={iconStyle}/>
          <p>Stays</p>
        </div> 
    </MenuItem>
    <MenuItem minH='40px' gap={5} fontFamily="sans-serif">
        <div id='menuDiv'>
           <FaCarAlt style={iconStyle}/>
           <p>Cars</p>
        </div>
    </MenuItem>
    <MenuItem minH='48px' gap={5} fontFamily="sans-serif">
         <div id='menuDiv'>
           <FaPlaneDeparture style={iconStyle}/>
           <p>Flights</p>
         </div>
    </MenuItem>
    <MenuItem minH='48px' gap={5} fontFamily="sans-serif">
        <div id='menuDiv'>
            <FaTicketAlt style={iconStyle}/>
           <p>Things To Do</p>
        </div>
    </MenuItem>
    <MenuItem minH='48px' gap={5} fontFamily="sans-serif">
        <div id='menuDiv'>
          <FaGlobeAsia style={iconStyle}/>
          <p>Cruise</p>
        </div>
    </MenuItem>
    <MenuItem minH='48px'>
      <p>Trips for Me</p>
    </MenuItem>
    <MenuItem minH='48px'>
      <p>Discover</p>
    </MenuItem>
     <MenuItem minH='48px'>
      <p>Travel Deals</p>
     </MenuItem>
     <MenuItem minH='48px'>
      <p>Get Inspired</p>
     </MenuItem>
     <MenuItem minH='48px'>
      <p>Group Meeting</p>
     </MenuItem>
  </MenuList>
</Menu>
      </>
  }

  export default MoreTravel