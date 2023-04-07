import React from "react";
import { Flex, Link, Text } from "@chakra-ui/react";
import DatadogLogo from "./DatadogLogo";

export default function GlobalBanner() {
  return (
    <Flex
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, #632CA6 50%, #2196F3)"
      gridGap={2}
      p={4}
    >
      <DatadogLogo color="white" />
      <Text color="white" fontWeight="bold" fontSize="16px" m="0 !important">
        Codiga has joined Datadog!{" "}
      </Text>

      <Link
        color="white"
        fontSize="16px"
        fontWeight="semibold"
        textDecoration="underline !important"
        flexShrink={{ base: 0, md: 1 }}
        _hover={{ color: "white" }}
        href="https://codiga.io/blog/codiga-joins-datadog/"
      >
        Read the Blog
      </Link>
    </Flex>
  );
}
