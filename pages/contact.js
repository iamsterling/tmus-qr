// Libraries
import React from 'react'

// Local Imports
import {QuickResponse} from '../components/qr/qr'
import {
  Box,
  Button,
  Container,
  Flex,
  Text } from '@chakra-ui/react'


export default function ContactInput(){

  return (
    <Container
      height="500px">
      <QuickResponse.Input.Contact />



        <Flex
          position="absolute"
          bottom="0">

          <Button
            leftIcon={<QuickResponse.Logo />}
            colorScheme="pink"
            h="60px"
            variant="solid">
            GENERATE
          </Button>

          <Button

            h="60px"
            variant="solid">
            DOWNLOAD
          </Button>
        </Flex>
    </Container>
  )
}