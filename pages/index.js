import QRInput from '/fragments/vcard.js';
//import QROutput from '/fragments/qr-output';
import QRTabs from '/fragments/tabs.js';

import Link from 'next/link';
export default function Home({children}) {

  return (
    <>
      <QRTabs></QRTabs>

      <Link href="/test">Hi</Link>

    </>
  )
}
