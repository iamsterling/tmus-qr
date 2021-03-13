
// 1. import React
import React from 'react'
// 2. Third Party Libraries
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Input,
  Stack, HStack, VStack,
  Wrap } from '@chakra-ui/react'

import QRCode from './fragments/generate'
// 3. import QR Logic to reassign for reusable components
import { QRLogo } from '../logo'
import { 
  Format,
  QRField,
  QRInput,
  QRContactFormat,
  QRUrl } from './fragments/input'
import { generate, QROutput } from './fragments/output'
import QRActions  from './fragments/actions'



// -----------------
// 
export function QuickResponse(props) {

  // define variables
  let formatContact = QuickResponse.Format
  // set QRData and setQRData
  // use context API to set QRColorMode and QRBrand
  const [QRData,  setQRData]  = React.useState("")
  const [QRColorMode, setQRColor] = React.useState("")
  const [QRBrand, setQRBrand] = React.useState("")





  /// TOP PRIORITY: PARSE INPUT!!
  const handleSubmit = e => {
    // prevent default action: reloading
    e.preventDefault()
    
    // instead, setQRData based on whether property
    // `contact`is defined in parent component.
    if (props.contact) {
      // format input data
      formatContact = () => {
        
      }
      // then set formatted data as QRData
      setQRData("Contact QR Data")
    } else {
      // just setQRData
      setQRData("URL QR Data")
    }

    

    // Finally, we can generate the QR Code based on QRData
    generate({QRData})

  }



	return(
		<Flex
      px="6"
      w="100%">

      <Stack
        inLine>

        <Flex>
          {props.children}
        </Flex>
        




        <QuickResponse.Output
          data={QRData}/>

        <QuickResponse.Actions
          action={handleSubmit}/>

      </Stack>
    </Flex>
		
	)
}



// -----------------
// Rename Components for easy access
QuickResponse.Logo            = QRLogo
// -----------------
// Input
QuickResponse.Input           = QRInput
QuickResponse.Input.Field     = QRField
// -----------------

// Output
QuickResponse.Output          = QROutput
// -----------------
// Actions
QuickResponse.Actions         = QRActions
// Formatting
QuickResponse.Format          = Format