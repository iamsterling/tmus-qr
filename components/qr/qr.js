
// 1. import React
import React from 'react'
// 2. Chakra
import {
  Button,
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
export class QuickResponse extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
    }
  }

  render(){
    return(
      null
    )
  }
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
