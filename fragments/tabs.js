import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tabs';
import QRInput from './qr-input';
import QROutput from './qr-output';

export default function QRTabs() {

  return (
    <>
      <Tabs defaultActiveKey="vCard" id="uncontrolled-tab-example">

        <span>T-Mobile</span>
        <Tab eventKey="vCard" title="vCard">
          <QRInput></QRInput>
          <QROutput></QROutput>
        </Tab>

        <Tab eventKey="Wifi" title="WiFi">
          <p>2</p>
        </Tab>

        <Tab eventKey="Google" title="Google">
          <p>3</p>
        </Tab>

      </Tabs>
    </>
  )
}
