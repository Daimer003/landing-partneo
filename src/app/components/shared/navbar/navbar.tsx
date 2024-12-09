"use client";
import { Box, HStack, Spacer } from "@chakra-ui/react";
import Logo from "../logo";
import ButtonGlobal from "../../button";
import Link from "next/link";

interface LinkItemProps {
  href: string;
  path: string;
  target?: string;
  children: React.ReactNode;
  props?: any;
}

const LinkItem = ({ href, path, target, children }: LinkItemProps) => {
  return (
    <Link href={href} passHref target={target}>
      <Box p={2} gap="5px" color="white" bg="none" fontWeight="500">
        {children}
      </Box>
    </Link>
  );
};

const Navbar = () => {
  return (
    <Box
      as="nav"
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      maxW="1440px"
      height="80px"
      bg="#00000095"
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={99}
      borderBottom="1px solid #201f1f79"
      position="fixed"
      p="0 16px"
    >
      <HStack
        display={{ base: "none", lg: "flex" }}
        spaceX={3}
        bg="transparent"
      >
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

      <Spacer bg="transparent" />

      <HStack gap={5} align="center">
        <ButtonGlobal>Contact Us</ButtonGlobal>
        <Logo />
      </HStack>
    </Box>
  );
};

export default Navbar;
