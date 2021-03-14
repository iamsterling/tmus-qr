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
        <QuickResponse.Input>

          <Flex>
            <QuickResponse.Input.Field
              placeholder="First Name"/>
              

            <QuickResponse.Input.Field
              placeholder="Last Name"/>
          </Flex>

          <Flex>
            <QuickResponse.Input.Field
              placeholder="Job Title"/>
          </Flex>

          <Flex>
            <QuickResponse.Input.Field
              placeholder="Phone Number"/>

            <QuickResponse.Input.Field
              placeholder="Email Address"/>
          </Flex>

          <Flex>
            <QuickResponse.Input.Field
              placeholder="Street"/>
            
            <QuickResponse.Input.Field
              placeholder="City"/>
          </Flex>

          <Flex>
            <QuickResponse.Input.Field
              placeholder="State"/>
              
            <QuickResponse.Input.Field
              placeholder="Zip"/>
          </Flex>
        </QuickResponse.Input>

    </QuickResponse>
  )
}