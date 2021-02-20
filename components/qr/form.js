import { Formik } from "formik";
import { Form } from 'formik';

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
			initialValues={{
				vCard: {
					fullname: {
						fname: "",
						lname: "",
					},

					phone:"",
					email:"",
					twitter:"",
					address:"",
				},

				errors: {},
				touched: {},
				handleChange: {},
				handleBlur: {},
				handleSubmit: {},
				isSubmitting: {},
			}}

			validationSchema={
				Yup.object().shape({

					fname: Yup.string()
						.max(255)
						.required("First name is required"),

					lname: Yup.string()
						.max(255)
						.required("Last name is required"),

					title: Yup.string()
						.max(255)
						.required("Title is required"),

					brand: Yup.string()
						.max(255)
						.required("brand is required"),

					phone: Yup.string()
						.max(255)
						.required("Phone number is required"),

					email: Yup.string()
						.email("Must be a valid email")
						.max(255)
						.required("Email is required"),
				})
			}

			// onsubmit=trigger Qr generator{qrdata}
		>

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
      <p>VCardInput</p>
    </>
  )

};
export function WifiInput() {
  return(
    <>
      <p>WifiInput</p>
    </>
  )
};
export function UrlInput() {
  return(
    <>
      <p>UrlInput</p>
    </>
  )
};
