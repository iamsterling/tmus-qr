import {
  VCardInput,
  WifiInput,
  UrlInput,
  QRForm,
} from './form';

import Image from 'next/image'

import QRCode from '../../public/generate';


import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React from 'react';

export function QRLogic() {
  return(
    <>

      <Tab.Container defaultActiveKey="vCard">
        <Col sm={12} md={8} lg={4}>
          <Nav>

            <Nav.Item>
              <Nav.Link eventKey="vCard">vCard</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>


          <Tab.Content>
            {/* QR INPUT
            // ----------- */}
            <Tab.Pane eventKey="vCard">
              <QRForm>
                <VCardInput />
              </QRForm>
            </Tab.Pane>

            <Tab.Pane>
              <QRForm>
                <WifiInput />
              </QRForm>
            </Tab.Pane>
            <Tab.Pane>
              <QRForm>
                <UrlInput />
              </QRForm>
            </Tab.Pane>
          </Tab.Content>
        </Col>

        <Col sm={12} md={8} lg={4}>
          <QROutput/>
        </Col>
      </Tab.Container>
    </>

  )
};








class QROutput extends React.Component {
  constructor(props) {
    super(props);
    // QRCode DOM
    this.qrcodeDOM = React.createRef();
    // QRCode
    this.qrcode=null;
  }

  //QRCode generator
  generate(color){
      if(this.qrcode){
          this.qrcode.clear();
      }
      var options = {
          text: "BEGIN:VCARD\r\nVERSION:4.0\r\nN:Sterling Holt;;;\r\nADR;DOM;PARCEL;HOME:;;880 S Preston Rd #40;Prosper;TX;75078;USA.\r\nEMAIL;INTERNET:james.holt28@t-mobile.com\r\nTEL;CELL:972-469-0082\r\nEND:VCARD",
          colorDark : "#e20074",
      		colorLight : "#ffffff",
      		correctLevel : QRCode.CorrectLevel.L, // H, M, Q, H

      		// ====== dotScale
      		dotScale: 0.5,

          backgroundImage: 'tmologo.svg', // Background Image
      		backgroundImageAlpha: 1, // Background image transparency, value between 0 and 1. default is 1.
      		autoColor: true, // Automatic color adjustment(for data block)
              autoColorDark: "rgba(0, 0, 0, .6)", // Automatic color: dark CSS color
              autoColorLight: "rgba(255, 255, 255, .7)", // Automatic color: light CSS color



      };
      this.qrcode=new QRCode(this.qrcodeDOM.current, options);
  }

  // Gerenate QRCode on mount
  componentDidMount() {
       this.generate()
  }

  render() {
    return (
      <>
        {/* DOM */}
        <div id="qr" ref={this.qrcodeDOM}></div>

        {/* Generate QRCode on click */}
        <Button onClick={this.generate.bind(this, '#ff0000')}>
          Get QR Code
        </Button>
      </>
    );
  }
};
