"use client";
import { Box, HStack, Spacer } from "@chakra-ui/react";
import Logo from "../logo";
import ButtonGlobal from "../../button";
import Link from "next/link";
import MobileMenu from "./mobileMenu";

interface LinkItemProps {
  href: string;
  path: string;
  target?: string;
  children: React.ReactNode;
  props?: any;
}

const LinkItem = ({ href, target, children }: LinkItemProps) => {
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
      top={0}
      bg="#00000095"
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={99}
      borderBottom="1px solid #201f1f79"
      position="fixed"
      p="0 16px"
    >
      <MobileMenu />

      <HStack display={{ base: "none", lg: "flex" }} bg="transparent">
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
