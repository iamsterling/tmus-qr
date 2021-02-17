import Head from 'next/head';
import QRNav from '../fragments/global/nav.js';
import Footer from '../fragments/global/footer.js';



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

      <QRNav />

      <main>{children}</main>

      <Footer />

    </>
  )
}
