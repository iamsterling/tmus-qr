import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import TMUSLOGO from './tmo-logo';

export default function Layout({appTitle}) {

  return (
    <>
      <header>
        <Container>
          <Row>
            <Col>
              <TMUSLOGO />
              <p>QR Generator</p>
            </Col>

          </Row>
        </Container>

      </header>
    </>
  )
}
