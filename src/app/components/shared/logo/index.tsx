"use client";
import { Box, Skeleton } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LogoNav = () => {
  const [alreadyLoaded, setAlreadyLoaded] = useState<boolean>(true);

  return (
    <Link href="/" scroll={false}>
      <Skeleton loading={alreadyLoaded}>
        <Box w="100%" minW='192px' h="31px">
          <Image
            src="/assets/logo.webp"
            alt="Logo de partneos"
            width={160}
            height={100}
            onLoad={() => setAlreadyLoaded(false)}
            style={{
              width: "100%",

            }}
          />
        </Box>
      </Skeleton>
    </Link>
  );
};

export default LogoNav;
