import React from "react";
import { Flex } from "@chakra-ui/react";

export default function Card({ children }) {
  return (
    <Flex
      flexDir="column"
      p={8}
      gridGap={2}
      borderRadius="lg"
      boxShadow="md"
      bg="white"
      _dark={{ bg: "base.dark" }}
    >
      {children}
    </Flex>
  );
}
