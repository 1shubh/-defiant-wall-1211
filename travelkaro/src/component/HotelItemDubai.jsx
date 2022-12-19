
import React from 'react'
import HotelCardDubai from './HotelCardDubai'

const HotelItemDubai = ({hotel=[]}) => {
  return (
    <>
      {
        hotel.map(ele=>(
            <HotelCardDubai key={ele.id} {...ele}/>
        ))
      }
    </>
  )
}

export default HotelItemDubai
