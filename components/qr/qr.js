import React from 'react';

// QR Input
import {
  Input,
  VCard,
  Uri,
} from './input'

// QR Output
import {
  QROutput,
} from './output'

export class QRCode extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      null
    )
  }
}

// Rename Components for easy access
QRCode.Input = Input;
QRCode.Input.VCard = VCard;
QRCode.Input.Uri = Uri;

// QRCode Output
QRCode.Output = QROutput;
