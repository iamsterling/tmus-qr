import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// LOCAL
import QRForm from './qr-form';


export default function VCardInput() {
  return (
    <Container className="mt-4">
      <Row className="mb-2 g-1">

          <Col>
            <Form.Control></Form.Control>
          </Col>

          <Col>
            <Form.Control></Form.Control>
          </Col>

      </Row>

      <Row className="mb-2 g-1">
        <Col>
          <Form.Control as="select">
            <option value="test">test</option>
            <option value="test">test</option>
            <option value="test">test</option>
            <option value="test">test</option>
          </Form.Control>
        </Col>

        <Col>
          <Form.Control as="select">
            <option value="test">T-Mobile</option>
            <option value="test">Metro By T-Mobile</option>
          </Form.Control>
        </Col>

      </Row>
    </Container>
  )
}
