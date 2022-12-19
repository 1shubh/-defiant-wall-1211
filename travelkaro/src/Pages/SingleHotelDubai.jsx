import axios from "axios"
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    Grid,
    GridItem,
  } from '@chakra-ui/react';
//   import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
//   import { MdLocalShipping } from 'react-icons/md';
import Navbar from '../component/navbar';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {MdPool,MdRestaurant,MdOutlineReviews} from "react-icons/md"
import { FaSnowflake,FaTv,FaWifi,FaSpa } from "react-icons/fa"
import Carousel from "../component/crousel";
import Checkout from "../modals/checkoutModal";
import Loader from "../component/Loader";


const dataLS = JSON.parse(localStorage.getItem("searchQuery")) 

  export default function SingleHotelDubai() {
   const {id} = useParams();
   const [data,setData] = useState({})
   const [loading,setLoading] = useState(false)
   
   useEffect(()=>{
    setLoading(true)
    axios.get(`https://bookitserver.onrender.com/dubai/${id}`).then((res)=>{
        setData(res.data)
      setLoading(false)
    }).catch((err)=>{
        console.log(err)
    })
   },[])
   console.log(data)
//    let images = []
//    images.push(data.image1)
//    images.push(data.image2)
//    images.push(data.image3)
//    images.push(data.image4)
//    console.log(images)
    return loading ? <Loader/> : (<>
       <Navbar/>
      <Container maxW={'80%'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Grid border={"0px solid red"} gap={"10px"} marginBottom="400px">
            <GridItem height={"fit-content"} border={"0px solid black"}>
              <Image
              rounded={'md'}
              alt={'product image'}
              src={data.image1}
              fit={'cover'}
              align={'center'}
              w={'100%'}
            //   h={{ base: '100%', sm: '400px', lg: '500px' }}
             />
            </GridItem>
            <Grid height={"fit-content"} border={"0px solid blue"} templateColumns={"repeat(3,1fr)"} gap={1}>
               <GridItem >
               <Image src={data.image2}/></GridItem>
               <GridItem>
               <Image src={data.image3}/>
               </GridItem>
               <GridItem>
               <Image src={data.image4}/>
               </GridItem>
            </Grid>
          </Grid>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {data.name}
              </Heading>
              <Text
                color={"black"}
                fontWeight={300}
                fontSize={'2xl'}>
                {data.city}
              </Text>
              <Text
                color={"black"}
                fontWeight={300}
                fontSize={'2xl'}>
                ${data.price2} USD/Night
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  {data.rating2}
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}
                  fontWeight="bold"
                  >
                  Popular amenities
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem display={"flex"} justifyContent="space-around" alignItems={"center"} w={"20%"}><MdPool fontSize={"20px"}/> Pool</ListItem>
                    <ListItem display={"flex"} justifyContent="space-around" alignItems={"center"} w={"50%"}><FaSnowflake/> Air conditioning</ListItem>
                    <ListItem display={"flex"} justifyContent="space-around" alignItems={"center"} w={"20%"}><FaTv/>TV</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem display={"flex"} justifyContent="space-around" alignItems={"center"} w={"20%"}><FaWifi/>WIFI</ListItem>
                    <ListItem display={"flex"} justifyContent="space-around" alignItems={"center"} w={"20%"}><FaSpa/>Spa</ListItem>
                    <ListItem display={"flex"} justifyContent="space-around" alignItems={"center"} w={"40%"}><MdRestaurant/>Restaurant</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Hotel Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                     Enhanced cleanliness measures
                    </Text>{' '}
                    Disinfectant is used to clean the property
                    High-touch surfaces are cleaned and disinfected
                    Sheets and towels are washed at 60°C/140°F or hotter
                    Guest accommodations are sealed after cleaning
                    Follows standard cleaning and disinfection practices of Commitment to Clean (Marriott)
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Social distancing
                    </Text>{' '}
                    Contactless check-in and check-out
                    Cashless transactions are available for all charges at the property
                    Protective shields in place at main contact areas
                    Social distancing measures in place
                    Contactless room service is available
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Safety measures
                    </Text>{' '}
                    Personal protective equipment worn by staff
                    Temperature checks given to staff
                    Temperature checks available for guests
                    Masks and gloves available
                    Masks are required at the property
                    Hand sanitizer provided
                    Enhanced food service safety measures are in place
                    Individually-wrapped food options available for breakfast, lunch, dinner, and through room service
                  </ListItem>
                </List>
              </Box>
            </Stack>
  
            {/* <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Book Now
            </Button> */}
            <Checkout price={data.price2} name={data.name} checkin={dataLS.checkin} checkout={dataLS.checkout}/>
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              {/* <MdLocalShipping /> */}
              {/* <Text>2-3 business days delivery</Text> */}
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      </>
    );
  }
