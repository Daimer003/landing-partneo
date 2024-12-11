import { Box, VStack } from "@chakra-ui/react";
import TextComplement from "../TextComplement";
import Paragrapth from "../shared/paragraph";
import Features from "../features";

const Partneo = () => {
  return (
    <VStack
      id="partneo"
      display="flex"
      justifyItems="center"
      w="100%"
      justifyContent="center"
      p={3}
      gap={8}
    >
      <TextComplement brother="/assets/text-partneo.webp">
        Why Us
      </TextComplement>
      <Box maxW="809px">
        <Paragrapth>
          We know how hard it is to trust someone with your dreams. That’s why
          we don’t aim to be just a service provider—we strive to be your Tech
          Partner, the one you can dream big with as we go to the moon together.
        </Paragrapth>
      </Box>

      <Features />
    </VStack>
  );
};

export default Partneo;
