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


export function QRForm(props) {

const formikValues = prop



	return(
		<Formik
			initialValues={{
				fname={props.fname},
				lname={{props.lname}},
				title={{props.title}},
				company={{props.company}},
				email={{email@domain.com}},
				phone={{555-555-5555}},
				address: "123 alphabet st, rosewood, CA, 91092, USA",
			}

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
	const vcardData = {
		data: "",
	}

  return(
    <>
			<QRForm>
				<Field name="firstName" />


			<p>
			"BEGIN:VCARD\r\nVERSION:4.0\r\nN:"{vcardData.fname}{vcardData.lname};;;\r\n
							ORG:{vcardData.company}\r\n
							TITLE:{vcardData.title}\r\n
							TEL;TYPE=work,voice;VALUE=uri:tel:+1-{vcardData.phone}\r\n
							ADR;TYPE=WORK;PREF=1;LABEL="Address":;;{vcardData.address}\r\n
							EMAIL:{vcardData.email}\r\n
							REV:20080424T195243Z\r\n
							x-qq:21588891\r\n
							END:VCARD"
			</p>
			</QRForm>




    </>
  )
};






export function WifiInput() {
	const wifiData = {
		encryption: "",
		ssid: "",
		passphrase: ""
	}
  return(
    <>
      <legend>Wifi</legend>
			<Field type="email" name="email" placeholder="Email" />
    </>
  )
};




export function UrlInput() {
	const urlData = {
		url: "",
	}

  return(
    <>
      <legend>Url</legend>
			<Field />
    </>
  )
};
