import { Box, Flex, Text } from "@chakra-ui/react";
import BadgePartneo from "../badge/indeex";
import Image from "next/image";

const TestimonialCard = ({ textBadge, avatar, name, descripcion }: any) => {
  return (
    <Box
      display="flex"
      color="white"
      borderRadius="lg"
      p={6}
      boxShadow="lg"
      maxW="592px"
      border="1px solid rgba(255, 255, 255, 0.1)"
      position="relative"
    >
      <Flex align="center" gap={4} flexDir={{ base: "column", md: "row" }}>
        {/* Imagen */}
        <Box
          w="100%"
          maxW="200px"
          borderRadius="full"
          overflow="hidden"
          border="3px solid  #262626"
        >
          <Image
            src={avatar}
            alt="Imagen del avatar"
            width={200}
            height={200}
          />
        </Box>
        {/* Información */}
        <Box flex="1">
          <Flex align="center" mb={2}>
            <Text fontSize="lg" fontWeight="bold" mr={2}>
              {name}
            </Text>
          </Flex>
          <Text fontSize="sm" opacity="0.8">
            {descripcion}
          </Text>
        </Box>
      </Flex>

      {/* Botón */}
      <Flex
        justify="flex-end"
        mt={4}
        position="absolute"
        bottom={{base: "-13px", md: "-20px"}}
        right={5}
      >
        <BadgePartneo>{textBadge}</BadgePartneo>
      </Flex>
    </Box>
  );
};

export default TestimonialCard;
