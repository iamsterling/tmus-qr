import Link from 'next/link'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import TmoLogo from './tmo-logo'

export default function QRNav() {

  return (
    <Navbar sticky="top">
      <Container className="mt-2">
        <Row>
          <Col xs={3} className="ms-2 mt-2">
            <Navbar.Brand>

              <TmoLogo/>

            </Navbar.Brand>
          </Col>

          <Col xs={8} className="mt-1">
            <Nav fill variant="pills" defaultActiveKey="vcard">
              <Nav.Item className="">
                <Nav.Link eventKey="vcard">
                  <Link href="/"><a>vCard</a></Link>
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
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}
