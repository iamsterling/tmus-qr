// ------------------------------------------------------ //
// 1. import React
// ------------------------------------------------------ //
import React, { Component, setState } from 'react'
import { useForm } from 'react-hook-form';
// ------------------------------------------------------ //
// 2. import Third Party Libraries
// ------------------------------------------------------ //
import {
	chakra,
  Center,
	Flex,
	Input,
  Stack,
} from '@chakra-ui/react'
import {HiOutlineMoon} from 'react-icons/hi'
// ------------------------------------------------------ //
// 3. import all QR logic
// ------------------------------------------------------ //
import { QuickResponse } from '../qr' 

// import theme??
//import { theme } from '../../theme'


// ------------------------------------------------------ //
// Input Fragments
// ------------------------------------------------------ //
// Form
// ------------------------------------------------------ //
export function QRInputForm(props){

  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

	return(
		<Center>
			<chakra.form
        name="input"
        onSubmit={(handleSubmit(onSubmit))}
        w="100%">

				{props.children}
			</chakra.form>
		</Center>
  )}
// ------------------------------------------------------ //
// Field
// ------------------------------------------------------ //
export function QRInputField(props) {
	return(
		<chakra.input
			h={["4em", "4em", "4.5em", "4.5em"]}
      w="50%"
			mr={props.mr} ml={props.ml}

			outline="none"
      userSelect="none"
			borderRadius="0"
			borderBottom="0.1em solid rgba(0,0,0,0.05)"
      borderColor="rgba(0,0,0,0.05)"
      
      // states:
			_focus={{
        transition:{duration: 0.5},
        borderBottom: "0.1em solid",
        borderColor: "primary.0",
        bg: "rgba(0,0,0,0.01)",
        color:"black",
        caretColor:"primary.0",
      }}

      {...props}/>
	)}
// ------------------------------------------------------ //
// Contact Input
// ------------------------------------------------------ //
export function QRPartialContact(props){
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  // let fieldContent()
  // w=""
  // value=""
  // name=""
  // placeholder=""
  // onChange=""
  // ref="register"


  return(
    <>
      <QRInputForm>

        <Stack
          direction="row"
          p={0}>

          <QRInputField
            type="text"
            name="firstName"
            value={props.fname}
            placeholder="First Name"
            onChange={props.onChange}/>

          <QRInputField
            name="lastName"
            placeholder="Last Name"
            value={props.lname}
            onChange={props.onChange}/>
        </Stack>

        <Stack
          direction="row"
          p={0}>
          <QRInputField
            value=""
            placeholder="Job Title"
            onChange={props.onChange}/>

          <QRInputField
            value=""
            placeholder="Twitter Handle"
            onChange={null}/>
        </Stack>

        <Stack
          direction="row">
          <QRInputField
              value=""
              placeholder="Phone Number"
              onChange={null}/>

          <QRInputField
            value=""
            placeholder="Email Address"
            onChange={null}/>
        </Stack>

        <Stack
          direction="row">
          <QRInputField
              value=""
              placeholder="Street"
              onChange={null}/>

          <QRInputField
            value=""
            placeholder="City"
            onChange={null}/>
        </Stack>

        <Stack
          direction="row">
          <QRInputField
              value=""
              placeholder="State"
              onChange={null}/>

          <QRInputField
            value=""
            placeholder="Zip"
            onChange={null}/>
        </Stack>
      </QRInputForm>
    </>

  )
}

// ------------------------------------------------------ //
// URL Input
// ------------------------------------------------------ //
export function QRPartialURL(props) {
  // ---------------------------------------------------- //
  //
  // ---------------------------------------------------- //

  //  let [urlData, seturlData] = React.useState("poop2")
  // ---------------------------------------------------- //
  //props.setQRData ("testURL")
  
  return(
    <>
      <QRInputForm>
        <Flex>
          <QRInputField
            w="100%"
            
            placeholder="Url"/>
        </Flex>
      </QRInputForm>
    </>
  )
}