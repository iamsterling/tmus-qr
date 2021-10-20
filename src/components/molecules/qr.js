import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Context } from '../../utils/context/data'

import QRCode from 'qrcode'


export const QR = (props) => {
    let DATA = React.useContext(Context)

    const [src, setSrc] = React.useState()
    const [download, setDownload] = React.useState()

    React.useEffect(() => {
        let options = {
            margin: 0,
            color: { dark: DATA.primary, light: '#fff' },
            errorCorrectionLevel: 'H',
        }
        new QRCode.toDataURL(DATA.data !== undefined ? DATA.data : 'nothing', options)
            .then(setSrc)

        let Download = () => {
            new QRCode.toFile('qr.png', 'testing', options)

            return (
                <Box as="button">
                    
                </Box>
                //.then(setDownload)
            )
        }
    }, [DATA.data, DATA.org])


    

    return <Flex
        bg='white'
        boxShadow="lg"
        border={`1px solid rgba(0,0,0,0.15)`}
        borderRadius={10}
        flexDirection='column'
        w={[80,80,80,'400px']}
        minH={[80,80,80,'400px']}
        p={6}
        mb={4}
        mx={[0,0,4]}>


        <Box as="img" src={src} maxH={[250,300,300,500]} />

        <Box as='button' 
            onClick={() => null}
            bg={DATA.primary}
            color='white'
            border={0}
            borderRadius={6}
            fontSize={16}
            fontWeight='bold'
            mt={4}
            px={4} py={2}
            
            _focus={{ 
                outline: `1px solid black`,
                boxShadow: '2xl',
                //backgroundColor: 'green',
                //borderBottom: `1px solid ${DATA.primary}` 
            }}
            >
            Download
        </Box>
    </Flex>
        
}