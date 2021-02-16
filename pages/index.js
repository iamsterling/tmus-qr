import QrInput from './components/qr-input.js';
import QrOutput from './components/qr-output.js'
import QRTabs from './components/tabs';

import Link from 'next/link';
export default function Home({children}) {

  return (
    <>
      <QRTabs></QRTabs>

      <Link href="/test">Hi</Link>

    </>
  )
}
