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
    <Center>
    <Container
      w={["100%", "100%", "100%"]}
      maxW="xlg"
      p={[3, 3, 0, 0]}>
      
      <Flex
        borderRadius={[10, 10, 0]}
        boxShadow={["xl", "Xl", "md", "md"]}
        bg="black"
        color="white">

        <Nav.Logo
          href="/"
          px={["6","6","10","10"]}
          py="6"
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
    </Center>
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
