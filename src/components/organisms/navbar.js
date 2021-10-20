import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

import { Logo } from '../atoms/logo'
import { Links } from '../atoms/links.js'

export const Navbar = (props) => {
    return <Flex 
        flexDirection="row"
        alignItems='center'
        overflow="none"
        m={2}
        mr={4}
        >
        <Box mr={4} >
            <Logo/>{/* LOGO TOGGLES BETWEEN BRANDS */}
        </Box>

        <Links {...props}/>
    </Flex>
}