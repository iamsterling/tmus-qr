import TabContainer from 'react-bootstrap/TabContainer';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';

import VCardInput from './vcard';
import WifiInput from './wifi';
import UrlInput from './url';

export default function QRTabs() {

  return(
    <Tab.Container defaultActiveKey="vCard">
      <Row>
        <Nav variant="pills">

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
      </Row>




      <Row>
        <Col>
          <Tab.Content>

            <Tab.Pane eventKey="vCard">
              <VCardInput />
            </Tab.Pane>

            <Tab.Pane eventKey="WiFi">
              <p>Wifi Input</p>
            </Tab.Pane>
          </Tab.Content>

          <Tab.Pane eventKey="URL">
            <p>URL Input</p>
          </Tab.Pane>

        </Col>
      </Row>
    </Tab.Container>
  );
}
