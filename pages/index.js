//
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QRTabs from '../fragments/qr/tabs';



import Link from 'next/link';
export default function Home({children}) {

  return (
    <Container>
      <Row>
        <Col sm={12} lg={6}>
          <QRTabs />
        </Col>
        <Col sm={12} lg={6}>
          <p>Result</p>
        </Col>
      </Row>
    </Container>
  )
}
