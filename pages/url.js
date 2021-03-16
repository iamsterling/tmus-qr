import Link from 'next/link'

import {Flex} from '@chakra-ui/react'

import {QuickResponse} from '../components/qr/qr'


export default function Test() {

  return (
    <QuickResponse>
      <Flex>
        <QuickResponse.Input.Field
          w="100%"
          placeholder="Url"/>
      </Flex>
    </QuickResponse>
  )
}
