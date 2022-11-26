import { SystemStyleFunction } from "@chakra-ui/theme-tools";
import colors from "./colors";

const bgLight = `0 1000px 0 ${colors.neutral[0]} inset`;
const bgLightDisabled = `0 1000px 0 ${colors.neutral[25]} inset`;
const bgDark = `0 1000px 0 ${colors.base.dark} inset`;

const borderGradient: SystemStyleFunction = (props) => {
  return {
    border: "1px solid transparent",
    boxShadow: bgLight,
    bgGradient: "linear(to-r, base.rose, base.orange)",
    backgroundOrigin: "border-box",

    _active: {
      boxShadow: `0 1000px 0 ${colors.rose[25]} inset`,
    },

    _hover: {
      bgGradient: "linear(to-r, base.orange, base.orange)",
    },

    _focus: {
      boxShadow: `${bgLight}, ${props.theme.shadows.outline}`,
    },

    _disabled: {
      color: "neutral.50",
      borderColor: "neutral.50",
      boxShadow: bgLightDisabled,

      _hover: {
        color: "neutral.50",
      },

      _active: {
        boxShadow: bgLightDisabled,
      },
    },

    _dark: {
      color: "neutral.0",
      boxShadow: bgDark,

      _hover: {
        boxShadow: `0 1000px 0 ${colors.base.onyx} inset`,

        _active: {
          boxShadow: `0 1000px 0 ${colors.neutral[100]} inset`,
        },
      },

      _focus: {
        boxShadow: `${bgDark}, ${props.theme.shadows.outline}`,
      },

      _disabled: {
        boxShadow: bgDark,

        _hover: {
          _active: {
            boxShadow: bgDark,
          },
        },
      },
    },
  };
};

export default borderGradient;
