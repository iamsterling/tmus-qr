// BOOTSTRAP
//
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// FORMIK
import { Field } from "formik";

export default function UrlInput({qrinput}) {
  return (
    <Container>
      <Row>
        <Col>
          <label for="url">URL</label>

          <Form.Control name="url"></Form.Control>
        </Col>
      </Row>
    </Container>
  )
}
