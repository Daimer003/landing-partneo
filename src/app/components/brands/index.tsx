import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Brands = () => {
  return (
    <Box py={10} px={3}>
      <Text
        fontSize="xl"
        fontWeight="bold"
        mr={2}
        color="white"
        textAlign="center"
      >
        Some Brands We’ve Boosted
      </Text>

      <Flex wrap="wrap" justify="center" maxW="1440px" mx="auto" mt={10}>
        {/* Lista de Logos */}
        {[
          { src: "/assets/logs/log-1.webp", alt: "BHD" },
          { src: "/assets/logs/log-2.webp", alt: "AT&T" },
          { src: "/assets/logs/log-3.webp", alt: "Remitt" },
          { src: "/assets/logs/log-4.webp", alt: "Circle" },
          { src: "/assets/logs/log-5.webp", alt: "Reforest" },
          { src: "/assets/logs/log-6.webp", alt: "Exchange Americas" },
          { src: "/assets/logs/log-7.webp", alt: "OneMind" },
          { src: "/assets/logs/log-8.webp", alt: "Kryptopia" },
          { src: "/assets/logs/log-9.webp", alt: "LiquidAcre" },
          { src: "/assets/logs/log-10.webp", alt: "Credit Capital" },
          { src: "/assets/logs/log-11.webp", alt: "Plusvalica" },
          { src: "/assets/logs/log-12.webp", alt: "Nova Strike" },
        ].map((logo, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="center"
            alignItems="center"
            p={{base: 4, md: 8}}
            border="1px solid #171616"
            maxW={{base: "118px", md: "240px"}}
            minH="140px"
          >
            <Box display="flex" justifyContent="center" w="100%" >
              <Image
                src={logo.src}
                alt={logo.alt}
                maxH="50px"
                objectFit="contain"
              />
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Brands;
