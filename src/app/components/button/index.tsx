import { Button } from "@chakra-ui/react";
import Link from "next/link";

const ButtonGlobal = ({ children, props }: any) => {
  return (
    <Link
      href="https://wa.me/573206219529?text=Hi%2C%20I%E2%80%99d%20love%20to%20start%20my%20project%20with%20Partneo%21"
      passHref
      target="_blank"
    >
      <Button
        w="auto"
        p="0px 10px"
        bg="white"
        color="black"
        fontWeight="600"
        borderRadius="9px"
        fontSize={{ base: "sm", md: "md" }}
        {...props}
      >
        {children}
      </Button>
    </Link>
  );
};

export default ButtonGlobal;
