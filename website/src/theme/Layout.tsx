import React, { useEffect } from "react";
import DocusaurusLayout from "@theme-original/Layout";
import { useColorMode as useChakraColorMode } from "@chakra-ui/react";
import { useColorMode as useDocusaurusColorMode } from "@docusaurus/theme-common";

function ColorModeSync({ children }) {
  const { colorMode } = useDocusaurusColorMode();
  const { setColorMode } = useChakraColorMode();

  useEffect(() => {
    setColorMode(colorMode);
  }, [colorMode, setColorMode]);

  return <>{children}</>;
}

export default function LayoutWrapper({ children }) {
  return (
    <DocusaurusLayout>
      <ColorModeSync>{children}</ColorModeSync>
    </DocusaurusLayout>
  );
}
