import TabContainer from 'react-bootstrap/TabContainer';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';

import VCardInput from './vcard';
import WifiInput from './wifi';
import UrlInput from './url';

import QRForm from './qr-form';

export default function QRTabs({tabContent}) {

  return(
    <Tab.Container defaultActiveKey="vCard">
      <Row>
        <Nav justify variant="pills">

          <Col>
            <Nav.Item>
              <Nav.Link eventKey="vCard">vCard</Nav.Link>
            </Nav.Item>
          </Col>

          <Col>
            <Nav.Item>
              <Nav.Link eventKey="WiFi">WiFi</Nav.Link>
            </Nav.Item>
          </Col>

          <Col>
            <Nav.Item>
              <Nav.Link eventKey="URL">URL</Nav.Link>
            </Nav.Item>
          </Col>

        </Nav>

        <Tab.Content>
          {tabContent}
        </Tab.Content>
      </Row>
    </Tab.Container>
  );
}
