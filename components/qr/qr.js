
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

import { Formik, Form, Field } from 'formik';
import QRCode from './fragments/generate'




// 3. import QR Logic to reassign for reusable components
import { QRLogo } from '../logo'
import { 
  Format,
  QRInput,
  QRContactFormat,
  QRUrl } from './fragments/input'
import { generate, QROutput } from './fragments/output'
import QRActions  from './fragments/actions'




/*

const App = () => {
  const [username, setUsername] = useState('Default username');
  return (
    <>
      <Sibling1 setUsername={setUsername} />
      <Sibling2 username={username} />
    </>
  )
}

const Sibling2 = ({username}) => {
  return <h1> Helo {username}</h1>;
}

const Sibling1 = ({setUsername}) => {
  return <button onClick={setUsername}>Set username</button>;



*/


// index -> qr ->









// -----------------
// 
export function QuickResponse(props) {


  

  // set QRData and setQRData
  // use context API to set QRColorMode and QRBrand
  const [QRData,  setQRData]  = React.useState("")
  const [QRColorMode, setQRColor] = React.useState("")
  const [QRBrand, setQRBrand] = React.useState("")





  


  const format = () => {}







  /// TOP PRIORITY: PARSE INPUT!!
  const handleSubmit = e => {
    // prevent reloading
    e.preventDefault()
    
    if (props.contact) {
      // format input data
      // then set formatted data as QRData
      setQRData("Contact QR Data")
    } else {
      setQRData("URL QR Data")
    }

    

    // THEN WE CAN GENERATE THE QR CODE
    // then generate the QR Code based on QRData
    generate({QRColorMode},{QRBrand},{QRData})

  }



	return(
		<Flex
      w="100%"
      maxW="xlg"
      direction={["column", "row", "row", "row"]}>


      <Stack>
        {/* Separate this into input.js when ready */}
        <form
          name="input">
          {props.children}
        </form>


        <QuickResponse.Output 
          data={QRData}
          color={QRColorMode}
          brand={QRBrand} />



        <QuickResponse.Actions
          action={handleSubmit}
          pos="absolute"
          bottom="0"/>
        
      </Stack>

    </Flex>
		
	)
}



// -----------------
// Rename Components for easy access
QuickResponse.Logo            = QRLogo
// -----------------
// Input
QuickResponse.Input           = Input
// -----------------
// Output
QuickResponse.Output          = QROutput
// -----------------
// Actions
QuickResponse.Actions         = QRActions
// Formatting
QuickResponse.Format          = Format
QuickResponse.Format.Contact  = QRContactFormat