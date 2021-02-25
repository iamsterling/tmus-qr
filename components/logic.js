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


class Logic extends React.Component {
	constructor(props){
		super(props);
		// QRCode DOM
    this.qrcodeDOM = React.createRef();
    this.qrcode=null;

		// input
		this.qrinput = React.createRef();

		this.state = {
			fname: (props.fname),
			lname: (props.lname),
			title: (props.title),
			company: "T-Mobile",
			email: (props.email),
			phone: (props.phone),
			addressStreet: (props.addressStreet),
			addressCity: (props.addressCity),
			addressState: (props.addressState),
			addressZip: (props.addressZip),
			addressStreet: (props.addressStreet),
			addressCity: (props.addressCity),
			addressState: (props.addressState),
			addressZip: (props.addressZip),

			qrData:`BEGIN:VCARD\nVERSION:4.0\nN:Holt;Sterling;;;\nFN:Sterling Holt\nTITLE:Mobile Expert\nORG:T-Mobile\nEMAIL;type=INTERNET;type=pref:james.holt28@t-mobile.com\nTEL:972-469-0082\nADR:;;880 S Preston Rd #40;Prosper\,;TX\,;75078\nEND:VCARD`,
		}


		this.handleChange = this.handleChange.bind(this)
	}



	//QRCode generator
  generate(color){
      if(this.qrcode){
          this.qrcode.clear();
      };

      var options = {
      		// ====== Basic
      		text:(this.state.qrData),
      		width: 500,
      		height: 500,
      		colorDark : "#E20074",
      		colorLight : "#ffffff",
      		correctLevel : QRCode.CorrectLevel.Q, // H, M, Q, H

      		// ====== dotScale
      		dotScale: 0.7, // For body block, must be greater than 0, less than or equal to 1. default is 1

      		dotScaleTiming: 1, // Dafault for timing block , must be greater than 0, less than or equal to 1. default is 1
      		/*dotScaleTiming_H: undefined, // For horizontal timing block, must be greater than 0, less than or equal to 1. default is 1
      		dotScaleTiming_V: undefined, // For vertical timing block, must be greater than 0, less than or equal to 1. default is 1
      		*/

          dotScaleAO: 1, // For alignment outer block, must be greater than 0, less than or equal to 1. default is 1
      		dotScaleAI: 1, // For alignment inner block, must be greater than 0, less than or equal to 1. default is 1

					logo:"tmologo-sm.svg", // Relative address, relative to `easy.qrcode.min.js`
			    logoWidth:200, // width. default is automatic width
			    logoHeight:200, // height. default is automatic height
			    logoBackgroundColor:'#E20074', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
			    logoBackgroundTransparent:true, // Whether use transparent image, default is false




					// ====== Backgroud Image

      		backgroundImage: 'tmologo.svg', // Background Image
      		backgroundImageAlpha: 0, // Background image transparency, value between 0 and 1. default is 1.
      		autoColor: true, // Automatic color adjustment(for data block)
              autoColorDark: "rgba(226, 0, 116, 1)", // Automatic color: dark CSS color
              autoColorLight: "rgba(255, 255, 255, 0.1)", // Automatic color: light CSS color
      };

      this.qrcode=new QRCode(this.qrcodeDOM.current, options);
  }



	componentDidMount(qrcodeDOM) {
		this.generate()
	}




	handleChange(event){
		const {name, value} = event.target
    this.setState({ [name]: value })
		this.setState({ qrData: `BEGIN:VCARD\nVERSION:4.0\nN:${this.state.lname};${this.state.fname};;;\nFN:${this.state.fname} ${this.state.lname}\nTITLE:${this.state.title}\nORG:T-Mobile\nEMAIL;type=INTERNET;type=pref:${this.state.email}\nTEL:${this.state.phone}\nADR:;;${this.state.addressStreet};${this.state.addressCity}\,;${this.state.addressState}\,;${this.state.addressZip}\nEND:VCARD`})
	}


	render(){
	  return(
			<>
				<Container>
					<Row>
						<Col xs={12} md={7} xl={4}>

							<Form onSubmit={this.state.onsubmit} ref={this.qrinput}>
								<Container>
									<Row className="g-1 mb-2">

										<legend>Contact info:</legend>

										<Col>
											<Form.Control
												type="text"
												autoComplete="off"
												name="fname"
												placeholder="First Name"
												value={this.state.fname}
												onChange={this.handleChange}/>
										</Col>

										<Col>
											<Form.Control
												type="text"
												name="lname"
												placeholder="Last Name"
												value={this.state.lname}
												onChange={this.handleChange}/>
										</Col>
									</Row>

									<Row className="g-1 mb-2">
										<Col xs={6}>
											<Form.Control
												type="text"
												name="title"
												placeholder="Title"
												value={this.state.title}
												onChange={this.handleChange}/>
										</Col>

										<Col>
											<Form.Control
												type="email"
												name="email"
												placeholder="Email Address"
												value={this.state.email}
												onChange={this.handleChange}/>
										</Col>
									</Row>

									<Row className="g-1 mb-2">
										<Col xs={6}>
											<Form.Control
												type="tel"
												name="phone"
												placeholder="Phone Number"
												value={this.state.phone}
												onChange={this.handleChange}/>
										</Col>
									</Row>

									<legend>Address:</legend>
									<Row className="g-1 mb-2">
										<Col xs={6}>
											<Form.Control
												type="text"
												name="addressStreet"
												placeholder="Street"
												value={this.state.addressStreet}
												onChange={this.handleChange}/>
										</Col>
									</Row>


									<Row className="g-1 mb-2">
										<Col>
											<Form.Control
												type="text"
												name="addressCity"
												placeholder="City"
												value={this.state.addressCity}
												onChange={this.handleChange}/>
										</Col>

										<Col>
											<Form.Control
												type="text"
												name="addressState"
												placeholder="State"
												value={this.state.addressState}
												onChange={this.handleChange}/>
										</Col>

										<Col>
											<Form.Control
												type="text"
												name="addressZip"
												placeholder="Zip"
												value={this.state.addressZip}
												onChange={this.handleChange}/>
										</Col>
									</Row>


									<Row>
										<Col xs={12}>
								      <Button onClick={this.generate.bind(this, '#ff0000')}>
												Get QR
											</Button>
										</Col>
									</Row>
								</Container>

				    	</Form>
						</Col>

						<Col xs={5} className="mb-4">
							<legend>Result</legend>
				    	<div id="qrResult" ref={this.qrcodeDOM} />
						</Col>
					</Row>
				</Container>

				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />

			</>
  	)
	}
};

export default Logic;
