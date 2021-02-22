import Image from 'next/image'

import QRCode from './generate';


import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React from 'react';

export default function QROutput() {
  return(
    <>
      <QRLogic />
    </>
  )
};


class QRLogic extends React.Component {
  constructor(props) {
    super(props);
    // QRCode DOM
    this.qrcodeDOM = React.createRef();
    // QRCode
    this.qrcode=null;

    this.generate.bind(this);

  }

  //QRCode generator
  generate(color){
      if(this.qrcode){
          this.qrcode.clear();
      }



      var options = {
      		// ====== Basic
      		text: "BEGIN:VCARD\r\nVERSION:4.0\r\nN:S Holt;;;\r\nORG:T-Mobile\r\nTITLE:Mobile Expert\r\nTEL;TYPE=work,voice;VALUE=uri:tel:+1-555-555-5555\r\nADR;TYPE=WORK;PREF=1;LABEL=Address:;;123 Address St, City, State, 29201\r\nEMAIL:first.last@t-mobile.com\r\nEND:VCARD",
      		width: 250,
      		height: 250,
      		colorDark : "#e20074",
      		colorLight : "#ffffff",
      		correctLevel : QRCode.CorrectLevel.L, // H, M, Q, H

      		// ====== dotScale
      		dotScale: 0.5, // For body block, must be greater than 0, less than or equal to 1. default is 1
          /*
      		dotScaleTiming: 1, // Dafault for timing block , must be greater than 0, less than or equal to 1. default is 1
      		dotScaleTiming_H: undefined, // For horizontal timing block, must be greater than 0, less than or equal to 1. default is 1
      		dotScaleTiming_V: undefined, // For vertical timing block, must be greater than 0, less than or equal to 1. default is 1
      		*/

          dotScaleAO: 0.8, // For alignment outer block, must be greater than 0, less than or equal to 1. default is 1
      		dotScaleAI: 0.4, // For alignment inner block, must be greater than 0, less than or equal to 1. default is 1

      		// ====== Backgroud Image

      		backgroundImage: 'tmologo.svg', // Background Image
      		backgroundImageAlpha: 1, // Background image transparency, value between 0 and 1. default is 1.
      		autoColor: true, // Automatic color adjustment(for data block)
              autoColorDark: "rgba(0, 0, 0, 1)", // Automatic color: dark CSS color
              autoColorLight: "rgba(255, 255, 255, 0.7)", // Automatic color: light CSS color

      };

      this.qrcode=new QRCode(this.qrcodeDOM.current, options);
  }



  // Generate QRCode on mount
  componentDidMount() {
       this.generate()
  }
  render() {
    return (
      <>

        {/* DOM */}
        <div id="qr" ref={this.qrcodeDOM}></div>



        <br />
        <br />
        <br />
        <br />


        {/* Generate QRCode on click */}
        {/* FIGURE OUT HOW TO SEPERATE THIS */}
        <Button onClick={this.generate.bind(this, '#ff0000')}>
          Get QR Code
        </Button>
      </>
    );
  }
};
