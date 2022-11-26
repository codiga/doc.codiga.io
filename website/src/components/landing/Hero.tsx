import { Box, Container, Heading, Link, Text, VStack } from "@chakra-ui/react";
import DocusaurusLink from "@docusaurus/Link";
import React from "react";
import Swarm from "./Swarm";

const Hero = () => {
  return (
    <Box as="section" bg="base.chocolate" pos="relative" overflow="hidden">
      <Swarm />
      <Container
        as={VStack}
        py={36}
        maxW="container.md"
        spacing={10}
        zIndex={1}
        pos="relative"
      >
        <Heading size="3xl" textAlign="center" color="white">
          Everything you need to know to use Codiga
        </Heading>

        <Text textAlign="center" fontSize="2xl" color="white">
          Welcome to our documentation guide. Here you can find everything
          related to Codiga documentation.
        </Text>

        <Link
          as={DocusaurusLink}
          size="md"
          variant="primary"
          href="docs/rosie/rosie-introduction/"
        >
          Get Started
        </Link>
      </Container>
    </Box>
  );
};

export default Hero;
