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
      minHeight="550"
      py={8}>
      
      <QuickResponse.Input.Contact />

      <QuickResponse.Output/>

      <QuickResponse.Actions/>
      
    </Container>
  )
}