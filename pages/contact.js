// Libraries
import React from 'react'
import {
  Box,
  Button,
  Container,
  Flex,
  Text } from '@chakra-ui/react'

// Local Imports
import { QuickResponse } from '../components/qr/qr'



export default function ContactInput(){

  return (
    <QuickResponse
      contact>

          <Flex>
            <QuickResponse.Input.Field
              w="50%"
              placeholder="First Name"/>
              

            <QuickResponse.Input.Field
              w="50%"
              placeholder="Last Name"/>
          </Flex>

          <Flex>
            <QuickResponse.Input.Field
              w="50%"
              placeholder="Job Title"/>
          </Flex>

          <Flex>
            <QuickResponse.Input.Field
              w="50%"
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

    </QuickResponse>
  )
}