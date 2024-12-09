import {
  IconExperience,
  IconMore,
  IconQuality,
  IconTech,
  IconTrusted,
} from "@/Utils/icons";
import { Box, Flex, Text } from "@chakra-ui/react";

const Features = () => {
  return (
    <Box color="white" py={10}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        wrap="wrap"
        alignItems='end'
      >
        <Flex w="100%" flexDir={{base: "column", md: "row"}}    borderBottom="1px solid #171616" >
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
