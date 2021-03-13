// 1. import React
// 2. import Chakra
import React from 'react'
import { 
    Box,
    Button,
    Container,
    Flex,
    Stack,
} from '@chakra-ui/react'
// 3. import all qr logic
import { QuickResponse } from '../qr'





export default function QRActions(props){

  const download = () => {
    // expand on this later.
    // ideally, provide .svg capabilities.
    console.log("download")
  }


  return(
    <Flex>
      <Button
        type="submit"
        form="input"
        onClick={props.action}

        leftIcon={<QuickResponse.Logo color="white"/>}
        colorScheme="pink"
        h="60px"
        w="200px"
        borderRadius="30"
        variant="solid">

        GENERATE
      </Button>
    </Flex>
  )
}