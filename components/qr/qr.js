import React from 'react'

// QR Input & Output
import { Input, VCard } from './input'
import { QRLogo } from '../nav/logo'
import { QROutput } from './output'

import { Button, Stack } from '@chakra-ui/react'


export class QuickResponse extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      QRData: ``,
    }
  }

  render(){
    return(
      null
    )
  }
}

export function Buttons(props) {
  return(
    <Stack direction="row" spacing={6}>
      {props.children}
    </Stack>
  )
}

// Rename Components for easy access
QuickResponse.Input           = Input
QuickResponse.Input.VCard     = VCard
//QuickResponse.Input.Url       = Url
QuickResponse.Output          = QROutput

QuickResponse.Buttons         = Buttons
QuickResponse.Logo            = QRLogo