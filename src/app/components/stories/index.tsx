import { Box, HStack } from "@chakra-ui/react";
import TextComplement from "../TextComplement";
import TestimonialCard from "../cards/card-stories";

const Stories = () => {
  return (
    <Box w="100%" p={3}  mt='80px'>
      <TextComplement brother="/assets/text-partners.webp">
        Success Stories
      </TextComplement>

      <HStack
        flexDir={{ base: "column", lg: "row" }}
        justify="center"
        mt={10}
        gap={10}
      >
        <TestimonialCard
          textBadge="Remitt"
          avatar="/assets/victor.webp"
          name="Victor Acquaroni"
          descripcion="I had hired three other companies before, and none delivered what I needed. Partneo got it right. They built our platform faster than I expected, and their attention to detail was amazing. Now I have my own dedicated team with them."
        />
        <TestimonialCard
          textBadge="Change Americas"
          avatar="/assets/david.webp"
          name="David Guzman"
          descripcion="The Partneo team has been a blessing for our company. We had to carry out a tech consulting project for AT&T, and we did it hand in hand with Partneo. Everything went smoothly."
        />
      </HStack>
    </Box>
  );
};

export default Stories;
