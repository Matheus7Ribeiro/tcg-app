import Image from 'next/image'
import { ChakraProvider } from '@chakra-ui/react'
import Header from "../components/Header/index";


export default function Home() {
  return (
    <>
      <ChakraProvider>
        <Header />
      </ChakraProvider>
    </>
  );
}
