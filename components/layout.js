// libraries
import Head from 'next/head'
import { Center, Container } from '@chakra-ui/react'



// local files
import Nav from './nav/nav'


export default function Layout({children}) {
  let appTitle = `TMUS QR`

  return (
    <>
      {/* BEGIN QR_LAYOUT
      // ---------------- */}
      <Head>
        <title>{appTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      
      <Center
        w="auto"
        maxW="100%"
        maxH="100%">
        {children}
      </Center>
    </>
  )
}
