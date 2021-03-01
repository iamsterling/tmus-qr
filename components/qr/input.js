import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import QRCode from './generate'


//import { Form } from "formik";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


// QRInput
export class QRInput extends React.Component {
	constructor(props){
		super(props);
		// input
		this.qrinput = React.createRef();
	}

	render(){
	  return(
			null
  	)
	}
};
// -------------------------
// QRCode.Input.VCard
export class InputVCard extends React.Component {
	constructor(){
		super()

		this.state = {
			qrData: "",
		}
	}

	render(){
		return(
			<p>does this work?</p>
		)
	}
}
// -------------------------
// QRInput.Url
export class InputUrl extends React.Component {
	constructor(){
		super()

		this.state = {
			qrData: "",
		}
	}

	render(){
		return(
			<Form onSubmit={this.state.onsubmit} ref={this.qrinput}>
				<legend>Contact info:</legend>
				<Form.Control
					type="text"
					autoComplete="off"
					name="fname"
					placeholder="First Name"
					value={this.state.fname}
					onChange={this.handleChange} />

				<Button variant="outline-primary">Get QR</Button>

			</Form>
		)
	}
}
// -------------------------
// QRInput.Wifi
export class InputWifi extends React.Component {
	constructor(){
		super()

		this.state = {
			qrData: "",
		}
	}

	render(){
		return(
			<Form onSubmit={this.state.onsubmit} ref={this.qrinput}>
				<legend>Contact info:</legend>
				<Form.Control
					type="text"
					autoComplete="off"
					name="fname"
					placeholder="First Name"
					value={this.state.fname}
					onChange={this.handleChange} />

				<Button variant="outline-primary">Get QR</Button>

			</Form>
		)
	}
}
// -------------------------
