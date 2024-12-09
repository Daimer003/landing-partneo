import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const LogoNav = () => {
  return (
    <Link href="/" scroll={false}>
      <Box w="100%" h='31px'>
        <Image
          src="/assets/logo.webp"
          alt="Logo de partneos"
          width={160}
          height={100}
          style={{
            width: "100%"
          }}
        />
      </Box>
    </Link>
  );
};

export default LogoNav;
