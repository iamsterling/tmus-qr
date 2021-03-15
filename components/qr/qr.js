
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
  const submitGenerate = e => {

    console.log("generated")
    // prevent default action: reloading
    e.preventDefault()
    
    // instead, setQRData based on whether property
    // `contact`is defined in parent component.
    if (props.contact) {
      // format input data

      // then set formatted data as QRData
      setQRData("Contact QR Data")
    } else {
      // just setQRData
      setQRData("URL QR Data")
    }    

    // Finally, we can generate the QR Code based on QRData
    generate()

  }

  const submitDownload = e => {}

	return(
    <>
      
      <Stack
        direction={["column", "column", "column", "row"]}
        w="100%"
        spacing={"4px"}
        px={[3]}>

        <Flex
          px={4}
          py={[0,0,4]}>

          <QuickResponse.Input>
            {props.children}
          </QuickResponse.Input>
        </Flex>


        <Container
          centerContent>

          <Flex>
            <QuickResponse.Output
              data={QRData}/>
          </Flex>
          
          <p>{QRData}</p>

          
          <Flex
            py={4}>
            <QuickResponse.Actions
              leftAction={submitGenerate}
              rightAction={submitDownload}/>
          </Flex>
        </Container>

      </Stack>
    </>
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