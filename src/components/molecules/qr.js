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
            scale: 20,
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

    </Flex>
        
}