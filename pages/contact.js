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



export default function Contact(){

  return (
    <QuickResponse
      contact>
        
      <QuickResponse.Input.Form>
        <QuickResponse.Input.Contact/>
      </QuickResponse.Input.Form>

    </QuickResponse>
  )
}