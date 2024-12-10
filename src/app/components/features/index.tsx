import {
  IconExperience,
  IconMore,
  IconQuality,
  IconTech,
  IconTrusted,
} from "@/Utils/icons";
import { Box, Flex, Text } from "@chakra-ui/react";

const Features = () => {
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

  const styleGradientLineBefore  = {
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
    left: "-10px",
    top: "36px",
  };

  const styleGradientLineAfter = {
    content: '""',
    display: "flex",
    width: "2px",
    height: "20px",
    backgroundColor: "white",

    position: "absolute",
    left: "-1px",
    top: "44px",
  }

  return (
    <Box color="white" py={10}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        wrap="wrap"
        alignItems="end"
      >
        <Flex
          w="100%"
          flexDir={{ base: "column", md: "row" }}
          borderBottom="1px solid #171616"
        >
          {/* Experience */}
          <Flex
            //flexDir={{ base: "column", md: "row" }}
            justify="center"
            align="end"
            w="100%"
          >
            <Flex
              direction="column"
              w="100%"
              minH="148px"
              p={3}
              borderLeft="1px solid #171616"
              borderBottom="1px solid #171616"
              position="relative"
              gap={3}
              _after={styleGradientLineAfter}
              _before={styleGradientLineBefore}
            >
              <IconExperience size="28px" />
              <Text fontSize="lg" fontWeight="bold">
                Experience
              </Text>
              <Text fontSize="sm" color="#656565" maxW="254px">
                14 years of tech and software expertise for innovative
                solutions.
              </Text>
            </Flex>

            {/* Quality First */}
            <Flex
              direction="column"
              w="100%"
              minH="148px"
              p={3}
              borderLeft="1px solid #171616"
              borderBottom="1px solid #171616"
              gap={3}
              position='relative'
              _after={styleGradientLineAfter}
              _before={styleGradientLineBefore}
            >
              <IconQuality size="28px" />
              <Text fontSize="lg" fontWeight="bold">
                Quality first
              </Text>
              <Text fontSize="sm" color="#656565" maxW="254px">
                Quality and efficiency are at the heart of every project.
              </Text>
            </Flex>
          </Flex>

          {/* More than Providers */}
          <Flex
            direction="column"
            w={{ base: "100%", md: "45%" }}
            minH="148px"
            p={3}
            borderLeft="1px solid #171616"
            gap={3}
            position='relative'
            _after={styleGradientLineAfter}
            _before={styleGradientLineBefore}
            // borderBottom="1px solid #171616"
          >
            <IconMore size="28px" />
            <Text fontSize="lg" fontWeight="bold">
              More than providers
            </Text>
            <Text fontSize="sm" color="#656565" maxW="254px">
              We’re your strategic partner, solving business challenges
              together.
            </Text>
          </Flex>
        </Flex>

        <Flex justify="center" align="center" w="100%" maxW="800px">
          {/* Trusted Relationships */}
          <Flex
            direction="column"
            w="100%"
            minH="148px"
            p={3}
            borderLeft="1px solid #171616"
            gap={3}
            position='relative'
            _after={styleGradientLineAfter}
            _before={styleGradientLineBefore}
          >
            <IconTrusted size="28px" />
            <Text fontSize="lg" fontWeight="bold">
              Trusted Relationships
            </Text>
            <Text fontSize="sm" color="#656565" maxW="254px">
              Built on transparency and trust, we forge lasting partnerships.
            </Text>
          </Flex>

          {/* Tech Specialization */}
          <Flex
            direction="column"
            w="100%"
            minH="148px"
            p={3}
            borderLeft="1px solid #171616"
            gap={3}
            position='relative'
            _after={styleGradientLineAfter}
            _before={styleGradientLineBefore}
          >
            <IconTech size="28px" />
            <Text fontSize="lg" fontWeight="bold">
              Tech Specialization
            </Text>
            <Text fontSize="sm" color="#656565" maxW="254px">
              Experts in cutting-edge tech like blockchain and AI to drive your
              growth.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Features;
