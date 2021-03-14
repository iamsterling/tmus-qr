import Link from 'next/link'

// Local Imports
import { 
  Box,
  Container,
  Flex,
  Text } from '@chakra-ui/react'



export default function Home() {

  return (
    <>
      <Container
        px={4}
        centerContent>

        <Text
          bg="black"
          bgClip="text"
          fontSize="6xl"
          fontWeight="bold">
            QR Code Generator
        </Text>

        <Text>
          <section>
          Unique value proposition
          </section>
        </Text>
      </Container>
    </>
  )
}
