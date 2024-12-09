import { Box } from "@chakra-ui/react";
import Services from "../Services";
import TextComplement from "../TextComplement";

const Service = () => {
  return (
    <Box w="100%" p={3}>
      <TextComplement brother="/assets/text-services.webp">
        We Make It Happen
      </TextComplement>
      <Services />
    </Box>
  );
};

export default Service;
