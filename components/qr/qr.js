// ------------------------------------------------------ //
// 1. import React
// ------------------------------------------------------ //
import React from 'react'
// ------------------------------------------------------ //
// 2. Third Party Libraries
// ------------------------------------------------------ //
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Input,
  Stack, StackDivider, HStack, VStack,
  Wrap } from '@chakra-ui/react'
// ------------------------------------------------------ //
// 3. QR Fragment Logic
// ------------------------------------------------------ //
import { QRLogo } from '../logo'
import { AwesomeQRCode } from "@awesomeqr/react"
import { 
  // fragments
  QRInputField,
  QRInputForm,

  // partial component
  QRPartialContact,
  QRPartialURL,
} from './fragments/input'
import { generate, QROutput } from './fragments/output'
import QRActions  from './fragments/actions'




const QR = (props) => {
  return(
    <AwesomeQRCode
      options={{
        text: (props.data),
        size: 1400,
        //margin?: number,
        correctLevel: 3,
        maskPattern: 6,
        //version: 1,
        components: {
          data: {
            scale: 0.7,
          },
          timing: {
            scale: 0.7,
            protectors: false,
          },
          alignment: {
            scale: 0.85,
            protectors: false,
          },
          cornerAlignment: {
            scale: 1,
            protectors: true,
          },
        },
        colorDark: "#E20074",
        //colorLight?: string,
        //autoColor?: boolean,
        //backgroundImage: string | Buffer,
        //backgroundDimming?: string,
        //gifBackground?: ArrayBuffer,
        //whiteMargin?: boolean,
        logoImage: (props.logo),
        logoScale: (props.scale)
        //logoMargin?: number,
        //logoCornerRadius?: number,
        //dotScale: 0, // DEPRECATED!!
        // ...
      }}
      onStateChange={(state) => {
        switch (state) {
          case "working":
            // ...
            break;
          case "idle":
            // ...
            break;
        }
      }}/>
  )
}




export class QuickResponse extends React.Component {
	constructor(props){
		super(props);
		// QRCode DOM
    this.qrcodeDOM = React.createRef();
    this.qrcode=null;

		// input
		this.qrinput = React.createRef();

		this.state = {
      variant: (props.variant),
      contact: (props.contact),
			fname: "",
			lname: "",
			title: "",
			company: "T-Mobile",
      social: "",
			email: "",
			tel: "",
			addressStreet: "",
			addressCity: "",
			addressState: "",
			addressZip: "",
      url: "",
      
			QRData:`https://qr.sterlingholt.tech`,

      logo: `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjQwcHgiIGhlaWdodD0iNjQwcHgiIHZpZXdCb3g9IjAgMCA2NDAgNjQwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkFydGJvYXJkPC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFMjAwNzQiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0UyMDA3NCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJBcnRib2FyZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwIj4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTMiIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyMC4wMDAwMDAsIDMyMC4wMDAwMDApIHJvdGF0ZSgtMzYwLjAwMDAwMCkgdHJhbnNsYXRlKC0zMjAuMDAwMDAwLCAtMzIwLjAwMDAwMCkgIiB4PSIwIiB5PSIwIiB3aWR0aD0iNjQwIiBoZWlnaHQ9IjY0MCIgcng9IjI0MCI+PC9yZWN0PgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktMiIgc3Ryb2tlPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBzdHJva2Utd2lkdGg9IjUwIiBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMjAuMDAwMDAwLCAzMjAuMDAwMDAwKSByb3RhdGUoLTM2MC4wMDAwMDApIHRyYW5zbGF0ZSgtMzIwLjAwMDAwMCwgLTMyMC4wMDAwMDApICIgeD0iOTUiIHk9Ijk1IiB3aWR0aD0iNDUwIiBoZWlnaHQ9IjQ1MCIgcng9IjEyMCI+PC9yZWN0PgogICAgICAgICAgICA8cGF0aCBkPSJNNDIzLjQwNDMyMywxOTMgTDQyNiwyODIuMjEzMTg0IEw0MTIuMjE4NDU0LDI4NC40MDcgQzQwOC40ODI5OCwyMzMuNTkxNjUgMzgzLjUwNTI4OSwyMDUuODAyOTA2IDM0MC42MzA3ODMsMjA1LjA2ODAwNiBMMzQwLjYzMDc4MywzOTEuODkyNzE2IEMzNDAuNjMwNzgzLDQyNS44OTA4MjMgMzQ2LjYwMzEwMSw0MzEuMzg3NDU4IDM4My44NzQ4MDgsNDMxLjc0OTQ2NSBMMzgzLjg3NDgwOCw0NDYgTDI1Ny4xMzYyOSw0NDYgTDI1Ny4xMzYyOSw0MzEuNzQ5NDY1IEMyOTQuNDA3MTc1LDQzMS4zODc0NTggMzAwLjM4NzcxNCw0MjUuODkwODIzIDMwMC4zODc3MTQsMzkxLjg5MjcxNiBMMzAwLjM4NzcxNCwyMDUuMDY4MDA2IEMyNTcuODc0NTA2LDIwNS44MDI5MDYgMjMyLjUzNDY5NCwyMzMuNTkxNjUgMjI4Ljc5ODgxLDI4NC40MDcgTDIxNSwyODIuMjEzMTg0IEwyMTcuNjM0NzI1LDE5MyBMNDIzLjQwNDMyMywxOTMgWiBNNDI2LDMxNi41NTgxNCBMNDI2LDM2OC43NzYxNjMgTDM3My42MTg4ODEsMzY4Ljc3NjE2MyBMMzczLjYxODg4MSwzMTYuNTU4MTQgTDQyNiwzMTYuNTU4MTQgWiBNMjY5LjU5NDQwNiwzMTYuNTU4MTQgTDI2OS41OTQ0MDYsMzY4Ljc3NjE2MyBMMjE3LjIxMzI4NywzNjguNzc2MTYzIEwyMTcuMjEzMjg3LDMxNi41NTgxNCBMMjY5LjU5NDQwNiwzMTYuNTU4MTQgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRTIwMDc0IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==`,
		}


		this.contactChange  = this.contactChange.bind(this)
    this.urlChange      = this.urlChange.bind(this)
    //this.generate = this.generate.bind(this)
	}
  // ---------------------------------------------------- //
  // Generate QR Code
  // ---------------------------------------------------- //
  generate(color){  }





	download() {
    fs.writeFileSync('QRResult.png', canvas.toBuffer())
	}

	componentDidMount(qrcodeDOM) {
		//this.generate()
	}

  adjustState = e => {
    const {name, value} = e.target
    this.setState({ [name]: value }), () => {
      console.log("yo")
    }
  }


	contactChange = e => {
    // update state
    this.adjustState(e)
  
    // if page variant is set to contact, use changeContact function
    // else, use changeURL function
    this.setState({QRData: 
    `BEGIN:VCARD\nVERSION:4.0\nPRODID:-//qr.sterlingholt.tech\nN:${this.state.lname};${this.state.fname};;;\nFN:${this.state.fname} ${this.state.lname}\nTITLE:${this.state.title}\nORG:T-Mobile\nURL:https://twitter.com/${this.state.social}\nEMAIL;type=INTERNET;type=pref:${this.state.email}\nTEL:${this.state.tel}\nADR:${this.state.addressStreet}\,;${this.state.addressCity},;${this.state.addressState},;${this.state.addressZip}\nEND:VCARD`
    
    })

    this.generate()
  }
  urlChange = e => {
    this.adjustState(e)

    this.setState( {QRData: `${this.state.url}`})
  }











	render(){
	  return(
			<>
        <Stack
          direction={["column","column", "row"]}
          maxW="100%"
          py={[0,0,8]} px={0}>

          <Box
            w={["100%","100%", "600px"]}
            maxW="600px"
            px={[8,0]}>
            
            {this.state.variant === "contact" ? (
              <>
              
                <QRInputForm
                  name="contactForm"
                  onSubmit="">

                  <Stack
                    direction="row">

                    <QRInputField
                      w="50%"
                      type="text"
                      name="fname"
                      value={this.state.fname}
                      placeholder="First Name"
                      onChange={this.contactChange}/>

                    <QRInputField
                      w="50%"
                      type="text"
                      name="lname"
                      placeholder="Last Name"
                      value={this.state.lname}
                      onChange={this.contactChange}/>
                  </Stack>

                  <Stack
                    direction="row">
                    <QRInputField
                      w="50%"
                      name="title"
                      value={this.state.title}
                      placeholder="Job Title"
                      onChange={this.contactChange}/>

                    <QRInputField
                      w="50%"
                      name="social"
                      value={this.state.social}
                      placeholder="Twitter Handle"
                      onChange={this.contactChange}/>
                  </Stack>

                  <Stack
                    direction="row">

                    <QRInputField
                      w="50%"
                      name="tel"
                      value={this.state.tel}
                      placeholder="Phone Number"
                      onChange={this.contactChange}/>

                    <QRInputField
                      w="50%"
                      name="email"
                      value={this.state.email}
                      placeholder="Email Address"
                      onChange={this.contactChange}/>
                  </Stack>

                  <Stack
                    direction="row">
                    <QRInputField
                      w="50%" 
                      name="addressStreet"
                      value={this.state.addressStreet}
                      placeholder="Street"
                      onChange={this.contactChange}/>

                    <QRInputField
                      w="50%"
                      name="addressCity"
                      value={this.state.addressCity}
                      placeholder="City"
                      onChange={this.contactChange}/>
                  </Stack>

                  <Stack
                    direction="row">
                    <QRInputField
                      w="50%"
                      name="addressState"
                      value={this.state.addressState}
                      placeholder="State"
                      onChange={this.contactChange}/>

                    <QRInputField
                      w="50%"
                      name="addressZip"
                      value={this.state.addressZip}
                      placeholder="Zip"
                      onChange={this.contactChange}/>
                  </Stack>
                </QRInputForm>
                
              </>  
            ): (
              <QRInputForm>
                <QRInputField
                  w="100%"
                  name="url"
                  defaultValue=""
                  value={this.state.url}
                  placeholder="Url"
                  onChange={this.urlChange}/>
              </QRInputForm>
            )} 
          </Box>

          <Container
            pt={[10,10,0]} pb={[0]} px={0}
            w="100%"
            maxW="430px"
            centerContent>

            <QROutput>
              <QR
                data={this.state.QRData}
                logo={this.state.logo}
                scale="0.3"/>
            </QROutput>

            
          </Container>
        </Stack>
			</>
  	)
	}
}