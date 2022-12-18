import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Signin from "../Pages/Signin"
import Signup from "../Pages/Signup"
import SearchResult from "../Pages/SearchResult"
import SingleHotel from "../Pages/singleHotel"

import React from 'react'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/searchresult" element={<SearchResult/>}/> 
        <Route path="/searchresult/:id" element={<SingleHotel/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
