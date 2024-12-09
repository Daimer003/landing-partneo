import { Text } from "@chakra-ui/react";

const Paragrapth = ({ children }: any) => {
  return (
    <Text
      as="h1"
      fontSize={{base: "16px",md: "20px"}}
      lineHeight="20px"
      color="#656565"
      textAlign="center"
    >
      {children}
    </Text>
  );
};

export default Paragrapth;
