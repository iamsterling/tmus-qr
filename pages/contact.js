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
    <QuickResponse>
      <QuickResponse.Input.Contact/>
    </QuickResponse>
  )
}