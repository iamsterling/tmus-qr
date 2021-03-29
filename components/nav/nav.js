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
  Stack,
  Text } from "@chakra-ui/react"

import { FaGithubAlt } from "react-icons/fa";
import { HiOutlineMoon } from 'react-icons/hi'
import TmobileLogo, { MetroLogo, QRLogo } from '../logo'


// ------------------
export default function Nav() {



  return (
    <>
      <Flex
        px={[0,0,0,0]}
        py={[0,0,0,0]}
        top="0"
        pos="sticky"
        zIndex="3">

        <Stack
          direction="row"
          borderRadius={[0,0,0]}
          w="100%"
          bg="black">

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
        </Stack>
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
    </Flex>
  )
}



Nav.Logo                = TmobileLogo
Nav.Item                = Item
Nav.Links               = Links
//Nav.Tabs
//Nav.Tab
