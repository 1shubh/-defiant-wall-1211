import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Signin from "../Pages/Signin"
import Signup from "../Pages/Signup"
import SearchResult from "../Pages/SearchResult"
import SearchResultJaipur from "../Pages/searchResultJaipur"
import SearchResultDubai from "../Pages/searchResultDubai"
import SearchResultGurgaon from "../Pages/searchResultGurgaon"
import SingleHotel from "../Pages/singleHotel"
import SingleHotelDubai from "../Pages/SingleHotelDubai"

import React from 'react'
import SingleHotelGurgaon from "../Pages/SingleHotelGurgaon"

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/searchresult" element={<SearchResult/>}/>
        <Route path="/searchresultJaipur" element={<SearchResultJaipur/>} />
        <Route path="/searchresultDubai" element={<SearchResultDubai/>} />
        <Route path="/searchresultGurgaon" element={<SearchResultGurgaon/>} />
        <Route path="/searchresult/:id" element={<SingleHotel/>}/>
        <Route path="/searchresultJaipur/:id" element={<SingleHotel/>}/>
        <Route path="/searchresultDubai/:id" element={<SingleHotelDubai/>}/>
        <Route path="/searchresultGurgaon/:id" element={<SingleHotelGurgaon/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
