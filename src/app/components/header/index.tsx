import { Box, VStack, HStack, Stack } from "@chakra-ui/react";
import Image from "next/image";
import Title from "../shared/title";
import SubTitle from "../shared/SubTitle";
import Paragrapth from "../shared/paragraph";
import ButtonGlobal from "../button";
import BadgePartneo from "../badge/indeex";

const Header = () => {
  return (
    <Stack w="100%" justifyContent="center" alignItems="center" padding={3} mt={{base: 10, md: '170px'}}>
      <VStack>
        <Box w="100%" maxW={{base: "225px", md: "425px"}}>
          <Image
            src="/assets/logo-header.webp"
            alt="Logo de partneo header"
            width={500}
            height={500}
            style={{
                maskImage: "linear-gradient(black 40%, transparent)"
            }}
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

        <HStack mt={2} spaceX={4}>
          <ButtonGlobal>See our work</ButtonGlobal>
          <ButtonGlobal>Contact</ButtonGlobal>
        </HStack>
      </VStack>
    </Stack>
  );
};

export default Header;
