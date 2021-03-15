// 1. import React
// 2. import Chakra
import React from 'react'
import ReactDOM from 'react-dom'
import { 
    Box,
    chakra,
    Container,
    Flex,
    Stack,
    Text,
} from '@chakra-ui/react'
// 3. import all qr logic
import { QuickResponse } from '../qr'

import { ImDownload,ImQrcode } from 'react-icons/im'
import { GoCloudDownload } from 'react-icons/go'
export function QRButton(props){
  return(
    <>
      <chakra.button
        w={["10em", "13em",]}
        h={props.h}
        
        color={props.color}
        border=".3em solid"
        borderColor={props.color}
        borderRadius="30"
        fontWeight="bold"



        _hover={{ boxShadow: "2xl" }}
        _active={{ boxShadow:"lg"}}
        outline="0"
        onClick={props.action}
        
        
        userSelect="none">
          
          <Container
            centerContent>
            <Stack
              mx={6}
              direction="row">

              {props.children}
            </Stack>
          </Container>
      </chakra.button>
    </>
  )
}



export default function QRActions(props){

  const download = () => {
    // expand on this later.
    // ideally, provide .svg capabilities.
    console.log("download")
  }


  return(
    <>
      <Flex
        mx={2}
        bottom="0"
        pos="sticky">
        <QRButton
          w="12em"
          h="4em"
          color="#E20074"
          
          leftAction={props.action}>
          
          <ImQrcode
            fontSize="2em"
            color="#E20074"/>
              
          <Text
            px={3}
            py={1}>
            GENERATE
          </Text>
        </QRButton>
      </Flex>


      <Flex
        mx={2}>
        <QRButton
          w="12em"
          h="4em"
          color="rgba(0,0,0,0.2)"
          rightAction={props.action}
          disabled>

          <GoCloudDownload
            fontSize="2em"
            color="rgba(0,0,0,0.2)"
            cursor=""/>
              
          <Text
            px={3}
            py={1}>
            DOWNLOAD
          </Text>
        </QRButton>
      </Flex>
    </>
  )
}