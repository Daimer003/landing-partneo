import { IconLaunch, IconMore } from "@/Utils/icons";
import { Box, Flex, Text } from "@chakra-ui/react";

const Services = () => {
  const lineGradient = `<svg
  width="22"
  height="38"
  viewBox="0 0 20 37"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"

>
  <g filter="url(#filter0_f_1_97)">
    <rect x="8.5" y="8.0166" width="3" height="22" fill="#ffffffb6" />
  </g>
  <defs>
    <filter
      id="filter0_f_1_97"
      x="0.5"
      y="0.0166016"
      width="21"
      height="36"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_1_97" />
    </filter>
  </defs>
</svg>
`;

  const styleGradientLineBefore = {
    content: '""',
    display: "flex",
    width: "20px",
    height: "40px",
    backgroundColor: "white",
    background: `url("data:image/svg+xml;base64, ${btoa(
      lineGradient
    )}") no-repeat`,
    backgroundSize: "contain",
    position: "absolute",
    left: "-20px",
    top: "33px",
  };

  const styleGradientLineAfter = {
    content: '""',
    display: "flex",
    width: "2px",
    height: "20px",
    backgroundColor: "white",
    position: "absolute",
    left: "-11px",
    top: "40px",
  };

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
        <Flex
          direction="column"
          maxW="400px"
          gap={3}
          position="relative"
          _after={styleGradientLineAfter}
          _before={styleGradientLineBefore}
        >
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
        <Flex
          direction="column"
          maxW="400px"
          gap={3}
          position="relative"
          _after={styleGradientLineAfter}
          _before={styleGradientLineBefore}
        >
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
