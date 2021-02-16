import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//
import InputGroup from 'react-bootstrap/InputGroup';

//
import Form from 'react-bootstrap/Form';

// LOCAL
import QRForm from './qr-form';

export default function WifiInput({}) {
  return (
    <Container>
      <QRForm>
        <Row>
          <InputGroup>
            <Col sm={2} md={2}>
              <Form.Control as="select">
                <option value="test">test</option>
                <option value="test">test</option>
                <option value="test">test</option>
                <option value="test">test</option>
              </Form.Control>
            </Col>

            <Col>
              <Form.Control></Form.Control>
            </Col>

            <Col>
              <Form.Control></Form.Control>
            </Col>

          </InputGroup>
        </Row>
      </QRForm>
    </Container>
  )
}
