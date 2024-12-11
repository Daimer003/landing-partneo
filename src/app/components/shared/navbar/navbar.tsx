"use client";
import { Box, HStack, Spacer } from "@chakra-ui/react";
import Logo from "../logo";
import ButtonGlobal from "../../button";
import MobileMenu from "./mobileMenu";

interface LinkItemProps {
  id: string; // Cambiado de href a id
  children: React.ReactNode;
  onClick?: () => void;
}

const LinkItem = ({  children, onClick }: LinkItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) onClick();
  };

  return (
    <Box
      as="button"
      onClick={handleClick}
      p={2}
      gap="5px"
      color="white"
      bg="none"
      fontWeight="500"
    >
      {children}
    </Box>
  );
};

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

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
        <LinkItem id="header" onClick={() => scrollToSection("header")}>
          About Us
        </LinkItem>
        <LinkItem id="services" onClick={() => scrollToSection("services")}>
          Services
        </LinkItem>
        <LinkItem id="projects" onClick={() => scrollToSection("projects")}>
          Portfolio
        </LinkItem>
        <LinkItem id="partners" onClick={() => scrollToSection("partners")}>
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