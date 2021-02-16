import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tabs';

import VCardInput from './vcard';

export default function QRTabs() {

  return(
    <>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="vCard" title="vCard">
          <VCardInput />
        </Tab>
        <Tab eventKey="WiFi" title="WiFi">
          <p>Meow</p>
        </Tab>
        <Tab eventKey="Google/URL" title="Google/URL">
          <p>Bark</p>
        </Tab>
      </Tabs>
    </>
  );
}
