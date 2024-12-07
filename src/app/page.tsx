import { Box, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      as="main"
      w="100%"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="6xl" color="white">
        {" "}
        Partneo{" "}
      </Text>
    </Box>
  );
}
