import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Image
  } from '@chakra-ui/react';
  import { AiOutlineArrowLeft } from "react-icons/ai"
  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { AuthContext } from '../context/AuthContext';
  import { useContext } from 'react';
  

  
  export default function Signin() {

    const [email,setEmail] = useState("")
    const [password,setPass] = useState("");
    const [loading,setLoading] = useState(false)
    const {loginUser,authState} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = () => {
      setLoading(true)
      fetch("https://reqres.in/api/login",{
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({email,password})
      })
      .then((res)=>res.json())
      .then((res)=>{
        if(res.token){
          loginUser(res.token)
          navigate("/")
        }
      })
      .catch((err)=>console.log(err))
    }



    return (<>
       <Box borderBottom={"1px solid #e2e3e3"} padding={"10px"} display={"flex"} alignItems="center">
            <Link href='/'><AiOutlineArrowLeft cursor={"pointer"} fontSize="20px"/></Link>
            <Image w={"150px"} margin="auto" src="https://drive.google.com/uc?export=view&id=15dVvbPS2dO3o0weNinb_6WMyepntrOAs" alt="logo"/>
       </Box>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value = {password}
                 onChange={(e)=>setPass(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={()=>handleSubmit()}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </>
    );
  }
