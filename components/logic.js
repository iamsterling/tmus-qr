import React from 'react';
import Image from 'next/image'
import QRCode from './generate';

import {
	Formik,
	Form,
	Field,
} from "formik";

import * as Yup from 'yup';

//import { Form } from "formik";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


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
			location: (props.address),

			qrData: `BEGIN:VCARD\r\nVERSION:4.0\r\nN:${props.lname};${props.fname};;;\r\nFN:${props.fname} ${props.lname}\r\nTITLE:${props.title};\r\nORG:${props.company};\r\nEMAIL;type=INTERNET;type=pref:${props.email}\r\nTEL;type=WORK;type=VOICE;type=pref:${props.phone}\r\nADR;type=WORK;type=pref:;;;${props.location};;;\r\nEND:VCARD`,
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
		this.setState({ qrData: `BEGIN:VCARD\r\nVERSION:4.0\r\nN:${this.state.lname};${this.state.fname};;;\r\nFN:${this.state.fname} ${this.state.lname}\r\nTITLE:${this.state.title};\r\nORG:${this.state.company};\r\nEMAIL;type=INTERNET;type=pref:${this.state.email}\r\nTEL;type=WORK;type=VOICE;type=pref:${this.state.phone}\r\nADR;type=WORK;type=pref:;;;${this.state.location};;;\r\nEND:VCARD`});
	}


	render(){
	  return(
			<>
		    <form onSubmit={this.state.onsubmit} ref={this.qrinput}>
		    	<legend>Name & Title</legend>

		      <input
						type="text"
						name="fname"
						placeholder="First Name"
						value={this.state.fname}
						onChange={this.handleChange}/>

					<input
						type="text"
						name="lname"
						placeholder="Last Name"
						value={this.state.lname}
						onChange={this.handleChange}/>

					<input
						type="text"
						name="title"
						placeholder="Title"
						value={this.state.title}
						onChange={this.handleChange}/>

					<input
						type="email"
						name="email"
						placeholder="Email Address"
						value={this.state.email}
						onChange={this.handleChange}/>

					<input
						type="tel"
						name="phone"
						placeholder="Phone Number"
						value={this.state.phone}
						onChange={this.handleChange}/>

		      <Button onClick={this.generate.bind(this, '#ff0000')}>
						Get QR
					</Button>
		    </form>

				<p>Result:</p>
        <div ref={this.qrcodeDOM}></div>
			</>
  	)
	}
};

export default Logic;
