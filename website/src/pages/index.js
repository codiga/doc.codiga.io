import Layout from "@theme/Layout";
import React from "react";
import Landing from "../components/landing/Landing";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"
import theme from "../styles/theme";

export default () => {
  const extendedTheme = extendTheme(theme);

  return (
    <ChakraProvider theme={extendedTheme}>
      <Layout bg='green'>
        <Landing />
      </Layout>
    </ChakraProvider>
  );
};
