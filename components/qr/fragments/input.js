// 1. import React
// 2. import Chakra
import React, { Component, setState } from 'react'
import { 
	Box,
	Button, 
	ButtonGroup,
	BeatLoader,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Flex,
	Grid, GridItem,
	Input,
	Stack,
	Spacer,
} from '@chakra-ui/react'

// 3. import all QR logic
import { QuickResponse } from '../qr' 


export function QRInput(props){
	return(
		<input/>
  	)
}


export const Format = () => {}

export function QRContactFormat(props) {`
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



// work on this once the Contact Card logic is done
export function QRUrl() {
	return(
		null
	)
}