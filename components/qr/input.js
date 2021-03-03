import React, { useState, setState} from 'react'
import {updateQRData} from './output' 

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


// QRInput
export function Input() {
}

export function VCard(props) {

	// Declare state variable
	let vCardData = setState ({
		fname: "First",
		lname: "Last",
		title: "",
		email: "",
		phone: "",
		address: "",
	})

	const handleChange = (event) => {
		let {name, value} = event.target 
		setVCardData([name],value)
	}

	const [ QrData ] = useState(`
		BEGIN:VCARD\n
		VERSION:4.0\n
		N:${vCardData.lname};${vCardData.fname};;;\n
		FN:${props.fname} ${props.lname}\n
		TITLE:${props.title}\n
		ORG:T-Mobile\n
		EMAIL:${props.email}\n
		TEL:${props.phone}\n
		ADR:${props.address}\n
		END:VCARD
	`)





	return(
		<Container>
			<Row>
				<Col xs={12}>
					<Form onSubmit={handleChange}>

						<Form.Control
							type="text"
							name="fname"
							placeholder="First Name"
							value={vCardData.fname}
							onChange={handleChange}/>

						<Button variant="outline-primary" type="submit">Test</Button>
					</Form>
				</Col>
			</Row>


			<p>This is the output to be generated in QR Format:</p>
			<p>{QrData}</p>
		</Container>
	)
}

export function Uri() {

}