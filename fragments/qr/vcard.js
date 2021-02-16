import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



export default function VCardInput({}) {
  return (
    <Container>
      <Row>
        <InputGroup>

          <Col>
            <Form.Control></Form.Control>
          </Col>

          <Col>
            <Form.Control></Form.Control>
          </Col>

        </InputGroup>
      </Row>

      <Row>
        <InputGroup>

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
              <option value="test">test</option>
              <option value="test">test</option>
              <option value="test">test</option>
              <option value="test">test</option>
            </Form.Control>
          </Col>
        </InputGroup>
      </Row>

    </Container>
  )
}
