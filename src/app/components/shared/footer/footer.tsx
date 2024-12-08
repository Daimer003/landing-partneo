import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box p={2}>
      <Text as="span" opacity={0.4} fontSize="sm" color="white">
        © {new Date().getFullYear()} . Our tech Stack
      </Text>
    </Box>
  );
};

export default Footer;
