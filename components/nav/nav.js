import React from 'react'
import Link from 'next/link'

import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Skeleton,
  Spacer,
  Text } from "@chakra-ui/react"

import { FiGithub } from "react-icons/fi";

import Logo, { QRLogo } from '../logo'


// ------------------
export default function Nav() {



  return (
    <Container
      w={["100%", "100%", "90%"]}
      maxW="xlg"
      px={4}
      py={2}
      pos="sticky">
      
      <Flex
        borderRadius={10}
        bg="black"
        color="white">

        <Nav.Logo
          href="/"
          py="6"
          px="6"
          w="28"
          h="34"
          color="white"
          dotColor="#E20074"/>

        <Spacer/>

        <Nav.Links
          py="6"
          px="5"/>
      </Flex>
    </Container>
  )
}

function Item(props) {
  return(
    <Flex>
      <Link href={props.href}>
        <a>
          <Text
            fontSize="20px"
            fontWeight="semibold">

            {props.children}
          </Text>
        </a>
      </Link>
    </Flex>
  )
}





function Links(props) {
  return(
    <Flex
      py={props.py}
      px={props.px}>
      <Box
        px={3}>
        <Nav.Item
          href="/contact">
          Contact
        </Nav.Item>
      </Box>

      <Box
        px={3}>
        <Nav.Item
          href="/url">
          Url
        </Nav.Item>
      </Box>

      <Box
        py={1.5}
        px={3}>
        <a href="https://github.com/jsterlingholt/tmus-qr">
          <FiGithub
            color="white"/>
        </a>
      </Box>
    </Flex>
  )
}



Nav.Logo                = Logo
Nav.Item                = Item
Nav.Links               = Links
//Nav.Tabs
//Nav.Tab
