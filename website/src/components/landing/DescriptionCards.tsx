import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import DocusaurusLink from "@docusaurus/Link";

// @ts-ignore
import CodeAnalysisImage from "@site/static/img/landing/code_analysis.png";
// @ts-ignore
import CustomRulesImage from "@site/static/img/landing/custom_rules.png";
// @ts-ignore
import CodeSnippetsImage from "@site/static/img/landing/code_snippets.png";

function DescriptionCards() {
  return (
    <Box as="section" bg="white" _dark={{ bg: "neutral.100" }}>
      <Container
        as={SimpleGrid}
        columns={{ base: 1, md: 3 }}
        py={10}
        spacing={8}
        maxW="container.xl"
      >
        <Flex
          flexDir="column"
          p={6}
          gridGap={6}
          boxShadow="md"
          borderRadius="lg"
          bg="white"
          _dark={{ bg: "base.dark" }}
        >
          <Image
            src={CustomRulesImage}
            alt="Codiga custom rule test case demo"
          />
          <Flex flexDir="column" gridGap={4} flexGrow={2}>
            <Heading size="lg">Custom Rules</Heading>
            <Text fontSize="sm" lineHeight="26px" flexGrow={2}>
              Creating a code analysis rule from your browser or favorite IDE
              takes less than 5 minutes. New rules are instantly usable in your
              IDE or CI/CD pipeline.
            </Text>
            <Link
              as={DocusaurusLink}
              size="md"
              variant="primary"
              href="docs/rosie/rosie-introduction/"
            >
              Learn More
            </Link>
          </Flex>
        </Flex>
        <Flex
          flexDir="column"
          p={6}
          gridGap={6}
          boxShadow="md"
          borderRadius="lg"
          bg="white"
          _dark={{ bg: "base.dark" }}
        >
          <Image
            src={CodeAnalysisImage}
            alt="Codiga code analysis annotation demo"
          />
          <Flex flexDir="column" gridGap={4} flexGrow={2}>
            <Heading size="lg">Static Code Analysis</Heading>
            <Text fontSize="sm" lineHeight="26px" flexGrow={2}>
              Codiga works in your CI/CD pipeline and reports error at every
              code changes in seconds. Codiga static code analysis works on VS
              Code, JetBrains, VisualStudio, GitHub, Gitlab and Bitbucket.
            </Text>
            <Link
              as={DocusaurusLink}
              size="md"
              variant="primary"
              href="docs/getting-started/"
            >
              Learn More
            </Link>
          </Flex>
        </Flex>
        <Flex
          flexDir="column"
          p={6}
          gridGap={6}
          boxShadow="md"
          borderRadius="lg"
          bg="white"
          _dark={{ bg: "base.dark" }}
        >
          <Image
            src={CodeSnippetsImage}
            alt="Codiga create code snippet from your IDE demo"
          />
          <Flex flexDir="column" gridGap={4} flexGrow={2}>
            <Heading size="lg">Code Snippets</Heading>
            <Text fontSize="sm" lineHeight="26px" flexGrow={2}>
              Create, use and share smart code snippets with your team and all
              developers. Create and find code snippets from VS Code, JetBrains,
              Visual Studio and Chrome.
            </Text>
            <Link
              as={DocusaurusLink}
              size="md"
              variant="primary"
              href="docs/coding-assistant/coding-assistant-getting-started/"
            >
              Learn More
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default DescriptionCards;
