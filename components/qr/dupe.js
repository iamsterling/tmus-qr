// ------------------------------------------------------ //
// 1. import React
// ------------------------------------------------------ //
import React from 'react'
// ------------------------------------------------------ //
// 2. Third Party Libraries
// ------------------------------------------------------ //
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Input,
  Stack, StackDivider, HStack, VStack,
  Wrap } from '@chakra-ui/react'
// ------------------------------------------------------ //
// 3. QR Fragment Logic
// ------------------------------------------------------ //
import { QRLogo } from '../logo'
import QRCode from './fragments/generate'
import { 
  QRField,
  QRForm,
  QRInputContact,
  QRInputURL,
} from './fragments/input'
import { generate, QROutput } from './fragments/output'
import QRActions  from './fragments/actions'
// ------------------------------------------------------ //
// Rename fragments and partials for easy access
// ------------------------------------------------------ //
QuickResponse.Logo                    = QRLogo
// ------------------------------------------------------ //
// fragments
// ------------------------------------------------------ //
QuickResponse.fragment                = QuickResponse
QuickResponse.fragment.Form           = QRForm
QuickResponse.fragment.Field          = QRField
// ------------------------------------------------------ //
// partials
// ------------------------------------------------------ //
QuickResponse.partial                 = QuickResponse
QuickResponse.partial.Contact         = QRInputContact
QuickResponse.partial.Url             = QRInputURL
QuickResponse.Output                  = QROutput
QuickResponse.Actions                 = QRActions

// ------------------------------------------------------ //
export function QuickResponse(props) {

  // ---------------------------------------------------- //
  // set states
  // ---------------------------------------------------- //
  // QRData
  // ---------------------------------------------------- //
  const [QRData,  setQRData]           = React.useState("")
  const [contactData, setcontactData]  = React.useState({
    firstName: "test",
    lastName: "",
    title: "",
    phone: "",
    email: "",
    addressStreet: "",
    addressCity: "",
    addressState: "",
    addressZip: "",
  })
  const [urlData, seturlData]          =  React.useState("")

      /*create reference element to print the result to
      const QRResult = React.useRef()*/

  // ---------------------------------------------------- //
  // form behavior
  // ---------------------------------------------------- //
  // change
  // ---------------------------------------------------- //
  const fieldChange = e => {
    e => setcontactData[e.target.name](e.target.value)

    // spit new value out to console
    console.log((contactData.firstName))
  }
      //handleChange(event){
		  //  const {name, value} = event.target
  // ---------------------------------------------------- //
  // button behavior
  // ---------------------------------------------------- //
  // generate
  // ---------------------------------------------------- //
  const buttonGenerate = e => {
    // prevent default action
    e.preventDefault()

    // update input states
    fieldChange()
    console.log("submitted")
    
    // update QR data
    // if props.contact, then format QRData as VCard, else use urlData.
    if (props.contact) {
      // if address forms are filled out, include address code.
      // if social media is filled out, include it.
      setQRData(`
        BEGIN:VCARD\r\n
        VERSION:4.0\r\n
        FN:${contactData.firstName} ${contactData.lastName}\r\n
        TITLE;:${contactData.title}\r\n
        ORG:T-Mobile\r\n
        EMAIL:${contactData.email}\r\n
        TEL:${contactData.phone}\r\n
        ADR:${contactData.addressStreet},\n
        ${contactData.addressCity},\n
        ${contactData.addressState},\n
        ${contactData.addressZip};;;\r\n
        END:VCARD`
      )
    } else {
        setQRData({urlData})
    }
  }

    // Now we can generate the QR Code based on QRData
    //generate()

    // finally, remove disabled tag from download button.

  // ---------------------------------------------------- //
  // Download
  // ---------------------------------------------------- //
  const buttonDownload = e => {
    console.log("download qr code image")

    // qr.save
  }

	return (
    <>
      <Stack
        direction={["column","column", "row"]}
        maxW="100%"
        py={[0,0,8]} px={0}>


        <Box
          w={["100%","100%", "600px"]}
          px={[8,0]}>
          
          {props.contact ? (
            <QuickResponse.fragment.Field
              name="firstName"
              value={setcontactData.firstName}
              onChange={fieldChange}/>

              
          ) : (
            <QuickResponse.partial.Url
              setQRData={setQRData}
              onChange="" />
          )}
          
        </Box>




        <Container
          pt={[10,10,0]} pb={[0]} px={0}
          w="100%"
          maxW="430px"
          centerContent>

          <QuickResponse.Output
            data={QRData}
            py={3} px={3}>
          
          <p>
            {contactData.firstName}
          </p>
          </QuickResponse.Output>


          <QuickResponse.Actions
            actionLeft={buttonGenerate}
            actionRight={buttonDownload}/>

        </Container>
      </Stack>
    </>
	)
}