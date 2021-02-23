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







export function VCardInput(props){
  console.log(props)
	
  return(
    <>
      <QRForm
        fname={props.fname}
				lname={props.lname}
        >

        <legend>Name & Title</legend>
        <Field name="fname" placeholder="First Name"/>
				<Field name="lname" placeholder="Last Name"/>

        <Button>Test</Button>
      </QRForm>
    </>
  )
};




export function WifiInput(props){
  return(
    <>
      <QRForm
        encryption={props.encryption}
        ssid={props.ssid}
        passphrase={props.passphrase}>

				<legend>WiFi info</legend>
        <Field as="select" name="encryption">
					<option>WPA2</option>
				</Field>
        <Field name="ssid" />
        <Field name="passphrase" />
      </QRForm>
    </>
  )
};




export function UrlInput(props){
  return(
    <>
      <QRForm url={props.url}>
        <Field name="url"/>
      </QRForm>
    </>
  )
};



export default function QRForm(props) {

	return(
		<Formik
			initialValues={{
				fname:"",
				lname:"",
				title:"",
				company:"",
				email:"",
				phone:"",
				address:"",
			}}>

		<Form>
			{props.children}
		</Form>
	</Formik>
	)
};
