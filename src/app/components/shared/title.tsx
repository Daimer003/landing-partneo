import { Text } from "@chakra-ui/react";

const Title = ({ children }: any) => {
  return (
    <Text
      as="h1"
      fontSize={{base: "44px",md: "64px"}}
      lineHeight={{base: "44px",md: "60px"}}
      color="white"
      textShadow="1px 1px 20px rgba(255, 255, 255, 0.7)"
    >
      {children}
    </Text>
  );
};

export default Title;
