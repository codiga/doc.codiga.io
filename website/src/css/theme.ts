import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import Link from "./Link";

const theme = {
  styles: {
    global: {
      body: {
        bg: "",
      },
    },
  },
  colors,
  components: {
    Link,
  },
};

export default extendTheme(theme);
