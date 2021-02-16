import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import GenerateQR from '../functions/generate-qr';


export default function UrlInput({}) {
  return (
    <Container>
      <Row>
        <InputGroup>

          <Col>



            <Form.Control></Form.Control>
          </Col>

        </InputGroup>
      </Row>

      <Row>
        <GenerateQR>Test</GenerateQR>
      </Row>
    </Container>
  )
}
