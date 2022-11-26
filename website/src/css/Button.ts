import { StyleObjectOrFn } from "@chakra-ui/react";
import { SystemStyleFunction } from "@chakra-ui/theme-tools";
import borderGradient from "./common";

const common = {
  borderRadius: "full",
  fontFamily: "heading",
  fontWeight: "bold",

  // Icon styles
  d: "flex",
  alignItems: "center",
  gap: 2,
};

export const primaryVariant: SystemStyleFunction = () => {
  return {
    ...common,
    color: "white",
    bgGradient: `linear(to-r, base.rose, base.orange)`,
    transition: "background 0.5s",

    _focus: {
      outline: "none",
      boxShadow: "none",
      bgGradient: `linear(to-r, base.rose, base.rose)`,
    },

    _hover: {
      color: "neutral.0",
      textDecoration: "none",
      bgGradient: `linear(to-r, base.rose, base.rose)`,

      // This is used to avoid hover on disabled state.
      // Existing Discussion in Chakra here: https://github.com/chakra-ui/chakra-ui/discussions/5211
      _disabled: {
        background: `neutral.75`,
      },
    },

    _active: {
      bgGradient: `linear(to-r, rose.75, rose.75)`,
    },

    _disabled: {
      background: `neutral.75`,
    },
  };
};

export const secondaryVariant: SystemStyleFunction = (props) => {
  return {
    ...borderGradient(props),
    ...common,
  };
};

export const sizes: { [size: string]: StyleObjectOrFn } = {
  lg: {
    w: "fit-content",
    fontSize: "2xl",
    lineHeight: "30px",
    py: "4",
    px: "12",
  },
  md: {
    w: "fit-content",
    fontSize: "md",
    lineHeight: "20px",
    py: "3",
    px: "8",
  },
  sm: {
    w: "fit-content",
    fontSize: "xs",
    lineHeight: "15px",
    py: "2",
    px: "6",
  },
  xs: {
    w: "fit-content",
    fontSize: "xs",
    lineHeight: "15px",
    py: "2",
    px: "6",
  },
};
