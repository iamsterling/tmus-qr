import Link from 'next/link'

import {QuickResponse} from '../components/qr/qr'

export default function Test() {

  return (
    <QuickResponse>
      <QuickResponse.Input>
        <QuickResponse.Input.Field/>
      </QuickResponse.Input>
    </QuickResponse>
  )
}
