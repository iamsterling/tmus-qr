

import { Formik } from "formik";
import { Form } from 'formik';

//import { Form } from "formik";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export default function QRForm({children}) {


	return(
		<Formik
			initialValues={{
				vCard: {
					fname:"",
					lname:"",
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
		>

			<Form>
				<>
					{children}
				</>

				<>
					<Container>
						<Row className="mt-2">
							<Col xs={6} md={4} lg={3}>
								<Button>Get QR</Button>
							</Col>
						</Row>
					</Container>
				</>
			</Form>
		</Formik>
	)
}
