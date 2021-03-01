import Link from 'next/link'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import TmoLogo from '../tmo-logo'

export default function QRNav() {

  return (
    <Navbar fill sticky="top">
      <Container className="mt-2">
        <Row>
          <Col xs={2}>
            <Navbar.Brand>
              <TmoLogo/>
            </Navbar.Brand>
          </Col>

          <Col xs={8}>
            <Nav>
              <Nav.Item>
                <Nav.Link eventKey="vcard">
                  <Link href="/"><a>VCard</a></Link>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="link-1">
                  <Link href="/url"><a>URL</a></Link>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Wifi
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="ms-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20">
                  <Navbar.Brand href="https://github.com/jsterlingholt/tmus-qr" eventKey="github">

                    <path fill="#E20074" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </Navbar.Brand>
                </svg>
              </Nav.Item>

            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}
