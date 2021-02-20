import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { QRLogic } from '../components/qr/qr.js';

export default function Home() {

  return (
    <Container>
      <Row>
        <QRLogic />
      </Row>
    </Container>
  )
}
