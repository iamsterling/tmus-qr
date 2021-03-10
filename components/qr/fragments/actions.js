// 1. import React
// 2. import Chakra
import React from 'react'
import { 
    Box,
    Button,
    Flex,
    Stack,
} from '@chakra-ui/react'
// 3. import all qr logic
import { QuickResponse } from '../qr'



export default function QRActions(){

  return(
    <Stack>
      <Flex>
        <Box
          pr="1">
          <Button
            leftIcon={<QuickResponse.Logo color="white"/>}
            colorScheme="pink"
            h="60px"
            w={[200, 230, 500]}
            variant="solid">
            GENERATE
          </Button>
        </Box>

        <Box
          pl="1">
          <Button
            h="60px"
            w={[200, 230, 500]}
            variant="solid">
            DOWNLOAD
          </Button>
        </Box>
      </Flex>
    </Stack>
  )
}