// 1. import React
// 2. import Chakra
import React, { Component, setState } from 'react'
import { 
	Box,
	Button, 
	ButtonGroup,
	BeatLoader,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Flex,
	Grid, GridItem,
	Input,
	Stack } from '@chakra-ui/react'

// 3. import all QR logic
import { QuickResponse } from '../qr' 




export function QRInput(props){

	// input submission logic goes here
	// use state hooks

	return(
    	<Stack
      		spacing={props.spacing}>
      		{props.children}
    	</Stack>
  	)
}







// all of this logic should go away
// leave the return()
export class QRContact extends React.Component {
	constructor(props) {
		super(props)

		this.submitQRData = React.createRef()

		this.state = {
			fname: ``,
			lname: "",
			title: "",
			company: "T-Mobile",
			email: "",
			phone: "",
			address: {
				street: "",
				city: "",
				state: "",
				country: "United States",
				zip: "",
			},

			QRData: 
				`BEGIN:VCARD\n
				VERSION:4.0\n
				N:Holt;Sterling;;;\n
				FN:Sterling Holt\n
				TITLE:Mobile Expert\n
				ORG:T-Mobile\n
				EMAIL;type=INTERNET;type=pref:james.holt28@t-mobile.com\n
				TEL:972-469-0082\n
				ADR:;;880 S Preston Rd #40;
				Prosper\,;TX\,;
				75078\n
				END:VCARD`,
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.updateQRData = this.updateQRData.bind(this)
	}

	// update the states holding input values as they are changed
	handleChange = e => {
		//
		this.setState({ [e.target.name]: e.target.value })

	}

	updateQRData() {
		// update qrdata state based on updated states
		this.setState({ QRData: 
			`BEGIN:VCARD\n
			VERSION:4.0\n
			FN:${this.state.fname} ${this.state.lname}\n
			TITLE:${this.state.title}\n
			ORG:T-Mobile\n
			EMAIL:${this.state.email}\n
			TEL:${this.state.phone}\n
			ADR:;;${this.state.address.Street};
			${this.state.addressCity}\,;${this.state.addressState}\,;
			${this.state.addressZip}\nEND:VCARD`
		})
	}

	// on submit, push updated values to QR Output component
	handleSubmit = e => {
		// prevent page reloading on submit
		e.preventDefault()
		this.updateQRCode()
	}

	render(){
		return(
			<QuickResponse.Input
				spacing="4">
				<Input
					placeholder="First Name"
					size="lg" 
					width="48%"/>
				<Input
					placeholder="Last Name"
					size="lg" 
					w={[48, 90, 560]}/>
			</QuickResponse.Input>
		)
	}
}


// work on this once the Contact Card logic is done
export function QRUrl() {
	return(
		null
	)
}