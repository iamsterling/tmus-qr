import Head from 'next/head';
import Header from '../fragments/global/header.js';




export default function QrLayout({children}) {
  var appTitle = `TMUS QR`

  return (
    <>
      {/* BEGIN QR_LAYOUT
      // ---------------- */}
      <Head>
        <title>{appTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>{children}</main>


    </>
  )
}
