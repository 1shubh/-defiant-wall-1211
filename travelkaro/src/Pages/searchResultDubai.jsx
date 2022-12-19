import React, { useEffect, useState } from 'react'
import Navbar from '../component/navbar'
import {Box, Flex,Heading,Text,Select,Grid} from "@chakra-ui/react"
// import HotelCard from "../component/HotelCard"
import HotelItemDubai from '../component/HotelItemDubai'
import Loader from '../component/Loader'
import Pagination from '../component/Pagination'

const data = JSON.parse(localStorage.getItem("searchQuery")) 
console.log(data)


const getProd = (page,limit,sort="asc",filter) => {
  return fetch(`https://bookit-com-deploye.onrender.com/dubai?_sort=price2&_order=${sort}&_page=${page}&_limit=${limit}&review1=${filter}`)
  .then((res)=>res.json())
}
const SearchResultDubai = () => {
  // const [city,setCity] = useState()
  const [searchData,setData] = useState([])
  const [loading,setLoading] = useState(false)
  const [page,setPage] = useState(1)
  const [limit,setLimit] = useState(10)
  const [sort,setSort] = useState("asc")
  const [filter,setFilter] = useState("Very Good")

  useEffect(()=>{
     setLoading(true);
     getProd(page,limit,sort,filter).then((res)=>{
      setData(res)
      setLoading(false)
     }).catch((err)=>{
        console.log(err)
     })
  },[page,limit,sort,filter])

  const handleChange = (e) => {
     let num = Number(e.target.value)
      setLimit(num) 
  }
  const handleSort = (e) => {
    let selected = e.target.value
    setSort(selected)
  }
  const handleFilter = (e) => {
    let selected = e.target.value
     setFilter(selected)
  }
  return (
    <div style={{backgroundColor:"#f0f3f5"}}>
      <Navbar/>

      <Box w={"80%"} border="0px solid black" margin={"auto"}>
        <Box margin="auto" marginTop={20}> 
          <Heading>Searched Results For Dubai</Heading>
        </Box>
        <Flex marginTop="50px" gap={10}>
        <Grid border={"0px solid black"} gap={"50px"} w={"20%"} h="fit-content">
            <Select onChange={handleChange} size='sm' w={"100%"} variant='flushed' placeholder='Results Per Page'>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </Select>
            <Select onChange={handleFilter} size='sm' w={"100%"} variant='flushed' placeholder='Filter Review'>
              <option value="Very Good">Very Good</option>
              <option value="Exceptional">Exceptional</option>
              <option value="Wonderful">Wonderful</option>
              <option value="Excellent">Excellent</option>
            </Select>
            <Select onChange={handleSort} size='sm' w={"100%"} variant='flushed' placeholder='Sort By Price'>
              <option value="acs">Price Low To High</option>
              <option value="desc">Price High To Low</option>
            </Select>
        </Grid>
          <Grid border={"0px solid blue"} w="80%" gap={"20px"}>
            {loading ? <Loader/> : <HotelItemDubai hotel={searchData && searchData} />}
          </Grid>
        </Flex>
       </Box>
      <Pagination page={page} setPage = {setPage} current={page}  />
    </div>
  )
}

export default SearchResultDubai
