import { ComponentStyleConfig } from "@chakra-ui/react";
import { SystemStyleFunction } from "@chakra-ui/theme-tools";
import {
  primaryVariant as buttonPrimaryVariant,
  secondaryVariant as buttonSecondaryVariant,
  sizes as buttonSizes,
} from "./Button";

const primaryVariant: SystemStyleFunction = (props) => {
  return {
    ...buttonPrimaryVariant(props),
    display: "flex",
    alignItems: "center",
    gap: 2,
  };
};

const secondaryVariant: SystemStyleFunction = (props) => {
  return {
    ...buttonSecondaryVariant(props),
    _hover: { textDecoration: "none" },
  };
};

const variants = {
  primary: primaryVariant,
  secondary: secondaryVariant,
};

const Link: ComponentStyleConfig = {
  variants,
  sizes: buttonSizes,
  defaultProps: {
    variant: "solid",
  },
};

export default Link;
