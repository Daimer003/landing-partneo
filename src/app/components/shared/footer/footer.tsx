import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

const technology = [
  { src: "/assets/tecnology/1.webp", alt: "tecnology1" },
  { src: "/assets/tecnology/2.webp", alt: "tecnology2" },
  { src: "/assets/tecnology/3.webp", alt: "tecnology3" },
  { src: "/assets/tecnology/4.webp", alt: "tecnology4" },
  { src: "/assets/tecnology/5.webp", alt: "tecnology5" },
  { src: "/assets/tecnology/6.webp", alt: "tecnology6" },
  { src: "/assets/tecnology/7.webp", alt: "tecnology7" },
  { src: "/assets/tecnology/8.webp", alt: "tecnology8" },
  { src: "/assets/tecnology/10.webp", alt: "tecnology9" },
  { src: "/assets/tecnology/11.webp", alt: "tecnology10" },
  { src: "/assets/tecnology/12.webp", alt: "tecnology11" },
  { src: "/assets/tecnology/13.webp", alt: "tecnology12" },
  { src: "/assets/tecnology/14.webp", alt: "tecnology13" },
  { src: "/assets/tecnology/15.webp", alt: "tecnology14" },
  { src: "/assets/tecnology/16.webp", alt: "tecnology15" },
  { src: "/assets/tecnology/17.webp", alt: "tecnology16" },
  { src: "/assets/tecnology/18.webp", alt: "tecnology17" },
];

const Footer = () => {
  return (
    <Box
      color="white"
      px={3}
      backgroundImage="/assets/footer-bg.webp"
      backgroundPosition="center"
      mt={20}
      mb={10}
      position="relative"
      overflow="hidden"
      p={3}
    >
      <Box
        display="flex"
        w="100%"
        position="absolute"
        zIndex={0}
        top={0}
        left={0}
      >
        <Image
          src="/assets/footer-bg.webp"
          alt="Logo de las technology"
          width={300}
          height={300}
          style={{
            width: "100%",
            filter: "grayscale(100%)", // Escala de grises
            opacity: "20%",
            maskImage: "linear-gradient(to right, transparent, black, black, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black, black, transparent)", 
          }}
        />
      </Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        maxW="1200px"
        mx="auto"
        gap={5}
      >
        {/* Left Section: Title */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flex="1"
          mb={{ base: 8, md: 0 }}
          position="relative"
        >
          <VStack zIndex={60} top={0}>
            <Text
              fontSize={{base: "3xl", md: "6xl"}}
              textAlign={{base: "center", md: "start"}}

              fontWeight="bold"
              mb={2}
              textShadow="1px 1px 20px rgba(255, 255, 255, 0.7)"
              zIndex={60}
            >
              Our Tech Stack
            </Text>
            <Text fontSize="md" opacity="0.8">
              We leverage the most advanced technologies to bring your vision to
              life.
            </Text>
          </VStack>
        </Box>

        {/* Right Section: Grid of Icons */}
        <Grid
          templateColumns={{ base: "repeat(4, 1fr)", md: "repeat(6, 1fr)" }}
          gap={6}
          flex="1"
          zIndex={60}
        >
          {/* Each Icon */}
          {technology.map((tg, index) => {
            return (
              <GridItem
                key={index}
                display="flex"
                textAlign="center"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  display="flex"
                  minW={{base: "60px", md: "80px"}}
                  minH={{base: "60px", md: "80px"}}
                  justifyContent="center"
                  alignItems="center"
                  bg="#12121273"
                  border="1px solid #1e1e1e"
                  borderRadius="lg"
                  p={3}
                >
                  <Box w="30px" h="30px">
                    <Image
                      src={tg.src}
                      alt="Logo de las technology"
                      width={50}
                      height={50}
                      style={{
                        width: "100%",
                        maxWidth: "100px",
                        height: "auto",
                      }}
                      quality={30}
                    />
                  </Box>
                </Box>
              </GridItem>
            );
          })}
        </Grid>
      </Flex>
    </Box>
  );
};

export default Footer;
