import React from 'react'
import { Box, Flex, } from '@chakra-ui/react'
import { Context } from '../../../utils/context/data'

import { Input } from '../../atoms/form'
import { BiLink } from 'react-icons/bi'

export const Uri = () => {
    let DATA = React.useContext(Context)

    let [uri, setUri] = React.useState()

    React.useEffect(() => {
        DATA.setData('reset data')
    }, [DATA.activeTab])




    React.useEffect(() => {
        DATA.setData(setUri)
    }, [uri])

    
    const change = (event) => { 
        event.preventDefault
        setUri(event)
    }


    return (
        <Box>

            <Box >
                <Flex as="form" flexWrap="wrap" justifyContent="space-between"
                    mb={8}>

                    <Input
                        icon={<BiLink/>}
                        onChange={ event => change(event.target.value) }
                        placeholder={'URL or Deep Link'}
                    />
                </Flex>
            </Box>
        </Box>
    )
}