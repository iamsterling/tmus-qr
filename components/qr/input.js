import React, { Component, setState } from 'react'
import {submitQRData} from './output' 

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
	Grid, GridItem } from '@chakra-ui/react'

export class VCard extends React.Component {
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
			<Container>
				<Grid
					templateColumns="repeat(2)"
					gap={2}>
					<GridItem
						colSpan={2}>
						<Input
							type="text"
							name="firstName"
							defaultValue=""
							placeholder="First Name"
							onChange={this.handleChange}/>
					</GridItem>

					<GridItem
						colSpan={2}>
						<Input
							type="text"
							name="lastName"
							defaultValue=""
							placeholder="Last Name"
							onChange={this.handleChange}/>
					</GridItem>
				</Grid>
			</Container>
		)
	}
}



//
function Container(props) {
	return(
		<Flex>
			{props.children}
		</Flex>
	)
}

// reusable input field
export function Input(props) {
	return(
		<FormControl id={props.name}>
			<FormLabel>{props.placeholder}</FormLabel>
			<input
				type={props.type}
				name={props.name}
				value={props.value}
				placeholder={props.placeholder} 
				onChange={props.handleChange}/>
		</FormControl>
	)
}