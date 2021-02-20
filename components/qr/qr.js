import {
  VCardInput,
  WifiInput,
  UrlInput,
  QRForm,
} from './form';

import QRCode from '../../public/generate';

import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import React from 'react';

export function QRLogic() {
  return(
    <>
      <Tab.Container defaultActiveKey="vCard">
        <Nav variant="pills">

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
          <Tab.Pane>
            <QRForm>

              <VCardInput />
            </QRForm>
          </Tab.Pane>

          <Tab.Pane eventKey="vCard">
            <QRForm>
              <WifiInput />
            </QRForm>
          </Tab.Pane>
          <Tab.Pane>
            <QRForm>
              <UrlInput />
            </QRForm>
          </Tab.Pane>
            {/* QR OUTPUT
            // ----------- */}
            <QROutput />
        </Tab.Content>
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
          text: "BEGIN:VCARD N:Sterling Holt END:VCARD",
          colorDark : color?color:'#000000',
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
