import React from 'react'
import Image from 'next/image'
import QRCode from './generate'
import { QuickResponse } from './qr'


// TO DO: Implement save function

import {
	// Layout
	Container, Row, Col,

	// Function
	Button,Form,
 } from 'react-bootstrap'


 // Each Input Variant interacts with this upon form submission
 export function submitQRData(props) {
	alert({props});
 }



export class QROutput extends React.Component {
	constructor(props){
		super(props);
		// QRCode DOM
    	this.qrcodeDOM = React.createRef();
    	this.qrcode=null;

		this.state = {
			QRData: "poop"
		}
	}

	//QRCode generator
	generate(color){
      	if(this.qrcode){
        	this.qrcode.clear();
    	};
	
    	var options = {
      		// ====== Basic
      		text:(this.state.QRData),
      		width: 320,
      		height: 320,
      		colorDark : "#E20074",
      		colorLight : "#ffffff",
      		correctLevel : QRCode.CorrectLevel.Q, // H, M, Q, H

      		// ====== dotScale
      		dotScale: 0.8, // For body block, must be greater than 0, less than or equal to 1. default is 1

      		dotScaleTiming: 0.8, // Default for timing block , must be greater than 0, less than or equal to 1. default is 1
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
    	};

    	this.qrcode=new QRCode(this.qrcodeDOM.current, options);
	}

  	// generate QR code on mount
	componentDidMount = (qrcodeDOM) => {
		this.generate()
	}





	render(){
		return(
			<Container>
				<Row>
					<Col>
						<legend>Result</legend>
						<div id="qrResult" ref={this.qrcodeDOM} />
					</Col>
				</Row>
			</Container>
		)
	}
};
