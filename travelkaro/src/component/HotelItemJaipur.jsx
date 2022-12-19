
import React from 'react'
import HotelCardJaipur from './HotelCardJaipur'

const HotelItemJaipur = ({hotel=[]}) => {
  return (
    <>
      {
        hotel.map(ele=>(
            <HotelCardJaipur key={ele.id} {...ele}/>
        ))
      }
    </>
  )
}

export default HotelItemJaipur
