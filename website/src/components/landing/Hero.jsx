import { Box, VStack, Heading, Text, Flex } from "@chakra-ui/layout";
import React from "react";
import Looper from "@site/static/img/looper.svg";
import { keyframes } from "@chakra-ui/system";

const Hero = () => {
  const spin = keyframes`
    from { transform: rotate(0deg); transform-origin: center }
    to { transform: rotate(360deg); transform-origin: center }
  `;

  const animation = `${spin} infinite 20s linear`;

  return (
    <VStack
      bg="#300623"
      color="white"
      alignItems="center"
      justifyContent="center"
      padding="30"
      position="relative"
      overflow="hidden"
      spacing={10}
      minH="58vh"
    >
      <Box maxW="3xl" zIndex={3}>
        <Heading size="4xl" textAlign="center">
          Everything you need to know to use Codiga
        </Heading>
      </Box>
      <Box maxW="3xl" zIndex={1}>
        <Text textAlign="center" fontSize={"xl"}>
          Welcome to our documentation guide. Here you can find everything
          related to Codiga documentation.
        </Text>
      </Box>
      <Flex zIndex={0} h="100%" position="absolute" alignItems="center" justifyContent="center" animation={animation}>
        <Looper
          className="looper"
          style={{
            left: "50%",
            height: "200%",
            opacity: "0.3",
          }}
        />
      </Flex>
    </VStack>
  );
};

export default Hero;
