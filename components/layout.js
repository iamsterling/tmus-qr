// libraries
import Head from 'next/head'
import { 
  Container,
  Row, Col, } from 'react-bootstrap'



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

      <Nav/>

      {children}

    </>
  )
}
