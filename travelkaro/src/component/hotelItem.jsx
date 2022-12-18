
import React from 'react'
import HotelCard from './HotelCard'

const HotelItem = ({hotel=[]}) => {
  return (
    <>
      {
        hotel.map(ele=>(
            <HotelCard key={ele.id} {...ele}/>
        ))
      }
    </>
  )
}

export default HotelItem
