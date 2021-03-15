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
} from '@chakra-ui/react'
// 3. import all qr logic
import { QuickResponse } from '../qr'

import { ImDownload,ImQrcode } from 'react-icons/im'
export function QRButton(props){
  return(
    <>
      <chakra.button
        w={["10em", "13em",]}
        h={props.h}
        
        color="white"
        bg={props.color}

        borderColor="black"
        borderWidth="3"
        
        fontWeight="bold"
        _hover={{ bg: (props.colorHover) }}
        borderRadius="30"
        outline="none"
        onClick={props.action}
        type="submit">
          
          {props.icon}

          {props.children}

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
        mx={2}>
        <QRButton
          w="12em"
          h="4em"
          color="#E20074"
          colorHover="#820052"
          icon={ImQrcode}
          action={props.action}>
          
          GENERATE
        </QRButton>
      </Flex>


      <Flex
        mx={2}>
        <QRButton
          w="12em"
          h="4em"
          color="black"
          action={props.action}
          disabled>
          DOWNLOAD
        </QRButton>
      </Flex>
    </>
  )
}