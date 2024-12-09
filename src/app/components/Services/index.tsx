import { IconLaunch, IconMore } from "@/Utils/icons";
import { Box, Flex, Text } from "@chakra-ui/react";

const Services = () => {
  return (
    <Box
      display="fles"
      justifyContent="center"
      color="white"
      py={10}
      px={5}
      mt="48px"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        gap={10}
        width="100%"
        maxW="920px"
      >
        {/* Custom Software */}
        <Flex direction="column" maxW="400px">
          <IconMore size="28px" />
          <Flex mb={4}>
            <Text fontSize="sm">Launch MVP in 68 Days</Text>
          </Flex>
          <Text fontSize="4xl" fontWeight="500">
            Custom Software
          </Text>
          <Text fontSize="sm" mt={2} maxW="436px" color="#656565">
            Build solutions tailored to your business needs. Scalable,
            efficient, and designed to help you grow.
          </Text>
        </Flex>

        {/* Dedicated Teams */}
        <Flex direction="column" maxW="400px">
        <IconLaunch size="28px" />
          <Flex mb={4}>
            <Text fontSize="sm">Best Long-Term Solution</Text>
          </Flex>
          <Text fontSize="4xl" fontWeight="500">
            Dedicated Teams
          </Text>
          <Text fontSize="sm" mt={2} maxW="436px" color="#656565">
            Expand your capacity with expert teams focused on delivering results
            for your projects.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Services;
