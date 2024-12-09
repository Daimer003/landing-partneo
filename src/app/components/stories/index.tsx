import { Box, HStack } from "@chakra-ui/react";
import TextComplement from "../TextComplement";
import TestimonialCard from "../cards/card-stories";

const Stories = () => {
  return (
    <Box w="100%" p={3}>
      <TextComplement brother="/assets/text-partners.webp">
        Success Stories
      </TextComplement>

      <HStack flexDir={{base: "column", lg: "row"}} justify="center" mt={10} gap={10}> 
        <TestimonialCard  textBadge="Remitt" avatar="/assets/victor.webp" /> 
        <TestimonialCard  textBadge="Change Americas" avatar="/assets/david.webp"/> 
      </HStack>
    </Box>
  );
};

export default Stories;
