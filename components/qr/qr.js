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
        /*logoImage: {
          data:image/png;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwMHB4IiBoZWlnaHQ9IjEwMDBweCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5BcnRib2FyZDwvdGl0bGU+CiAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik03NDUuNzk5ODk5LDE5MyBMNzUyLDQwOS41MDk0NjYgTDcxOS4wODEwNDYsNDE0LjgzMzU5IEM3MTAuMTU4Mzk4LDI5MS41MTA5NjEgNjUwLjQ5NjA0NiwyMjQuMDcxMDg0IDU0OC4wODQ5MDMsMjIyLjI4NzU3MiBMNTQ4LjA4NDkwMyw2NzUuNjg4MjUxIEM1NDguMDg0OTAzLDc1OC4xOTc0OTEgNTYyLjM1MDUzNSw3NzEuNTM3MTUgNjUxLjM3ODY4OCw3NzIuNDE1Njk5IEw2NTEuMzc4Njg4LDgwNyBMMzQ4LjY0NzgyLDgwNyBMMzQ4LjY0NzgyLDc3Mi40MTU2OTkgQzQzNy42NzQwMSw3NzEuNTM3MTUgNDUxLjk1OTI3OCw3NTguMTk3NDkxIDQ1MS45NTkyNzgsNjc1LjY4ODI1MSBMNDUxLjk1OTI3OCwyMjIuMjg3NTcyIEMzNTAuNDExMTQzLDIyNC4wNzEwODQgMjg5Ljg4MzgxOSwyOTEuNTEwOTYxIDI4MC45NjAxOSw0MTQuODMzNTkgTDI0OCw0MDkuNTA5NDY2IEwyNTQuMjkzMzcyLDE5MyBMNzQ1Ljc5OTg5OSwxOTMgWiBNNzUyLDQ5MyBMNzUyLDYxNyBMNjI4LDYxNyBMNjI4LDQ5MyBMNzUyLDQ5MyBaIE0zNzQsNDkzIEwzNzQsNjE3IEwyNTAsNjE3IEwyNTAsNDkzIEwzNzQsNDkzIFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0UyMDA3NCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==},*/
          //logoScale: number,
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
    `BEGIN:VCARD\nVERSION:4.0\nPRODID:-//qr.sterlingholt.tech\nN:${this.state.lname};${this.state.fname};;;\nFN:${this.state.fname} ${this.state.lname}\nTITLE:${this.state.title}\nORG:T-Mobile\nURL:https://twitter.com/${this.state.social}\nEMAIL;type=INTERNET;type=pref:${this.state.email}\nTEL:${this.state.tel}\nADR:${this.state.addressStreet}\,;${this.state.addressCity}\,;${this.state.addressState}\,;${this.state.addressZip}\nEND:VCARD`
    
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
                data={this.state.QRData}/>
            </QROutput>

            
            <QRActions
              actionLeft={this.generate.bind(this)}
              actionRight={this.download.bind(this)}/>
            
          </Container>
          
        </Stack>
			</>
  	)
	}
}