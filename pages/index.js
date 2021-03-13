import Link from 'next/link'

// Local Imports
import Container from 'react-bootstrap/Container';
import { Box, Text } from '@chakra-ui/react'



export default function Home() {

  return (
    <>
      <Text
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold">
          QR Code Generator
      </Text>

      <Text>
        <section>Unique value proposition</section>
      </Text>
    </>
  )
}
