import Head from 'next/head';
import Header from '../components/header.js';
import QRInput from '../components/qr-input.js';
import QROutput from '../components/qr-output.js';




export default function QrLayout({children}) {
  var {appTitle} = `Test`

  return (
    <>
      {/* BEGIN QR_LAYOUT
      // ---------------- */}
      <Head>
        <title appTitle={appTitle}></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <nav>Test</nav>
      <main>{children}</main>


    </>
  )
}
