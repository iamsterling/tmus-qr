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
  Stack, StackDivider, HStack, VStack,
  Wrap } from '@chakra-ui/react'

import QRCode from './fragments/generate'
// 3. import QR Logic to reassign for reusable components
import { QRLogo } from '../logo'
import { 
  Format,
  QRContactFormat,
  QRField,
  QRForm,
  QRInput,
  QRInputContact,
  QRUrl } from './fragments/input'
import { generate, QROutput } from './fragments/output'
import QRActions  from './fragments/actions'



// -----------------
// 
export function QuickResponse(props) {

  // set QRData and setQRData
  // use context API to set QRColorMode and QRBrand
  const [QRData,  setQRData]  = React.useState("")
  const [QRColorMode, setQRColor] = React.useState("")
  const [QRBrand, setQRBrand] = React.useState("")


  // create reference element to print the result to
  const QRResult = React.useRef()



  /// TOP PRIORITY: PARSE INPUT!!
  const handleGenerate = e => {

    console.log("generated")
    // prevent default action: reloading
    e.preventDefault()

    // instead, setQRData based on whether property
    // `contact`is defined in parent component.
    if (props.contact) {
      // format input data as QRData
      setQRData(`
      	BEGIN:VCARD\r\n
        VERSION:4.0\r\n
        FN:${props.fname} ${props.lname}\r\n
        TITLE;:${props.title}\r\n
        ORG:T-Mobile\r\n
        EMAIL:${props.email}\r\n
        TEL:${props.tel}\r\n
        ADR;type=WORK;type=pref:;;;880 S. Preston Rd. #40\n
        Prosper\n
        TX\n
        75078;;;\r\n
        END:VCARD
      `)

    } else {
      // else, just setQRData
      setQRData("URL QR Data")
    }

    // Now we can generate the QR Code based on QRData
    //generate()

    // finally, remove disabled tag from download button.

  }





  const handleDownload =e => {
    alert("download")

    // qr.save
  }

	return(
    <>
      <Stack
        direction={["column","column", "row"]}
        maxW="100%"
        py={[0,0,8]} px={0} >


        <Box
          w={["100%","100%", "600px"]}>
          {props.children}
        </Box>




        <Container
          pt={[10,10,0]} pb={[0]} px={0}
          w="100%"
          maxW="430px"
          centerContent>

          <QuickResponse.Output
            data={QRData}
            py={3} px={3}/>

          <QuickResponse.Actions
            actionLeft={handleGenerate}
            actionRight={handleDownload}/>

        </Container>
      </Stack>
    </>
	)
}



// -----------------
// Rename Components for easy access
QuickResponse.Logo                = QRLogo
// -----------------
// Input
QuickResponse.Input               = QRInput
QuickResponse.Input.Form          = QRForm
QuickResponse.Input.Field         = QRField
QuickResponse.Input.Contact       = QRInputContact
// -----------------
// Output
QuickResponse.Output              = QROutput
// -----------------
// Actions
QuickResponse.Actions             = QRActions
// Formatting
//QuickResponse.Format          = Format
