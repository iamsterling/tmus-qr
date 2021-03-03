import React from 'react';
import Image from 'next/image'
import QRCode from './qr/generate';

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
				url: "https://www.t-mobile.com/brand/why-t-mobile"
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
      		text:(this.state.url),
      		width: 300,
      		height: 300,
      		colorDark : "#E20074",
      		colorLight : "#ffffff",
      		correctLevel : QRCode.CorrectLevel.M, // H, M, Q, H

      		// ====== dotScale
      		dotScale: 0.7, // For body block, must be greater than 0, less than or equal to 1. default is 1

      		dotScaleTiming: 0.7, // Dafault for timing block , must be greater than 0, less than or equal to 1. default is 1
      		/*dotScaleTiming_H: undefined, // For horizontal timing block, must be greater than 0, less than or equal to 1. default is 1
      		dotScaleTiming_V: undefined, // For vertical timing block, must be greater than 0, less than or equal to 1. default is 1
      		*/

          	dotScaleAO: 1, // For alignment outer block, must be greater than 0, less than or equal to 1. default is 1
      		dotScaleAI: 1, // For alignment inner block, must be greater than 0, less than or equal to 1. default is 1

				logo:"tmologo-sm.svg", // Relative address, relative to `easy.qrcode.min.js`
			    logoWidth:120, // width. default is automatic width
			    logoHeight:120, // height. default is automatic height
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

										<legend>Website Link:</legend>

										<Col>
											<Form.Control
												type="text"
												autoComplete="off"
												name="url"
												placeholder="URL"
												value={this.state.fname}
												onChange={this.handleChange}/>
										</Col>
									</Row>


									<Row>
										<Col xs={12}>
								      <Button variant="outline-primary" onClick={this.generate.bind(this, '#ff0000')}>
												Get QR
											</Button>
										</Col>
									</Row>
								</Container>

				    	</Form>
						</Col>

						<Col xs={12} md={7} xl={4} className="ms-4 mb-4">
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
