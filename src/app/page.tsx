import Image from 'next/image'
import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import Header from "../components/Header/index";
import Main from "../components/Main/index";





export default function Home() {
  return (
    <>
      <ChakraProvider>
        <Box background="#2400FF" position='fixed' w='100%' h='100%'>
          <Flex>
            <Header />
            <Main />

          </Flex>
        </Box>


      </ChakraProvider >
    </>
  );
}
