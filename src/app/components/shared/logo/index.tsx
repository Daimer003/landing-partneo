import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const LogoNav = () => {
  return (
    <Link href="/" scroll={false}>
      <Box w="100%" maxW="249px">
        <Image
          src="/assets/logo.webp"
          alt="Logo de partneos"
          width={300}
          height={100}
        />
      </Box>
    </Link>
  );
};

export default LogoNav;
