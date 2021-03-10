
// 1. import React
import React from 'react'
// 2. Chakra
import {
  Box,
  Button,
  Container,
  Flex,
  Stack } from '@chakra-ui/react'

// 3. import QR Logic to reassign for reusable components
import { QRLogo } from '../logo'
import { 
  QRInput,
  QRContact,
  QRUrl } from './fragments/input'
import { QROutput } from './fragments/output'
import QRActions  from './fragments/actions'


// work on this later
export function QuickResponse(props) {

    return(
      <Container
        w={["100%", "100%", "80%"]}
        minHeight="550"
        
        py={8}>
        
        <Box
          w={["100%", "100%", "50%"]}>
          
          {props.children}
        </Box>

        <Box
          w={["100%", "100%", "50%"]}>
          <QuickResponse.Output/>
        </Box>

          <QuickResponse.Actions/>
      </Container>
    )
}

// -----------------
// Rename Components for easy access
QuickResponse.Logo            = QRLogo
// -----------------
// Input
QuickResponse.Input           = QRInput
// Contact & Url
QuickResponse.Input.Contact   = QRContact
//QuickResponse.Input.Url     = Url
// ----------------- 
// Output
QuickResponse.Output          = QROutput
// -----------------
// Actions
QuickResponse.Actions         = QRActions
