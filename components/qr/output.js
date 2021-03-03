import React from 'react';
import Image from 'next/image'
import QRCode from './generate';

import {
	// Layout
	Container, Row, Col,

	// Function
	Button,Form,
 } from 'react-bootstrap'

export class QROutput extends React.Component {
	constructor(props){
		super(props);
		// QRCode DOM
    	this.qrcodeDOM = React.createRef();
    	this.qrcode=null;

		this.state = {
			qrData: "https://www.t-mobile.com/brand/why-t-mobile"
		}
	}

	//QRCode generator
	generate(color){
      	if(this.qrcode){
        	this.qrcode.clear();
    	};
	
    	var options = {
      		// ====== Basic
      		text:(this.state.qrData),
      		width: 1000,
      		height: 1000,
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
			logoWidth:400, // width. default is automatic width
			logoHeight:400, // height. default is automatic height
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
			<>
				<legend>Result</legend>
				<div id="qrResult" ref={this.qrcodeDOM} />
			</>
		)
	}
};
