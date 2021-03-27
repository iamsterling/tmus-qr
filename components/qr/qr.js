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
import QRCode from './fragments/generate'
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
			email: "",
			phone: "",
			addressStreet: "",
			addressCity: "",
			addressState: "",
			addressZip: "",
      url: "",
      
			QRData:`
        BEGIN:VCARD\n
        VERSION:4.0\n
        N:Holt;Sterling;;;\n
        FN:Sterling Holt\n
        TITLE:Mobile Expert\n
        ORG:T-Mobile\n
        EMAIL;type=INTERNET;type=pref:james.holt28@t-mobile.com\n
        TEL:972-469-0082\n
        ADR:;;880 S Preston Rd #40;Prosper\,
        ;TX\,
        ;75078\n
        END:VCARD`,
		}


		this.handleChange = this.handleChange.bind(this)
    //this.generate = this.generate.bind(this)
	}
  // ---------------------------------------------------- //
  // Generate QR Code
  // ---------------------------------------------------- //
  generate(color){
      if(this.qrcode){
          this.qrcode.clear()
      }

      // if context.brand = tmo {this_variable}
      var options = {
      		// ====== Basic
      		text:(this.state.QRData),
      		width: 400,
      		height: 400,
      		colorDark : "#E20074",
      		colorLight : "#ffffff",
      		correctLevel : QRCode.CorrectLevel.L, // H, M, Q, H

      		// ====== dotScale
      		dotScale: 0.7, // For body block, must be greater than 0, less than or equal to 1. default is 1

      		dotScaleTiming: 0.7, // Dafault for timing block , must be greater than 0, less than or equal to 1. default is 1
      		/*dotScaleTiming_H: undefined, // For horizontal timing block, must be greater than 0, less than or equal to 1. default is 1
      		dotScaleTiming_V: undefined, // For vertical timing block, must be greater than 0, less than or equal to 1. default is 1
      		*/

          dotScaleAO: 1, // For alignment outer block, must be greater than 0, less than or equal to 1. default is 1
      		dotScaleAI: 1, // For alignment inner block, must be greater than 0, less than or equal to 1. default is 1

					logo:"tmologo-sm.svg", // Relative address, relative to `easy.qrcode.min.js`
			    logoWidth:100, // width. default is automatic width
			    logoHeight:100, // height. default is automatic height
			    logoBackgroundColor:'#E20074', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
			    logoBackgroundTransparent:true, // Whether use transparent image, default is false

					// ====== Backgroud Image

      		backgroundImage: 'tmologo.svg', // Background Image
      		backgroundImageAlpha: 0, // Background image transparency, value between 0 and 1. default is 1.
      		autoColor: true, // Automatic color adjustment(for data block)
              autoColorDark: "rgba(226, 0, 116, 1)", // Automatic color: dark CSS color
              autoColorLight: "rgba(255, 255, 255, 0.1)", // Automatic color: light CSS color
      };


      {this.handleChange}

      this.qrcode=new QRCode(this.qrcodeDOM.current, options);
  }

	download(){

	}

	componentDidMount(qrcodeDOM) {
		//this.generate()
	}



  changeContact = e => {
    // update QRData state
		this.setState({ QRData: `
      BEGIN:VCARD\n
      VERSION:4.0\n
      N:poop;${this.state.fname};;;\n
      FN:${this.state.fname} ${this.state.lname}\n
      TITLE:${this.state.title}\n
      ORG:T-Mobile\n
      EMAIL;type=INTERNET;type=pref:${this.state.email}\n
      TEL:${this.state.tel}\n
      ADR:${this.state.addressStreet};${this.state.addressCity}\,;${this.state.addressState}\,;${this.state.addressZip}\n
      END:VCARD`
    })
  }

  changeURL = e => {
    this.setState({ QRData: `${this.state.url}`})
  }


	handleChange = (event) => {
    // update state
		const {name, value} = event.target
    this.setState({ [name]: value })

    // if page variant is set to contact, use changeContact function
    // else, use changeURL function
    {this.state.variant === "contact" ? (
      (this.changeContact)
    ):(
      (this.changeURL)
    ) }
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
            px={[0,0]}>
            
            {this.state.variant === "contact" ? (
              <>
                <QRInputForm>

                  <Stack
                    direction="row"
                    p={0}>

                    <QRInputField
                      type="text"
                      name="firstName"
                      value={this.state.fname}
                      placeholder="First Name"
                      onChange={this.handleChange}/>

                    <QRInputField
                      name="lastName"
                      placeholder="Last Name"
                      value={this.state.lname}
                      onChange={this.handleChange}/>
                  </Stack>

                  <Stack
                    direction="row"
                    p={0}>
                    <QRInputField
                      value=""
                      placeholder="Job Title"
                      onChange={this.handleChange}/>

                    <QRInputField
                      value=""
                      placeholder="Twitter Handle"
                      onChange={null}/>
                  </Stack>

                  <Stack
                    direction="row">
                    <QRInputField
                        value=""
                        placeholder="Phone Number"
                        onChange={null}/>

                    <QRInputField
                      value=""
                      placeholder="Email Address"
                      onChange={null}/>
                  </Stack>

                  <Stack
                    direction="row">
                    <QRInputField
                        value=""
                        placeholder="Street"
                        onChange={null}/>

                    <QRInputField
                      value=""
                      placeholder="City"
                      onChange={null}/>
                  </Stack>

                  <Stack
                    direction="row">
                    <QRInputField
                        value=""
                        placeholder="State"
                        onChange={null}/>

                    <QRInputField
                      value=""
                      placeholder="Zip"
                      onChange={null}/>
                  </Stack>
                </QRInputForm>
              </>  
            ): (
              <QRPartialURL
                setQRData=""
                onChange="" />
            )} 
          </Box>

          <p>{this.state.QRData}</p>
          
          <Container
            pt={[10,10,0]} pb={[0]} px={0}
            w="430px"
            maxW="430px"
            centerContent>
            
            <QROutput
              data={this.state.QRData}
              py={3} px={3}>

              
              <Box
                py={3} px={3}
                ref={this.qrcodeDOM}>
              </Box>

            </QROutput>

            
            <QRActions
              actionLeft={this.generate.bind(this)}
              actionRight={null}/>
          </Container>
          
        </Stack>
			</>
  	)
	}
}