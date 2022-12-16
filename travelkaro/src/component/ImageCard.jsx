import { Grid, GridItem,Image,Text,Heading } from '@chakra-ui/react'
import "../styles/searchBox.css"

export default function Imagecard(){

   return <>
   <Grid templateColumns='repeat(3, 1fr)' h={"fit-content"} gap={6} margin={"auto"} marginTop={"300px"} width="80%">
     <GridItem id='gridItem' w='100%' h='10'  borderRadius={"10px"} position={"relative"}>
      <Image w={"100%"} id='gridImg' src='https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_FitForYou_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh' alt='Dan Abramov' />
      <Text id='imgText' left={4}>Find Your Perfect Hotel</Text>
      <p id='gridtext'>Plan a trip for the whole family--from family travel trips to family-friendly,our tools make it easy</p>
     </GridItem>
     <GridItem id='gridItem' w='100%' h='10'  position={"relative"}>
      <Image id='gridImg' src='https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_Transparency_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh' alt='Dan Abramov' />
      <Text id='imgText' left={4}>Book With Flexibility</Text>
      <p id='gridtext'>Looking for a change of scenery, but wantsomething flexible? With free cancellation on most hotel, you can book with peace of mind.</p>
     </GridItem>
     <GridItem id='gridItem' w='100%' h='10'  position={"relative"}>
      <Image id='gridImg' src='https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_GotYourBack_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh' alt='Dan Abramov' />
      <Text id='imgText' left={4} >We've got your Back</Text>
      <p  id='gridtext'>Need more help along your journey? We offer 24/7 support on social and through virtual agents onsite.</p>
     </GridItem>
    </Grid>
    <Grid templateColumns='repeat(2, 1fr)' gap={6} w="80%" margin={"auto"}  marginTop={"30px"}>
        <GridItem position={"relative"}>
         <Image id='gridImg2' src='https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_AllInclusive_imgB_1199x399_20211104.jpg' alt="img"/>
          <div id='imgDiv'>
             <Text id='imgText2'>All-inclusive resorts </Text>
             <p className='imgpTag'>Think of nothing beyond having a great time with your family</p>
          </div>
        </GridItem>
        <GridItem position="relative">
         <Image w={"100%"}  id='gridImg2' src='https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_LastMinute_imgB_1199x399_20211104.jpg' alt="img"/>
          <div id='imgDiv'>
             <Text id='imgText2'>Last minute getaways</Text>
             <p className='imgpTag'>Celebrate the moment with an unexpected getaway</p>
          </div>
        </GridItem>
    </Grid>
    <Heading marginLeft={"150px"} marginTop="40px">Start planning your next trip</Heading>
    <Grid templateColumns='repeat(4, 1fr)' w={"80%"} margin="auto" gap={6} marginTop="20px">
        <GridItem position="relative"> 
            <Image id='gridImg3' src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Beach_imgB_900x506_20211104.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh"/>
            <Text id='imgText3'>Sunny Beach hotel offers</Text>
        </GridItem>
        <GridItem position="relative">
            <Image id='gridImg3' src='https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Car_imgB_900x506_20211104.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh'/>
            <Text id='imgText3'>Car Rentals Deals</Text>
        </GridItem>
        <GridItem position="relative">
            <Image id='gridImg3' src='https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_MOD_imgB_900x506_20211104.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh'/>
            <Text id='imgText3'>Members discounts</Text>
        </GridItem>
        <GridItem position="relative">
            <Image id='gridImg3' src='https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_VacationRentals_imgB_900x506_20211104.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh'/>
            <Text id='imgText3'>Vacation rentals offers</Text>
        </GridItem>
    </Grid>
    <Heading marginLeft={"150px"} marginTop="40px">Featured offers</Heading>
    <Grid w={"80%"} margin="auto" display={"flex"} gap={6} marginTop="15px">
        <GridItem w={"992px"} h={"248px"} position={"relative"}>
            <Image w={"100%"} borderRadius={"10px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} src='https://drive.google.com/uc?export=view&id=1W09xQu5yWrwbUs4FGtZJt5DlYkU4QLWB' alt="alt"/>
            <div id='imgDiv2'>
                <Text color={"white"} fontFamily={"sans-serif"} fontWeight="bold" fontSize={"20px"}>Family Vacation Deals</Text>
                <Text color={"white"} fontFamily={"sans-serif"}>Seize your next unforgottable family Vacation</Text>
            </div>
        </GridItem>
        <GridItem>
            <Image borderRadius={"10px"}  src='https://tpc.googlesyndication.com/simgad/4329021970826970148?' alt="alt"/>
        </GridItem>
    </Grid>
    <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/ItS8X0SjT4s`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
</>
}