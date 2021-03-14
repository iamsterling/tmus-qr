// 1. import React
import React, { Component, setState } from 'react'
// 2. import Third Party Libraries
///// Chakra UI
import {
	chakra,
	Flex,
	Input,
} from '@chakra-ui/react'

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
		<Input
			h={["4em", "4em", "4.5em", "4.5em"]}
			variant="flushed"
			autoComplete="off"
			colorScheme="magenta"
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