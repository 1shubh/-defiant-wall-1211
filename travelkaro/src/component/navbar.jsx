import "../styles/navbar.css"
import { useNavigate } from "react-router-dom"
import MoreTravel from "../modals/MoreTravel"
import SignInModal from "../modals/signInModal"

export default function Navbar(){
     const navigate = useNavigate()
     return (
        <div className="navbar">
          <div id="logo" style={{cursor:"pointer"}}>
          <img src="https://drive.google.com/uc?export=view&id=15dVvbPS2dO3o0weNinb_6WMyepntrOAs" alt="logo" onClick={()=>navigate("/")} />
                 <div id="menutravel">
                      <MoreTravel/>
                 </div>
          </div>
          <div id="menuBar">
              <p>List Your Property</p>
              <p>Support</p>
              <p>Trips</p>
              <SignInModal/>
          </div>
        </div>
     ) 
}