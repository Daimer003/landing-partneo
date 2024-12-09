import { Box, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const TextComplement = ({ children, brother }: any) => {
  return (
    <Stack w="100%" position="relative" alignItems="center">
      <Box w="100%" maxW="815px" position="absolute" zIndex={0}>
        <Image
          src={brother}
          alt="Imagen title"
          width={814}
          height={200}
          style={{
            maskImage: "linear-gradient(black 40%, transparent)",
          }}
        />
      </Box>
      <Text
        fontSize={{base: "44px", md: "64px"}}
        lineHeight="60px"
        color="white"
        textAlign="center"
        textShadow="1px 1px 20px rgba(255, 255, 255, 0.7)"
        zIndex={10}
        mt={{base:12, md: 120}}
      >
        {children}
      </Text>
    </Stack>
  );
};

export default TextComplement;
