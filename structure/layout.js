import Head from 'next/head';
import QRNav from './nav.js';
import Footer from './footer.js';

export default function QrLayout({children}) {
  var appTitle = `TMUS QR`

  return (
    <>
      {/* BEGIN QR_LAYOUT
      // ---------------- */}
      <Head>
        <title>{appTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="public/generate.js"></script>
      </Head>

      <QRNav />

      <main>{children}</main>


    </>
  )
}
