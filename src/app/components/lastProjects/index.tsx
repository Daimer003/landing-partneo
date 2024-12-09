import { Box } from "@chakra-ui/react";
import Carousel from "../carousel";
import TextComplement from "../TextComplement";

const LastProjects = () => {
  return (
    <Box w="100%" p={3}>
      <TextComplement brother="/assets/text-ourwork.webp">
        Last Projects
      </TextComplement>
      <Carousel />
    </Box>
  );
};

export default LastProjects;
