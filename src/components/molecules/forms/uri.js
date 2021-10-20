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
        if (DATA.data === undefined) {
            DATA.setData('filler')
        }

        console.log(DATA.data)
    }, [DATA.data])

    return (
        <Flex as="form" flexWrap="wrap" justifyContent="space-between"
            mb={8}>
            <Input
                single
                icon={<BiLink/>}
                onChange={ event => DATA.setData(event.target.value)}
                placeholder={'URL or Deep Link'}
                w={'100%'}
            />
        </Flex>
    )
}