import React from 'react'
import { Box, Flex, } from '@chakra-ui/react'
import { Context } from '../../../utils/context/data'

import { Input } from '../../atoms/form'

import { MdSignalWifi3Bar, MdPassword } from 'react-icons/md'

export const Wifi = () => {
    let DATA = React.useContext(Context)

    let [access, setAccess] = React.useState()
    let [network, setNetwork] = React.useState()
    let [password, setPassword] = React.useState()

    let data = [
        {
            name: 'network',
            data: network, setData: setNetwork,
            icon: <MdSignalWifi3Bar/>,
        },
        {
            name: 'password',
            data: password, setData: setPassword,
            icon: <MdPassword/>,
        }
    ]


    React.useEffect(() => {
        DATA.setData('reset data')
    }, [DATA.activeTab])




    React.useEffect(() => {
        setAccess(`WIFI:T:WPA;S:${network};P:${password};;`)

        DATA.setData(access)
    }, [() => data.map(item => { return item.data})])

    

    return (
        <Box>

            <Box >
                <Flex as="form" flexWrap="wrap" justifyContent="space-between"
                    mb={8}>
                    {data.map(item => {
                        let { name, icon, data, setData, type } = item

                        

                        const change = (event) => { 
                            event.preventDefault
                            setData(event)
                        }

                        return(
                            <Input
                                key={name}
                                icon={icon}
                                onChange={ event => change(event.target.value) }
                                onSubmit={ event => change(event.target.value) }
                                placeholder={name}
                            />

                        )
                    })}
                </Flex>
            </Box>
        </Box>
    )
}