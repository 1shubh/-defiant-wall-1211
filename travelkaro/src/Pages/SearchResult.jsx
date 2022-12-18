import React, { useEffect, useState } from 'react'
import Navbar from '../component/navbar'
import {Box, Flex,Heading,Text,Select,Grid} from "@chakra-ui/react"
import HotelCard from "../component/HotelCard"
import HotelItem from '../component/hotelItem'
import Loader from '../component/Loader'
import Pagination from '../component/Pagination'

const city = JSON.parse(localStorage.getItem("searchQuery")) 
console.log(city)

const getProd = (page,limit) => {
  return fetch(`https://bookit-com-deploye.onrender.com/${city}?_page=${page}&_limit=${limit}`)
  .then((res)=>res.json())
}
const SearchResult = () => {
  // const [city,setCity] = useState()
  const [searchData,setData] = useState([])
  const [loading,setLoading] = useState(false)
  const [page,setPage] = useState(1)
  const [limit,setLimit] = useState(10)

  useEffect(()=>{
     setLoading(true);
     getProd(page,limit).then((res)=>{
      setData(res)
      setLoading(false)
     }).catch((err)=>{
        console.log(err)
     })
  },[page,limit])

  const handleChange = (e) => {
     let num = Number(e.target.value)
      setLimit(num) 
  }

  return (
    <div style={{backgroundColor:"#f0f3f5"}}>
      <Navbar/>

      <Box w={"80%"} border="0px solid black" margin={"auto"}>
        <Box margin="auto" marginTop={20}> 
          <Heading>Searched Results For {city}</Heading>
        </Box>
        <Flex marginTop="50px" gap={10}>
        <Grid border={"0px solid black"} gap={"50px"} w={"20%"} h="fit-content">
            <Select onChange={handleChange} size='sm' w={"100%"} variant='flushed' placeholder='Results Per Page'>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </Select>
            <Select size='sm' w={"100%"} variant='flushed' placeholder='Filter By Rating'>
              <option value="5">5</option>
              <option value="4">4 to 5</option>
              <option value="3">3 to 4</option>
            </Select>
            <Select size='sm' w={"100%"} variant='flushed' placeholder='Sort By Price'>
              <option value="Acs">Price Low To High</option>
              <option value="Desc">Price High To Low</option>
            </Select>
        </Grid>
          <Grid border={"0px solid blue"} w="80%" gap={"20px"}>
            {loading ? <Loader/> : <HotelItem hotel={searchData && searchData} />}
          </Grid>
        </Flex>
       </Box>
      <Pagination page={page} setPage = {setPage} current={page}  />
    </div>
  )
}

export default SearchResult
