// 1. import React
import React, { Component, setState } from 'react'
// 2. import Third Party Libraries
///// Chakra UI
import {
	chakra,
	Flex,
	Input,
} from '@chakra-ui/react'
import {HiOutlineMoon} from 'react-icons/hi'

// 3. import all QR logic
import { QuickResponse } from '../qr' 
import { theme } from '../../style'


// ------------------
// Input
export function QRInput(props){
	return(
		<>
			<chakra.form
				w={["sm", "md", "lg", "xl"]}>
				{props.children}
			</chakra.form>
		</>
  	)
}




export function QRField(props){
	return(
		<chakra.input
			h={["4em", "4em", "4.5em", "4.5em"]}
			w={props.w}
			mx={1}

			outline="none"
			borderBottom="0.1em solid rgba(0,0,0,0.05)"

			_hover={{
				borderBottom: "0.1em solid #E20074"
			}}

			_active={{
				borderBottom: "0.1em solid #E20074",
			}}

			placeholder={props.placeholder}/>
	)
}




// ------------------
// Format
export function Format(props) {`
	BEGIN:VCARD\r\n
	VERSION:4.0\r\n
	FN:Sterling Holt\r\n
	TITLE;:Mobile Expert\r\n
	ORG:T-Mobile\r\n
	EMAIL:james.holt28@t-mobile.com\r\n
	TEL:972-469-0082\r\n
	ADR;type=WORK;type=pref:;;;880 S. Preston Rd. #40\n
	Prosper\n
	TX\n
	75078;;;\r\n
	END:VCARD`
}