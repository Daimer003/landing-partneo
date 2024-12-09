"use client";
import { Box, HStack, Spacer } from "@chakra-ui/react";
import Logo from "../logo";
import NextLink from "next/link";
import ButtonGlobal from "../../button";

interface LinkItemProps {
  href: string;
  path: string;
  target?: string;
  children: React.ReactNode;
  props?: any;
}

const LinkItem = ({
  href,
  path,
  target,
  children,
  ...props
}: LinkItemProps) => {
  return (
    <NextLink href={href} passHref target={target}>
      <Box
        p={2}
        width="100%"
        display="inline-flex"
        alignItems="center"
        gap="5px"
        color="white"
        {...props}
      >
        {children}
      </Box>
    </NextLink>
  );
};

const Navbar = (props: any) => {
  return (
    <Box
      display="flex"
      width="100%"
      alignItems="center"
      padding="24px"
      boxSizing="border-box"
      boxSize="border-box"
      bg="#00000095"
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      borderBottom="1px solid #201f1f79 "
    >
      <HStack w="100%" display={{ base: "none", lg: "flex" }} spaceX={3}>
        <LinkItem href="" path="">
          About Us
        </LinkItem>
        <LinkItem href="" path="">
          Services
        </LinkItem>
        <LinkItem href="" path="">
          Portfolio
        </LinkItem>
        <LinkItem href="" path="">
          Clients
        </LinkItem>
      </HStack>

      <Spacer />

      <HStack justifyContent="end" w="100%" gap={5}>
        <LinkItem
          path=""
          href="https://api.whatsapp.com/send/?phone=573206219529&text=Hi%2C+I%E2%80%99d+love+to+start+my+project+with+Partneo%21&type=phone_number&app_absent=0"
          target="_blank"
        >
          <ButtonGlobal>Contact Us</ButtonGlobal>
        </LinkItem>
        <Logo />
      </HStack>
    </Box>
  );
};

export default Navbar;
