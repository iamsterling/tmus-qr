{/* Local Imports */}
import {QRCode} from '../components/qr/qr'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Url() {

// figuring out how to seperate QR Input logic from QR Output logic.
// React context seems to be a good solution
// though it's intended for broadcasting things like themes,
//logged in user, preferences, etc.


// another solution may be using props since the project is so small.

  return (
    <>
      <p>This page is a complete rewrite of the application. It is currently non-functional.</p>
      <QRCode.Input.VCard />
    </>
  )
}
