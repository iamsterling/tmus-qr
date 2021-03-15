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

import TmobileLogo, { MetroLogo, QRLogo } from '../logo'


// ------------------
export default function Nav() {



  return (
    <>
      <Flex
        mx={[4,4,0,0]}
        my={[3,3,0,0]}
        borderRadius={[15,15,0,0]}
        top="0"
        pos="sticky"
        bg="black"
        zIndex="2">

        <Nav.Logo
          px={6}
          py={6}

          color="white"
          dotColor="#E20074"
          href="/"/>

        <Spacer/>

        <Nav.Links
          px="4"
          py="6"
          color="white"/>
      </Flex>
    </>
  )
}



function Item(props) {
  return(
    <Flex>
      <Link href={props.href}>
        <a>
          <Text
            fontSize="20px"
            fontWeight="semibold"
            color="white">
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



Nav.Logo                = TmobileLogo
Nav.Item                = Item
Nav.Links               = Links
//Nav.Tabs
//Nav.Tab
