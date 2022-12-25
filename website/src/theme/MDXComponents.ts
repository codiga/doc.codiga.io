import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import Card from "../components/docs/Card";
import DocLink from "../components/docs/Link";
import { Heading, SimpleGrid, Text, Link } from "@chakra-ui/react";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Card,
  Heading,
  DocLink,
  SimpleGrid,
  Text,
  Link,
};
