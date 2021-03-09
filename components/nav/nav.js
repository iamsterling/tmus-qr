import React from 'react'
import Link from 'next/link'

import {
  Box,
  Button,
  Center,
  Flex,
  Skeleton,
  Spacer,
  Text } from "@chakra-ui/react"

import { FiGithub } from "react-icons/fi";

import Logo, { Github } from '../logo'


// ------------------
export default function Nav() {

  return (
    <Nav.Container>
      <Nav.Logo
        href="/"
        py="6"
        px="6"
        width="60"
        height="60"
        color="white"
        dotColor="#E20074"/>

      <Spacer/>

      <Nav.Links
        py="6"
        px="5"/>
    </Nav.Container>
  )
}

function Container({ children}) {
  return(
    <Box
      p={3}>
        
      <Flex
        boxShadow="2xl"
        borderRadius={10}
        w="100%"
        h="80px"
        bg="#0F0F0F"
        color="white">

        {children}
      </Flex>
    </Box>
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

Nav.Container           = Container
Nav.Logo                = Logo
Nav.Item                = Item
Nav.Links               = Links
//Nav.Tabs
//Nav.Tab
