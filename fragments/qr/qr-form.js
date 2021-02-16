import { Formik } from "formik";
//import { Form } from "formik";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function QRForm({}) {


	{/* Check for Brand selection
	var CheckBrand({Brand}) {
		if (Brand) = 'T-Mobile' {
			// Options
		}
	}


	// New instance with options
	var qrcode = new QRCode(options);

	// Save QRCode image
	qrcode.saveImage({
		path: 'q.png' // save path
	});*/}


	return(
		<>
			<Formik
			initialValues={{
				vCard: {
					// VALUES
					name: "",
					title: "",
					phone: "",
					brand: "",
					address: "",
				},

				wifi: {
					encryption: "",
					ssid: "",
					pass: "",
				},

				url: "",
			}}

			onSubmit={async values => {
				await new Promise(resolve => setTimeout(resolve, 500));
				alert(JSON.stringify(values, null, 2));
			}}>

				<Form>
				</Form>

				<Button>Get QR</Button>

			</Formik>
		</>
	)
}
