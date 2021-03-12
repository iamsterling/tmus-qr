// 1. import React
import React from 'react'
import Image from 'next/image'
// 2. import Third Party Libraries
import {
	Box,
	Skeleton,
	SkeletonCircle,
	SkeletonText
} from '@chakra-ui/react'
import QRCode from './generate'
// 3. import QR Logic
import { QuickResponse } from '../qr'



export function generate(props) {
	
 	var options = {
		// ====== Basic
    	text:(props.data),
    	width: 320,
    	height: 320,
    	colorDark : "#E20074",
    	colorLight : "#ffffff",
    	correctLevel : QRCode.CorrectLevel.Q, // H, M, Q, H

    	// ====== dotScale
    	dotScale: 0.8, // For body block, must be greater than 0, less than or equal to 1. default is 1
    	dotScaleTiming: 0.8, // Default for timing block , must be greater than 0, less than or equal to 1. default is 1

    	logo:"tmologo-sm.svg", // Relative address, relative to `easy.qrcode.min.js`
    	logoWidth:120, // width. default is automatic width
    	logoHeight:120, // height. default is automatic height
    	logoBackgroundColor:'#E20074', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
    	logoBackgroundTransparent:true, // Whether use transparent image, default is false
    };
	
	console.log("generated from output.js")

      // where should the QR Code be spit out to?

    	//this.qrcode=new QRCode(this.qrcodeDOM.current, options);
}






// -----------------
// 
export function QROutput(props) {

	return(
		<Box
			px="10">
			{/* display QuickResponse.Logo until QR is generated */}
			
			<p>{props.data}</p>
			
			<QuickResponse.Logo
				color="#CCCCCC"/>
			
		</Box>
		
	)
}





/*
export class OldOutput extends React.Component {
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
*/
