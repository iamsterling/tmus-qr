import React from 'react'
import { Box, Flex, } from '@chakra-ui/react'
import { Context } from '../../../utils/context/data'

import { Input } from '../../atoms/form'

export const Wifi = () => {
    let DATA = React.useContext(Context)

    let [access, setAccess] = React.useState()
    let [network, setNetwork] = React.useState()
    let [password, setPassword] = React.useState()

    let data = [
        {
            name: 'network',
            data: network, setData: setNetwork,
        },
        {
            name: 'password',
            data: password, setData: setPassword,
        }
    ]


    React.useEffect(() => {
        DATA.setData('reset data')
    }, [DATA.activeTab])




    React.useEffect(() => {
        setAccess(`WIFI:T:WPA;S:${network};P:${password};;`)

        DATA.setData(access)
    }, [() => data.map(item => { return item.data})])

    

    return <Box>
        {data.map(item => {
            let {name, data, setData} = item

            const handleChange = (e) => { setData(e)}
            return(
                <Input
                    onChange={e => handleChange(e.target.value)}
                    placeholder={name}
                />
            )
        })}
        
    </Box>
}