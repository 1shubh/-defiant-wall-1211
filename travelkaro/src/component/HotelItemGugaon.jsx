
import React from 'react'
import HotelCardGurgaon from './HotelCardGurgaon'

const HotelItemGurgaon = ({hotel=[]}) => {
  return (
    <>
      {
        hotel.map(ele=>(
            <HotelCardGurgaon key={ele.id} {...ele}/>
        ))
      }
    </>
  )
}

export default HotelItemGurgaon
