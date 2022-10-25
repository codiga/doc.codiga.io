import React from "react";
import { Link } from "@chakra-ui/react";
import PropTypes from "prop-types";

const RoundedLink = ({ link, children }) => {
  return (
    <Link
      maxW="max-content"
      _hover={{
        color: "white",
        textDecoration: "none",
      }}
      pl={5}
      pr={5}
      pt={2}
      pb={2}
      w="auto"
      borderRadius="100px"
      background="linear-gradient(90deg, #F81C9D 0%, #FC8926 100%)"
      href={link}
    >
      <b>{children}</b>
    </Link>
  );
};

RoundedLink.propTypes = {
  link: PropTypes.string.isRequired,
};

export default RoundedLink;
