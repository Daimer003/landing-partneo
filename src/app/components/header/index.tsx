"use client";
import { Box, VStack, HStack, Stack, Skeleton, Button } from "@chakra-ui/react";
import Title from "../shared/title";
import SubTitle from "../shared/SubTitle";
import Paragrapth from "../shared/paragraph";
import ButtonGlobal from "../button";
import BadgePartneo from "../badge/indeex";
import { LottieAnimation } from "../lottie";
import { useEffect, useState } from "react";

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 500);
  }, []);

  return (
    <Stack
      w="100%"
      justifyContent="center"
      alignItems="center"
      padding={3}
      mt={{ base: "100px", md: "170px" }}
    >
      <VStack>
        <Box w="100%" maxW={{ base: "225px", md: "425px" }} position="relative">
          <Skeleton
            borderRadius="80px 0 80px 0"
            isLoaded={!isLoaded}
            startColor="#141414"
            endColor="#2a2a2a"
          >
            <LottieAnimation animation="/assets/json/partneo.json" />
          </Skeleton>
          <Box
            display="flex"
            content=""
            position="absolute"
            w="100%"
            h="50%"
            bottom="0"
            //  background="rgb(0,0,0)"
            background="linear-gradient(0deg, rgba(0,0,0,1) 17%, rgba(0,0,0,0.09989933473389356) 72%)"
          />
        </Box>

        <Stack align="center" gap={3}>
          <BadgePartneo>Software Developers</BadgePartneo>
          <Title>Partneo</Title>
          <SubTitle>Your New Tech Partner</SubTitle>
          <Box maxW="509px">
            <Paragrapth>
              We don’t just build software, we bring visions to life. Let’s
              create the future together
            </Paragrapth>
          </Box>
        </Stack>

        <HStack mt={2} spacing={4}>
          <ButtonGlobal>See our work</ButtonGlobal>
          <Button
            w="auto"
            p="0px 10px"
            bg="black"
            color="white"
            border="1px solid white"
            fontWeight="600"
            borderRadius="9px"
            fontSize={{ base: "sm", md: "md" }}
          >
            Contact Us
          </Button>
        </HStack>
      </VStack>
    </Stack>
  );
};

export default Header;
