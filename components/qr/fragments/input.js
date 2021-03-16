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
  return(null)
}

// FORM
export function QRForm(props){
	return(
		<>
			<chakra.form
        name="props.name"
        >
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
			borderRadius="0"
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





/////////////

export function QRInputContact(props) {
	
	return(
		<>
          <Flex>
            <QuickResponse.Input.Field
              w="50%"
              name={props.fname}
			  value={props.fname}
              placeholder="First Name"/>
              

            <QuickResponse.Input.Field
              w="50%"
              name="lname"
              placeholder="Last Name"/>
          </Flex>

          <Flex>
            <QuickResponse.Input.Field
              w="48%"
              name="title"
              placeholder="Job Title"/>
          </Flex>

          <Flex>
            <QuickResponse.Input.Field
              w="50%"
              name="phone"
              placeholder="Phone Number"/>

            <QuickResponse.Input.Field
              w="50%"
              placeholder="Email Address"/>
          </Flex>

          <Flex>
            <QuickResponse.Input.Field
              w="50%"
              placeholder="Street"/>
            
            <QuickResponse.Input.Field
              w="50%"
              placeholder="City"/>
          </Flex>

          <Flex>
            <QuickResponse.Input.Field
              w="50%"
              placeholder="State"/>
              
            <QuickResponse.Input.Field
              w="50%"
              placeholder="Zip"/>
          </Flex>
		</>
	)
}