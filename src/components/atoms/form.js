import * as React from 'react'
import { Box, Flex } from '@chakra-ui/react'

import { Context } from '../../utils/context/data'


export const Form = (props) => {
    return <form>{props.children}</form>
}


export function Input (props) {

    let DATA = React.useContext(Context)
    

    
    return (
        <Flex
            
            mb={2}
            

            flexDirection='row'
            justifyContent='flex-start'
            w={'50%'}
            
            >
                <Flex bg={DATA.primary} w={12} outline={`1px solid ${DATA.primary}`}
                    justifyContent='center' alignItems='center'
                    color="white" fontSize="24">
                    {props.icon}
                </Flex>

                <Box as="input"
                    bg="rgba(0,0,0,0.05)"
                    w={'75%'}
                    p={4}
                    h="100%"
                    _focus={{ 
                        outline: `1px solid ${DATA.primary}`,
                        boxShadow: 'xl'
                    }}
                    {...props}/>
        </Flex>
    )
}