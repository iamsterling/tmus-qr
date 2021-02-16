import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

export default function VCardInput() {
  return (
    <>
      <Container className="mt-4">
        <Row className="mb-2 g-1">

            <legend>Name & Title</legend>

            <Col>
              <Form.Control placeholder="First Name" />
            </Col>

            <Col>
              <Form.Control placeholder="Last Name" />
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

        <Row className="mb-2 g-1">
          <legend>Contact</legend>
          <Col>
            <Form.Control placeholder="(555) 555-5555" type="tel" />
          </Col>

          <Col>
            <Form.Control placeholder="user@email.com" type="email" />
          </Col>
        </Row>

        <Row className="mb-2 g-1">
          <Col xs={6}>
            <Form.Control />
          </Col>
        </Row>


        <Row className="mb-2 g-1">
          <legend>Address</legend>

          <Col xs={6}>
            <Form.Control placeholder="Street" type="text" />
          </Col>
        </Row>

        <Row className="mb-2 g-1">

          <Col>
            <Form.Control placeholder="City" type="text" />
          </Col>

          <Col>
            <Form.Control as="select" placeholder="State" type="text">
              <option>state</option>
            </Form.Control>
          </Col>

          <Col xs={2}>
            <Form.Control placeholder="Zip" type="text" />
          </Col>
        </Row>
      </Container>
    </>
  )
}
