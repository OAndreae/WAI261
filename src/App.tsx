// 1. import `ChakraProvider` component
import { ChakraProvider, Heading, Center, Input, Box, Button, Text } from '@chakra-ui/react'

import Message from "./Message";

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Center>
        <Box>
          <Heading>ChakraUI Heading</Heading>
          <Message/>
          <Message/>
          <Message/>

          <Box backgroundColor="lightblue">
            <Text>Message 1</Text>
          </Box>
          
          <Input onChange={(e) => console.log()} />
          <Button backgroundColor="lightGrey" onClick={() => console.log("Button clicked.")}>
            Send message
          </Button>
        </Box>
      </Center>
    </ChakraProvider>
  )
}
export default App;