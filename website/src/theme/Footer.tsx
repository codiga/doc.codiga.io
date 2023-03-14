import React from "react";
import {
  Box,
  Text,
  Flex,
  Heading,
  Grid,
  Container,
  Image,
  VStack,
  Link,
  GridItem,
} from "@chakra-ui/react";

// @ts-ignore
import CodigaLogo from "@site/static/img/logo-header.png";
// @ts-ignore
import SOC2Image from "@site/static/img/footer/aicpa-soc4so.png";
// @ts-ignore
import G2Image from "@site/static/img/footer/g2.png";

const FOOTER_CODIGA_HUB_MENU = [
  {
    name: "Rulesets",
    path: "https://app.codiga.io/hub/rulesets",
  },
  {
    name: "Explore",
    path: "https://app.codiga.io/hub/explore",
  },
  {
    name: "Cookbooks",
    path: "https://app.codiga.io/hub/cookbooks",
  },
  {
    name: "Playground",
    path: "https://app.codiga.io/hub/playground",
  },
];

const FOOTER_CODIGA_MENU = [
  {
    name: "About Us",
    path: "https://www.codiga.io/about-us/",
  },
  {
    name: "Blog",
    path: "https://www.codiga.io/blog/",
  },
  {
    name: "Careers",
    path: "https://codiga.applytojob.com/",
  },
  {
    name: "Contact Us",
    path: "https://www.codiga.io/contact-us/",
  },
  {
    name: "Get Codiga",
    path: "https://www.codiga.io/get-codiga/",
  },
  {
    name: "Pricing",
    path: "https://www.codiga.io/pricing/",
  },
  // {
  //   name: "Book a Demo",
  //   path: "https://www.codiga.io/pricing/#contact",
  // },
];

const FOOTER_CODE_ANALYSIS_MENU = [
  {
    name: "VS Code",
    path: "https://www.codiga.io/static-code-analysis/vscode/",
  },
  {
    name: "JetBrains",
    path: "https://www.codiga.io/static-code-analysis/jetbrains/",
  },
  {
    name: "Visual Studio",
    path: "https://www.codiga.io/static-code-analysis/visualstudio/",
  },
  {
    name: "GitHub",
    path: "https://www.codiga.io/static-code-analysis/github/",
  },
  {
    name: "GitLab",
    path: "https://www.codiga.io/static-code-analysis/gitlab/",
  },
  {
    name: "Bitbucket",
    path: "https://www.codiga.io/static-code-analysis/bitbucket/",
  },
];

const FOOTER_CODE_SNIPPETS_MENU = [
  {
    name: "VS Code",
    path: "https://www.codiga.io/code-snippets/vscode/",
  },
  {
    name: "JetBrains",
    path: "https://www.codiga.io/code-snippets/jetbrains/",
  },
  {
    name: "Visual Studio",
    path: "https://www.codiga.io/code-snippets/visualstudio/",
  },
  {
    name: "Windows",
    path: "https://www.codiga.io/get-codiga/windows/",
  },
  {
    name: "Mac",
    path: "https://www.codiga.io/get-codiga/macos/",
  },
  {
    name: "Linux",
    path: "https://www.codiga.io/get-codiga/linux/",
  },
];

const FOOTER_SUPPORT_MENU = [
  {
    name: "Documentation",
    path: "https://doc.codiga.io/",
  },
  {
    name: "FAQs",
    path: "https://www.codiga.io/faq/",
  },
  {
    name: "API Access",
    path: "https://doc.codiga.io/docs/api/",
  },
];

const FOOTER_LEGAL_MENU = [
  {
    name: "Security",
    path: "https://www.codiga.io/security/",
  },
  {
    name: "Privacy Policy",
    path: "https://www.codiga.io/privacy-policy/",
  },
  {
    name: "Code Privacy",
    path: "https://www.codiga.io/code-privacy/",
  },
  {
    name: "Terms of Service",
    path: "https://www.codiga.io/terms-of-service/",
  },
];

const FOOTER_MENU = [
  { label: "Codiga Hub", links: FOOTER_CODIGA_HUB_MENU },
  { label: "Codiga", links: FOOTER_CODIGA_MENU },
  { label: "Code Analysis", links: FOOTER_CODE_ANALYSIS_MENU },
  { label: "Code Snippets", links: FOOTER_CODE_SNIPPETS_MENU },
  { label: "Support", links: FOOTER_SUPPORT_MENU },
  { label: "Legal", links: FOOTER_LEGAL_MENU },
];

const FOOTER_SOCIALS = [
  {
    // icon: <SocialIcons.GithubIcon color="inherit" />,
    path: "https://github.com/codiga",
    label: "codiga github",
  },
  {
    // icon: <SocialIcons.TwitterIcon color="inherit" />,
    path: "https://twitter.com/getcodiga",
    label: "codiga twitter",
  },
  {
    // icon: <SocialIcons.LinkedInIcon color="inherit" />,
    path: "https://www.linkedin.com/company/codigahq",
    label: "codiga linkedin",
  },
  {
    // icon: <SocialIcons.SlackIcon color="inherit" />,
    path: "https://join.slack.com/t/codigahq/shared_invite/zt-9hvmfwie-9BUVFwZDwvpIGlkHv2mzYQ",
    label: "codiga slack",
  },
  {
    // icon: <SocialIcons.DevToIcon color="inherit" />,
    path: "https://dev.to/codiga/",
    label: "codiga devto",
  },
  {
    // icon: <SocialIcons.YouTubeIcon color="inherit" />,
    path: "https://www.youtube.com/channel/UCbJIY9DBVajfTcRmhWgErqg",
    label: "codiga youtube",
  },
];

type VerticalMenuProps = {
  items: {
    name: string;
    path: string;
  }[];
};

function VerticalMenu({ items }: VerticalMenuProps) {
  return (
    <VStack
      as="ul"
      p={0}
      pt={2}
      spacing={2}
      listStyleType="none"
      alignItems="flex-start"
    >
      {items.map((item, index) => (
        <li key={item.name + index}>
          <Link
            isExternal
            href={item.path}
            color="base.onyx"
            fontSize="xs"
            lineHeight="20px"
            whiteSpace="nowrap"
            _dark={{
              color: "neutral.0",
            }}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </VStack>
  );
}

export default function Footer() {
  return (
    <Box
      as="footer"
      py={8}
      bg="neutral.25"
      _dark={{
        bg: "base.dark",
      }}
    >
      <Container as={VStack} maxW="container.xl" spacing={{ base: 12, md: 8 }}>
        <Image
          src={CodigaLogo}
          alt="Codiga Logo"
          boxSize={8}
          alignSelf="flex-start"
        />

        <Grid
          w="full"
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(6, 1fr)",
          }}
          gap={12}
        >
          {FOOTER_MENU.map(({ label, links }) => {
            return (
              <GridItem key={label}>
                <Heading
                  size="xs"
                  as="h6"
                  color="base.onyx"
                  _dark={{ color: "neutral.0" }}
                >
                  {label}
                </Heading>
                <VerticalMenu items={links} />
              </GridItem>
            );
          })}
        </Grid>

        <Flex
          w="full"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems="center"
          gridGap={10}
        >
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            alignItems="center"
            gridGap={2}
          >
            <Image src={SOC2Image} alt="soc-2 icon" boxSize={10} />
            <Text fontSize="xs" textAlign="center" m={0}>
              We are SOC-2 Compliance Certified
            </Text>
          </Flex>

          <Image
            src={G2Image}
            alt="G2 high performer medal"
            width="52px"
            height="67px"
          />
        </Flex>

        <Flex
          w="full"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems="center"
          gridGap={4}
        >
          <Flex gridGap={4}>
            {FOOTER_SOCIALS.map(({ path, label }) => {
              return (
                <Link
                  isExternal
                  key={path}
                  href={path}
                  d="flex"
                  justifyContent="center"
                  alignItems="center"
                  fontSize="md"
                  h="32px"
                  w="32px"
                  aria-label={label}
                >
                  {/* {icon} */}
                </Link>
              );
            })}
          </Flex>

          <Text fontSize="xs">Codiga – All rights reserved 2022.</Text>
        </Flex>
      </Container>
    </Box>
  );
}
