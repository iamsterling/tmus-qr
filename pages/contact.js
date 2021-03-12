// Libraries
import React from 'react'
import {
  Box,
  Button,
  Container,
  Flex,
  Text } from '@chakra-ui/react'

// Local Imports
import { QuickResponse } from '../components/qr/qr'



export default function ContactInput(){

  return (
    <QuickResponse
      type="contact"
      formValues="
        firstName: ''"
      contact>
      
      <Flex
        direction={["column", "row", "row", "row"]}
        >
        <QuickResponse.Input
          w="50%"
          placeholder="First Name"/>
        <QuickResponse.Input
          w="50%"/>
      </Flex>

      <Flex>
        <QuickResponse.Input/>
        <QuickResponse.Input/>
      </Flex>

    </QuickResponse>
  )
}