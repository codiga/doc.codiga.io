import React from "react";
import { forwardRef, Link } from "@chakra-ui/react";
import DocusaurusLink from "@docusaurus/Link";

function DocLink({ isExternal, ...props }, ref) {
  if (isExternal) {
    return <Link ref={ref} isExternal {...props} />;
  }

  return <Link as={DocusaurusLink} {...props} />;
}

export default forwardRef(DocLink);
