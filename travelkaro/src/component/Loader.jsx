import React from 'react'
import {Image} from "@chakra-ui/react"


const Loader = () => {
  return (
    <div style={{width:"100%",border:"0px solid black"}}>
      <Image border={"0px solid black"} position="absolute" top={18} right={"17%"} margin={"auto"} src="https://drive.google.com/uc?export=view&id=1Pw-MzKcQh5lJZ704rNGXjuVv23Mi2JYR" alt="loader" />
    </div>
  )
}

export default Loader
