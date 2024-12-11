"use client";
import { Box, Skeleton } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LogoNav = () => {
  const [alreadyLoaded, setAlreadyLoaded] = useState<boolean>(true);

  return (
    <Link href="/" scroll={false}>
      <Skeleton borderRadius='20px 0 20px 0' isLoaded={!alreadyLoaded} startColor='#141414' endColor='#2a2a2a' >
        <Box w="100%" minW='192px' h="31px">
          <Image
            src="/assets/logo.webp"
            alt="Logo de partneos"
            width={130}
            height={100}
            onLoad={() => setAlreadyLoaded(false)}
            style={{ width: "100%"}}
          />
        </Box>
      </Skeleton>
    </Link>
  );
};

export default LogoNav;
