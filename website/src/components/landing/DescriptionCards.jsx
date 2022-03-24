import React from "react";
import {
  Flex,
  VStack,
  Grid,
  GridItem,
  Heading,
  Text,
  Link,
} from "@chakra-ui/layout";
import CodeAnalysisImageUrl from "@site/static/img/landing/code_analysis.png";
import CodingAssistantImageUrl from "@site/static/img/landing/coding_assistant.png";
import Integrations from "@site/static/img/landing/integrations.png";
import BitbucketLogo from "@site/static/img/logo/BitbucketLogo.svg";
import VSCodeLogo from "@site/static/img/logo/VSCodeLogo.svg";
import ChromeLogo from "@site/static/img/logo/ChromeLogo.svg";
import IntelliJLogo from "@site/static/img/logo/IntelliJLogo.svg";
import GithubLogo from "@site/static/img/logo/GithubLogo.svg";
import GitlabLogo from "@site/static/img/logo/GitlabLogo.svg";

import { Image } from "@chakra-ui/image";
import { useColorMode } from "@chakra-ui/color-mode";
import RoundedLink from "./RoundedLink";
import { useMediaQuery } from '@chakra-ui/react'

const DescriptionCards = () => {
  const { colorMode } = useColorMode();
  const [isLargerThan780] = useMediaQuery('(min-width: 780px)')

  const cardBg = colorMode === "dark" ? "#242526" : "white";
  return (
    <>
      {isLargerThan780 ? (
        <Flex
          maxW="100%"
          m="auto"
          minH="40vh"
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <VStack
            m={3}
            overflow="hidden"
            alignItems="flex-start"
            boxShadow="xl"
            bg={cardBg}
            borderRadius="lg"
          >
            <Grid templateRows="repeat(1, 1fr)">
              <GridItem rowSpan={1} colSpan={1} bg="tomato">
                <Image src={CodingAssistantImageUrl} />
              </GridItem>
              <GridItem p={5} rowSpan={1}>
                <VStack align="stretch" spacing={5}>
                  <Heading size="md">Coding Assistant</Heading>
                  <Text>
                    Our Coding Assistant is available anywhere. You can read or
                    write code by installing a plugin in your developer environment.
                  </Text>
                  <RoundedLink link="/docs/coding-assistant/coding-assistant-getting-started/">
                    Get Started
                  </RoundedLink>
                </VStack>
              </GridItem>
            </Grid>
          </VStack>
          <VStack
            m={3}
            overflow="hidden"
            alignItems="flex-start"
            boxShadow="xl"
            bg={cardBg}
            borderRadius="lg"
          >
            <Grid templateRows="repeat(1, 1fr)">
              <GridItem rowSpan={1}>
                <Image src={CodeAnalysisImageUrl} />
              </GridItem>
              <GridItem p={5} rowSpan={1}>
                <VStack align="stretch" spacing={5}>
                  <Heading size="md">Code Analysis</Heading>
                  <Text>
                    Get protection at every step. From every Commit and Pull Request
                    we surface the most pernicious defects on your projects.
                  </Text>
                  <RoundedLink link="/docs/getting-started/">
                    Get Started
                  </RoundedLink>
                </VStack>
              </GridItem>
            </Grid>
          </VStack>
          <VStack
            m={3}
            overflow="hidden"
            alignItems="flex-start"
            boxShadow="xl"
            bg={cardBg}
            borderRadius="lg"
          >
            <Grid templateRows="repeat(1, 1fr)">
              <GridItem rowSpan={1}>
                <Image src={Integrations} />
              </GridItem>
              <GridItem p={5} rowSpan={1}>
                <VStack align="stretch" spacing={5}>
                  <Heading size="md">Integrations</Heading>
                  <Grid
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(2, 1fr)"
                    gap={1}
                  >
                    <GridItem>
                      <Link
                        maxW="max-content"
                        _hover={{
                          textDecoration: "none",
                        }}
                        href="https://codiga.io/get-codiga/github/"
                        isExternal
                      >
                        <Flex>
                          <GithubLogo />
                          <Text ml={1}>
                            <b>GitHub</b>
                          </Text>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link
                        maxW="max-content"
                        _hover={{
                          textDecoration: "none",
                        }}
                        href="https://codiga.io/get-codiga/jetbrains/"
                        isExternal
                      >
                        <Flex>
                          <IntelliJLogo />
                          <Text ml={1}>
                            <b>JetBrains</b>
                          </Text>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link
                        maxW="max-content"
                        _hover={{
                          textDecoration: "none",
                        }}
                        href="https://codiga.io/get-codiga/gitlab/"
                        isExternal
                      >
                        <Flex>
                          <GitlabLogo />
                          <Text ml={1}>
                            <b>Gitlab</b>
                          </Text>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link
                        maxW="max-content"
                        _hover={{
                          textDecoration: "none",
                        }}
                        href="https://codiga.io/get-codiga/chrome/"
                        isExternal
                      >
                        <Flex>
                          <ChromeLogo />
                          <Text ml={1}>
                            <b>Chrome</b>
                          </Text>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link
                        maxW="max-content"
                        _hover={{
                          textDecoration: "none",
                        }}
                        href="https://codiga.io/get-codiga/bitbucket/"
                        isExternal
                      >
                        <Flex>
                          <BitbucketLogo />
                          <Text ml={1}>
                            <b>Bitbucket</b>
                          </Text>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link
                        maxW="max-content"
                        _hover={{
                          textDecoration: "none",
                        }}
                        href="https://codiga.io/get-codiga/vscode/"
                        bg={"transparent"}
                        isExternal
                      >
                        <Flex bg={"transparent"}>
                          <VSCodeLogo />
                          <Text ml={1}>
                            <b>VSCode</b>
                          </Text>
                        </Flex>
                      </Link>
                    </GridItem>
                  </Grid>
                </VStack>
              </GridItem>
            </Grid>
          </VStack>
        </Flex>
      ) : (
        <Flex
          maxW="80%"
          m="auto"
          minH="auto"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <VStack
            m={3}
            overflow="hidden"
            alignItems="flex-start"
            boxShadow="xl"
            bg={cardBg}
            borderRadius="lg"
          >
            <Grid templateRows="repeat(1, 1fr)">
              <GridItem rowSpan={1} colSpan={1} bg="tomato">
                <Image src={CodingAssistantImageUrl} />
              </GridItem>
              <GridItem p={5} rowSpan={1}>
                <VStack align="stretch" spacing={5}>
                  <Heading size="md">Coding Assistant</Heading>
                  <Text>
                    Our Coding Assistant is available anywhere. You can read or
                    write code by installing a plugin in your developer environment.
                  </Text>
                  <RoundedLink link="/docs/coding-assistant/coding-assistant-getting-started/">
                    Get Started
                  </RoundedLink>
                </VStack>
              </GridItem>
            </Grid>
          </VStack>
          <VStack
            m={3}
            overflow="hidden"
            alignItems="flex-start"
            boxShadow="xl"
            bg={cardBg}
            borderRadius="lg"
          >
            <Grid templateRows="repeat(1, 1fr)">
              <GridItem rowSpan={1}>
                <Image src={CodeAnalysisImageUrl} />
              </GridItem>
              <GridItem p={5} rowSpan={1}>
                <VStack align="stretch" spacing={5}>
                  <Heading size="md">Code Analysis</Heading>
                  <Text>
                    Get protection at every step. From every Commit and Pull Request
                    we surface the most pernicious defects on your projects.
                  </Text>
                  <RoundedLink link="/docs/getting-started/">
                    Get Started
                  </RoundedLink>
                </VStack>
              </GridItem>
            </Grid>
          </VStack>
          <VStack
            m={3}
            overflow="hidden"
            alignItems="flex-start"
            boxShadow="xl"
            bg={cardBg}
            borderRadius="lg"
          >
            <Grid templateRows="repeat(1, 1fr)">
              <GridItem rowSpan={1}>
                <Image src={Integrations} />
              </GridItem>
              <GridItem p={5} rowSpan={1}>
                <VStack align="stretch" spacing={5}>
                  <Heading size="md">Integrations</Heading>
                  <Grid
                    templateRows="repeat(3, 1fr)"
                    templateColumns="repeat(2, 1fr)"
                    gap={4}
                  >
                    <GridItem>
                      <Link
                        maxW="max-content"
                        _hover={{
                          textDecoration: "none",
                        }}
                        href="https://codiga.io/get-codiga/github/"
                        isExternal
                      >
                        <Flex>
                          <GithubLogo />
                          <Text ml={1}>
                            <b>GitHub</b>
                          </Text>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link
                        maxW="max-content"
                        _hover={{
                          textDecoration: "none",
                        }}
                        href="https://codiga.io/get-codiga/jetbrains/"
                        isExternal
                      >
                        <Flex>
                          <IntelliJLogo />
                          <Text ml={1}>
                            <b>JetBrains</b>
                          </Text>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link
                        maxW="max-content"
                        _hover={{
                          textDecoration: "none",
                        }}
                        href="https://codiga.io/get-codiga/gitlab/"
                        isExternal
                      >
                        <Flex>
                          <GitlabLogo />
                          <Text ml={1}>
                            <b>Gitlab</b>
                          </Text>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link
                        maxW="max-content"
                        _hover={{
                          textDecoration: "none",
                        }}
                        href="https://codiga.io/get-codiga/chrome/"
                        isExternal
                      >
                        <Flex>
                          <ChromeLogo />
                          <Text ml={1}>
                            <b>Chrome</b>
                          </Text>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link
                        maxW="max-content"
                        _hover={{
                          textDecoration: "none",
                        }}
                        href="https://codiga.io/get-codiga/bitbucket/"
                        isExternal
                      >
                        <Flex>
                          <BitbucketLogo />
                          <Text ml={1}>
                            <b>Bitbucket</b>
                          </Text>
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem>
                      <Link
                        maxW="max-content"
                        _hover={{
                          textDecoration: "none",
                        }}
                        href="https://codiga.io/get-codiga/vscode/"
                        bg={"transparent"}
                        isExternal
                      >
                        <Flex bg={"transparent"}>
                          <VSCodeLogo />
                          <Text ml={1}>
                            <b>VSCode</b>
                          </Text>
                        </Flex>
                      </Link>
                    </GridItem>
                  </Grid>
                </VStack>
              </GridItem>
            </Grid>
          </VStack>
        </Flex>
      )}
    </>
  );
};

export default DescriptionCards;
