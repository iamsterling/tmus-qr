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
      social: "",
			email: "",
			tel: "",
			addressStreet: "",
			addressCity: "",
			addressState: "",
			addressZip: "",
      url: "",
      
			QRData:`BEGIN:VCARD\nVERSION:4.0\nPRODID:-//qr.sterlingholt.tech\nN:Holt;Sterling;;;\nFN:Sterling Holt\nTITLE:Mobile Expert\nORG:T-Mobile\nURL:https://twitter.com/jsterlingholt\nEMAIL:james.holt28@t-mobile.com\nTEL:972-469-0082\nADR:880 S Preston Rd #40;Prosper\,;TX\,;75078\nEND:VCARD`,
		}


		this.contactChange  = this.contactChange.bind(this)
    this.urlChange      = this.urlChange.bind(this)
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
      		width: 320,
      		height: 320,
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
			    logoWidth:80, // width. default is automatic width
			    logoHeight:80, // height. default is automatic height
			    logoBackgroundColor:'#E20074', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
			    logoBackgroundTransparent:true, // Whether use transparent image, default is false

					// ====== Backgroud Image

      		backgroundImage: 'tmologo.svg', // Background Image
      		backgroundImageAlpha: 0, // Background image transparency, value between 0 and 1. default is 1.
      		autoColor: true, // Automatic color adjustment(for data block)
              autoColorDark: "rgba(226, 0, 116, 1)", // Automatic color: dark CSS color
              autoColorLight: "rgba(255, 255, 255, 0.1)", // Automatic color: light CSS color
      };


      this.qrcode=new QRCode(this.qrcodeDOM.current, options);
  }





	download() {
    this.qrcode.saveImage({
      path: 'q.png' // file path
    }).then(data=>{
       console.log("`q-premium1.png` has been Created!");
    });

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
    `BEGIN:VCARD\nVERSION:4.0\nPRODID:-//qr.sterlingholt.tech\nN:${this.state.lname};${this.state.fname};;;\nFN:${this.state.fname} ${this.state.lname}\nTITLE:${this.state.title}\nORG:T-Mobile\nURL:https://twitter.com/${this.state.social}\nEMAIL;type=INTERNET;type=pref:${this.state.email}\nTEL:${this.state.tel}\nADR:${this.state.addressStreet};${this.state.addressCity}\,;${this.state.addressState}\,;${this.state.addressZip}\nEND:VCARD`
    
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
              <Box>
                <QRInputField
                  w="100%"
                  value=""
                  placeholder="Url"
                  onChange={this.urlChange}/>
              </Box>
            )} 
          </Box>

          <Container
            pt={[10,10,0]} pb={[0]} px={0}
            w="100%"
            maxW="430px"
            centerContent>

            <QROutput>
              <Box
                ref={this.qrcodeDOM}/>
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