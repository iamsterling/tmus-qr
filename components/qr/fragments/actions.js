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



export function QRButton(props){
  return(
    <>
      <chakra.button
        w="200px"
        h="60px"
        
        color="white"
        borderWidth="3"
        bg={props.color}
        fontWeight="semibold"
        _hover={{ bg: (props.colorHover) }}
        borderRadius="30"
  
        onClick={props.action}
        type="submit">

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
      <Flex>
        <QRButton
          color="#E20074"
          colorHover="#820052"
          action={props.action}>
          GENERATE
        </QRButton>

        <QRButton
          color="black"
          action={props.action}
          disabled>
          DOWNLOAD
        </QRButton>
      </Flex>
    </>
  )
}