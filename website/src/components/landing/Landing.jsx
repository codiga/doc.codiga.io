import React, { useEffect } from "react";
import DescriptionCards from "./DescriptionCards";
import Hero from "./Hero";
import { useColorMode } from "@chakra-ui/react";

const Landing = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  /**
   * This code block detects through the "data-theme" attribute mutation if the docusaurius theme was toggled and applies it to
   * chakra-ui
   * @TODO: Check if there's a better way to detect docusaurius theme changed and inject it to chakra
   */
  useEffect(() => {
    const baseElement = document.querySelector("html");
    const observer = new MutationObserver((mutationList) => {
      mutationList
        .filter((mutation) => mutation.attributeName === "data-theme")
        .forEach(() => {
          if (colorMode !== localStorage.getItem("theme")) {
            toggleColorMode();
          }
        });
    });
    var mutationConfig = { attributes: true };
    observer.observe(baseElement, mutationConfig);
  }, []);
  /**************/

  return (
    <div>
      <Hero />
      <DescriptionCards />
    </div>
  );
};

export default Landing;
