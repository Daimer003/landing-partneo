import { Button } from "@chakra-ui/react";

const ButtonGlobal = ({ children }: any) => {
  return (
    <Button
      w="100%"
      maxW="122px"
      p={1}
      bg="white"
      color="black"
      fontWeight="600"
      borderRadius='9px'
    >
      {children}
    </Button>
  );
};

export default ButtonGlobal;
