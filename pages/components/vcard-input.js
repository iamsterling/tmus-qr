import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import GenerateVCard from '../functions/generate-vcard';

export default function VCardInput() {
  return (
    <Container>
      <Form onSubmit="()">
        <Row>
          <label>Name & Title</label>
          <InputGroup>
            <Col xs={6} md={6} lg={4}>
              <label htmlFor="first-name">First Name</label>
              <Form.Control name="first-name" />
            </Col>

            <Col xs={6} md={6} lg={4}>
              <label htmlFor="last-name">Last Name</label>
              <Form.Control name="last-name" />
            </Col>
          </InputGroup>
        </Row>

        <Row>
          <Col>
            <GenerateVCard></GenerateVCard>
          </Col>
        </Row>

      </Form>
    </Container>
  )
}
