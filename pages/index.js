import Link from 'next/link'

{/* Local Imports */}
import {
  VCardInput,
  WifiInput,
  UrlInput
} from '../components/qr/form'
import QROutput from '../components/qr/newqr'



export default function Home() {

  return (
    <>
      <section>
        <VCardInput
          fname="Sterling"
          lname="Holt"
          title="Mobile Expert"
          company="T-Mobile"
          phone="972-469-0082"
          email="james.holt28@t-mobile.com"
          address="880 S. Preston Rd #40, Prosper, TX 75078"
          social="https://twitter.com/jsterlingholt" />
      </section>

      {/*
      <section>
        <WifiInput
          encryption="WPA2"
          ssid="DATA_TRANSFER_NETWORK"
          passphrase="2020#Data123!"/>
      </section>*/}

      <QROutput />
    </>
  )
}
