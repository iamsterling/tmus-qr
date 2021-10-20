import React from 'react'
import { Box, Flex, ChakraProvider } from '@chakra-ui/react'

import { Context } from '../utils/context/data'
import { Contact, Wifi, Uri } from '../components/molecules/forms'
import { QR } from '../components/molecules/qr'
import { Navbar } from '../components/organisms/navbar'

export default function App() {
  let DATA = React.useContext(Context)
  return <ChakraProvider>
    <Navbar/>
    <Flex justifyContent="center">
      <Flex
        //bg='green'
        flexDirection={['column', 'column', 'row']}
        justifyContent='center' //alignItems='center'
        mx={4}
        w={['100%','100%','95%', '95%', '70%']}
        maxW={'1600px'}
        >
        <Content/>

          <Flex justifyContent='center' alignItems='center'>
            <QR/>
          </Flex>
      </Flex>
    </Flex>
  </ChakraProvider>
}



  const Content = () => {
    let DATA = React.useContext(Context)
    if (DATA.activeTab === "contact") {
      return <Contact/>

    } if (DATA.activeTab === 'wifi') {
      return <Wifi/>
    } 
    return <Uri/>
  }