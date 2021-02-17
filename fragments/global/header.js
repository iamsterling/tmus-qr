import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import TMUSLOGO from './tmo-logo';

export default function Layout({appTitle}) {

  return (
    <>
      <header>
        <span>
          <TMUSLOGO />
          QR Generator
        </span>
      </header>
    </>
  )
}
