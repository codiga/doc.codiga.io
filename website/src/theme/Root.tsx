import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import GlobalBanner from "../components/GlobalBanner";
import theme from "../css/theme";

export default function Root({ children }) {
  return (
    <>
      <ColorModeScript initialColorMode="system" />
      <ChakraProvider resetCSS={false} theme={theme}>
        <GlobalBanner />
        {children}
      </ChakraProvider>
    </>
  );
}
