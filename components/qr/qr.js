import React from 'react';

// QR Input
import {
  InputVCard,
  InputUrl,
  InputWifi,
} from './input'
// QR Output
import {
  QROutput,
} from './output'

export class QRCode extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      null
    )
  }
}

// Rename Components for easy access
QRCode.InputVCard = InputVCard;
QRCode.InputUrl = InputUrl;
QRCode.InputWifi = InputWifi;
QRCode.Output = QROutput;
