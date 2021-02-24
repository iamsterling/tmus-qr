import React from 'react';
import Image from 'next/image'
import QRCode from './generate';

//import { Form } from "formik";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
			location: `${props.addressStreet}, ${props.addressCity}, ${props.addressState}, ${props.addressZip}`,

			qrData: `BEGIN:VCARD\r\nVERSION:4.0\r\nN:Holt;Sterling;;;\r\nFN:Sterling Holt\r\nTITLE:Mobile Expert;\r\nORG:T-Mobile;\r\nEMAIL;type=INTERNET;type=pref:james.holt28@t-mobile.com\r\nTEL;type=WORK;type=VOICE;type=pref:972-469-0082\r\nADR;type=WORK;type=pref:;;;880 S. Preston Rd. #40, Prosper, TX 75078;;;\r\nEND:VCARD`,
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
      		width: 250,
      		height: 250,
      		colorDark : "#e20074",
      		colorLight : "#ffffff",
      		correctLevel : QRCode.CorrectLevel.L, // H, M, Q, H

      		// ====== dotScale
      		dotScale: 0.4, // For body block, must be greater than 0, less than or equal to 1. default is 1

      		dotScaleTiming: 0.7, // Dafault for timing block , must be greater than 0, less than or equal to 1. default is 1
      		/*dotScaleTiming_H: undefined, // For horizontal timing block, must be greater than 0, less than or equal to 1. default is 1
      		dotScaleTiming_V: undefined, // For vertical timing block, must be greater than 0, less than or equal to 1. default is 1
      		*/

          dotScaleAO: 0.8, // For alignment outer block, must be greater than 0, less than or equal to 1. default is 1
      		dotScaleAI: 0.4, // For alignment inner block, must be greater than 0, less than or equal to 1. default is 1

      		// ====== Backgroud Image

      		backgroundImage: 'tmologo.svg', // Background Image
      		backgroundImageAlpha: 1, // Background image transparency, value between 0 and 1. default is 1.
      		autoColor: true, // Automatic color adjustment(for data block)
              autoColorDark: "rgba(0, 0, 0, 0.9)", // Automatic color: dark CSS color
              autoColorLight: "rgba(255, 255, 255, 0.7)", // Automatic color: light CSS color
      };

      this.qrcode=new QRCode(this.qrcodeDOM.current, options);
  }



	componentDidMount(qrcodeDOM) {
		this.generate
	}




	handleChange(event){
		const {name, value} = event.target
    this.setState({ [name]: value })
		this.setState({ location: `${this.state.addressStreet}, ${this.state.addressCity}, ${this.state.addressState}, ${this.state.addressZip}`})
		this.setState({ qrData: `BEGIN:VCARD\r\nVERSION:4.0\r\nN:${this.state.lname};${this.state.fname};;;\r\nFN:${this.state.fname} ${this.state.lname}\r\nTITLE:${this.state.title}\r\nORG:${this.state.company}\r\nEMAIL;type=INTERNET;type=pref:${this.state.email}\r\nTEL;type=WORK;type=VOICE;type=pref:${this.state.phone}\r\nADR;type=WORK;type=pref:;;;${this.state.location};;;\r\nEND:VCARD`})
	}


	render(){
	  return(
			<>
				<Container>
					<Row>
						<Col xs={12} sm={10} md={8} lg={6} xl={4}>
							<Form onSubmit={this.state.onsubmit} ref={this.qrinput}>
								<Container>
									<Row className="g-1 mb-2">

										<legend>Name & Title</legend>

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
										<Col>
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

										<Col>
											<Form.Control
												type="tel"
												name="phone"
												placeholder="Phone Number"
												value={this.state.phone}
												onChange={this.handleChange}/>
										</Col>
									</Row>

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


									<Row className="mb-4">
										<Col xs={3} sm={4} md={5}>
								      <Button onClick={this.generate.bind(this, '#ff0000')}>
												Get QR
											</Button>
										</Col>
									</Row>
								</Container>

				    	</Form>
						</Col>
					</Row>

					<Row>
						<Col xs={{offset:3}} sm={{offset:2}} lg={{offset:1}}>
			        <div ref={this.qrcodeDOM} />
						</Col>
					</Row>
				</Container>
			</>
  	)
	}
};

export default Logic;
