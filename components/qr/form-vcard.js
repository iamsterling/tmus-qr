import { Field } from 'formik';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';


import QRForm from './form-base';




export default function VCardInput({formContent}) {

  return (
    <>
      <QRForm>
        <legend>First Name:</legend>
        <Field />

        <legend>Last Name:</legend>
        <Field />
      </QRForm>
    </>

  )
}
