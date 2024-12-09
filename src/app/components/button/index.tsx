import { Button } from "@chakra-ui/react";

const ButtonGlobal = ({ children }: any) => {
  return (
    <Button
      w="auto"
      p='0px 10px'
      bg="white"
      color="black"
      fontWeight="600"
      borderRadius='9px'
      fontSize={{base: 'sm', md: 'md'}}
    >
      {children}
    </Button>
  );
};

export default ButtonGlobal;
