import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      color="white"
      px={3}
      backgroundImage="/assets/footer-bg.webp"
      backgroundPosition="center"
      mt={20}
      mb={10}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
      >
        {/* Left Section: Title */}
        <Box flex="1" mb={{ base: 8, md: 0 }}>
          <Text
            fontSize="3xl"
            fontWeight="bold"
            mb={2}
            textShadow="1px 1px 20px rgba(255, 255, 255, 0.7)"
          >
            Our Tech Stack
          </Text>
          <Text fontSize="md" opacity="0.8">
            We leverage the most advanced technologies to bring your vision to
            life.
          </Text>
        </Box>

        {/* Right Section: Grid of Icons */}
        <Grid templateColumns="repeat(4, 1fr)" gap={6} flex="2">
          {/* Each Icon */}
          <GridItem textAlign="center">
            <Text fontSize="sm" mt={2}>
              Docker
            </Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text
              fontSize="sm"
              mt={2}
              textShadow="1px 1px 20px rgba(255, 255, 255, 0.7)"
            >
              Discord
            </Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text
              fontSize="sm"
              mt={2}
              textShadow="1px 1px 20px rgba(255, 255, 255, 0.7)"
            >
              Midjourney
            </Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text
              fontSize="sm"
              mt={2}
              textShadow="1px 1px 20px rgba(255, 255, 255, 0.7)"
            >
              Solidity
            </Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text
              fontSize="sm"
              mt={2}
              textShadow="1px 1px 20px rgba(255, 255, 255, 0.7)"
            >
              Figma
            </Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text
              fontSize="sm"
              mt={2}
              textShadow="1px 1px 20px rgba(255, 255, 255, 0.7)"
            >
              Unity
            </Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text
              fontSize="sm"
              mt={2}
              textShadow="1px 1px 20px rgba(255, 255, 255, 0.7)"
            >
              Adonis.JS
            </Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text
              fontSize="sm"
              mt={2}
              textShadow="1px 1px 20px rgba(255, 255, 255, 0.7)"
            >
              React.JS
            </Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text
              fontSize="sm"
              mt={2}
              textShadow="1px 1px 20px rgba(255, 255, 255, 0.7)"
            >
              Node.JS
            </Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text
              fontSize="sm"
              mt={2}
              textShadow="1px 1px 20px rgba(255, 255, 255, 0.7)"
            >
              Rust
            </Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text
              fontSize="sm"
              mt={2}
              textShadow="1px 1px 20px rgba(255, 255, 255, 0.7)"
            >
              Polygon
            </Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text
              fontSize="sm"
              mt={2}
              textShadow="1px 1px 20px rgba(255, 255, 255, 0.7)"
            >
              BSC
            </Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text
              fontSize="sm"
              mt={2}
              textShadow="1px 1px 20px rgba(255, 255, 255, 0.7)"
            >
              Gitlab
            </Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text
              fontSize="sm"
              mt={2}
              textShadow="1px 1px 20px rgba(255, 255, 255, 0.7)"
            >
              AWS
            </Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text
              fontSize="sm"
              mt={2}
              textShadow="1px 1px 20px rgba(255, 255, 255, 0.7)"
            >
              PostgreSQL
            </Text>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
};

export default Footer;
