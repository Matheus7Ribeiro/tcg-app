
import { Box, Text, Flex, Link, HStack, Stack, Button, Image, VStack } from "@chakra-ui/react";




const Main: React.FC = () => {
    return (
        <>
            <Box
                mt='20px'
                display='inline-block'
                position='relative' w='1200px'
                h='800px'
                borderRadius="18px"
                background="rgba(0, 178, 255, 0.48)"
                boxShadow="53px 46px 41px 0px rgba(0, 0, 0, 0.25), 0px 0px 34px 10px rgba(0, 0, 0, 0.25) inset"
                backdropFilter="blur(15px)">
                <Flex justifyContent='center'>
                    <Box
                        mt='20px'
                        w='933px'
                        h='70px'
                        borderRadius="18px"
                        background="var(--Azul-base, rgba(0, 133, 255, 0.35))"
                        boxShadow="40px 28px 29px 0px rgba(0, 0, 0, 0.25), 0px 0px 34px 10px rgba(0, 0, 0, 0.25) inset"
                        backdropFilter="blur(15px)">

                        <HStack display='flex' alignItems='center' justifyContent='space-around'>
                            <Box
                                w='172px'
                                h='48px'
                                borderRadius='91px'
                                bg='var(--AZUL-PRIM, linear-gradient(91deg, #0094FF 0.14%, #0059DF 99.5%))'
                                boxShadow='15px 13px 34px 0px rgba(0, 0, 0, 0.25), 0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset'
                            >
                            </Box>
                            <Box
                                w='172px'
                                h='48px'
                                borderRadius='91px'
                                bg='var(--AZUL-PRIM, linear-gradient(91deg, #0094FF 0.14%, #0059DF 99.5%))'
                                boxShadow='15px 13px 34px 0px rgba(0, 0, 0, 0.25), 0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset'
                            >
                            </Box>
                            <Box
                                w='172px'
                                h='48px'
                                borderRadius='91px'
                                bg='var(--AZUL-PRIM, linear-gradient(91deg, #0094FF 0.14%, #0059DF 99.5%))'
                                boxShadow='15px 13px 34px 0px rgba(0, 0, 0, 0.25), 0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset'
                            >
                            </Box>
                        </HStack>

                    </Box>
                </Flex >



            </Box >


        </>
    );
};

export default Main;
