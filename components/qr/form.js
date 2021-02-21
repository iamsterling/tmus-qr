import {
	Formik,
	Form,
	Field,
} from "formik";

import * as Yup from 'yup';

//import { Form } from "formik";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';




{/*
const vcardData = [
  { fullname: {fname, lname} },
  { company: {company} },
  { title: {title} },
  { phone: {phone} },
  { address: {address} },
];

const wifiData = [
  { encryption: ""},
  { ssid: ""},
  { passphrase: ""},
];

const urlData = "";
*/}

export function QRForm({children}) {


	return(
		<Formik
			initialValues={{}

			// onsubmit=trigger Qr generator{qrdata}
		}>



		<Container>
			<Form>
				<>{children}</>
			</Form>
		</Container>
	</Formik>

	)
};




export function VCardInput() {
  return(
    <>
			<legend>Name</legend>
      <Field />
    </>
  )
};



export function WifiInput() {
  return(
    <>
      <legend>Wifi</legend>
			<Field />
    </>
  )
};




export function UrlInput() {
  return(
    <>
      <legend>Url</legend>
			<Field />
    </>
  )
};
