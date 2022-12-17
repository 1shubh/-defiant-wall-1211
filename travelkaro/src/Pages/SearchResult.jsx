import React from 'react'
import Navbar from '../component/navbar'
import {Box} from "@chakra-ui/react"
import HotelCard from "../component/HotelCard"

const SearchResult = () => {
  return (
    <div>
      <Navbar/>
      <Box>
         <HotelCard/>
      </Box>
    </div>
  )
}

export default SearchResult
