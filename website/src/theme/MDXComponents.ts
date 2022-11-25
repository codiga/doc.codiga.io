import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import Card from "../components/docs/Card";
import { Heading, Link, SimpleGrid, Text } from "@chakra-ui/react";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Card,
  Heading,
  Link,
  SimpleGrid,
  Text,
};
