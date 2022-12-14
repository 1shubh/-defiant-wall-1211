import "../styles/navbar.css"

import MoreTravel from "../modals/MoreTravel"

export default function Navbar(){
     return (
        <div className="navbar">
          <div id="logo">
          <img src="https://drive.google.com/uc?export=view&id=15dVvbPS2dO3o0weNinb_6WMyepntrOAs" alt="logo" />
                 <div id="menutravel">
                      <MoreTravel/>
                 </div>
          </div>
          <div id="menuBar">
              <p>List Your Property</p>
              <p>Support</p>
              <p>Trips</p>
              <p>Sign In</p>
          </div>
        </div>
     ) 
}