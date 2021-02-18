import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


import QRTabs from '../fragments/qr/tabs';
import QROutput from '../fragments/qr/output';
import QRForm from '../fragments/qr/qr-form';
import VCardInput from '../fragments/qr/vcard';
import WifiInput from '../fragments/qr/wifi';
import UrlInput from '../fragments/qr/url';



export default function Home() {

  return (
    <Container>
      <Row>

        <Col xs={12} md={7} lg={6}>
          <QRTabs>
            <>
              <Tab.Pane eventKey="vCard">
                <QRForm>
                  <p>hello</p>
                </QRForm>
              </Tab.Pane>
            </>
          </QRTabs>
        </Col>

      </Row>
    </Container>
  )
}
