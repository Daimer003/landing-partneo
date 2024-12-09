import { VStack } from "@chakra-ui/react";
import Header from "./components/header";
import Partneo from "./components/partneo";
import Service from "./components/Service/service";
import Stories from "./components/stories";
import Brands from "./components/brands";

export default function Home() {
  return (
    <VStack
      as="main"
      w="100%"
      h="auto"
      display="flex"

      alignItems="center"
      gap={{base: 20, md: 40}}
    >
      <Header />
      <Partneo /> 
      <Service />
      <Stories />
      <Brands />
    </VStack>
  );
}
