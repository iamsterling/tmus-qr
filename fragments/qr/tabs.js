import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tabs';

import VCardInput from './vcard';
import WifiInput from './wifi';
import UrlInput from './url';

export default function QRTabs() {

  return(
    <>
      <Tabs defaultActiveKey="vCard" id="uncontrolled-tab-example">

        <Tab eventKey="vCard" title="vCard">
          <VCardInput />
        </Tab>

        <Tab eventKey="WiFi" title="WiFi">
          <WifiInput />
        </Tab>

        <Tab eventKey="Google/URL" title="Google/URL">
          <UrlInput />
        </Tab>

      </Tabs>
    </>
  );
}
