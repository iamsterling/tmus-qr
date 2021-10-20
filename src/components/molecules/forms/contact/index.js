import React from 'react'
import { Box, Flex } from '@chakra-ui/react'


import { Form, Input } from '../../../atoms/form'
import { Context } from '../../../../utils/context/data'


import { FaPhoneAlt, FaMapMarker } from 'react-icons/fa'
import { MdEmail, MdContacts} from 'react-icons/md'
import { GiOrganigram } from 'react-icons/gi'


export const Contact = () => {
    let DATA = React.useContext(Context)


    let [vCard, setVCard] = React.useState()
    let [firstName, setFirstName] = React.useState('firstName')
    let [lastName, setLastName] = React.useState('lastName')
    let [position, setPosition] = React.useState()
    let [phone, setPhone] = React.useState()
    let [email, setEmail] = React.useState()
    
    let [street, setStreet] = React.useState()
    let [city, setCity] = React.useState()
    let [state, setState] = React.useState()
    let [zip, setZip] = React.useState()

    let string = [
        { 
            name: 'first name', 
            data: firstName, setData: setFirstName,
            icon: <MdContacts/>,
            type: 'joined'
        },
        {   
            name: 'last name', 
            data: lastName, setData: setLastName,
            icon: <MdContacts/>,
        },
        {
            name: 'position',
            data: position, setData: setPosition,
            icon: <GiOrganigram/>,
        },
        {
            name: 'phone',
            data: phone, setData: setPhone,
            icon: <FaPhoneAlt/>,
        },
        {
            name: 'email',
            data: email, setData: setEmail,
            icon: <MdEmail/>,
        }

    ]



    

    React.useEffect(() => {
        setVCard(
            `BEGIN:VCARD\nVERSION:4.0\nN:${lastName};${firstName};;;\nFN:${firstName} ${lastName}\nORG:${DATA.org === 'Metro' ? 'Metro by T-Mobile' : DATA.org}\nTITLE:${position}\nEMAIL;type=INTERNET;type=pref:${email}\nTEL:+1 ${phone}\nEND:VCARD`
        )

        DATA.setData(vCard)
    }, [() => string.map(item => { return item.data})])


    return(

        <Box>

            <Box >
                <Flex as="form" flexWrap="wrap" justifyContent="space-between"
                    mb={8}>
                    {string.map(item => {
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