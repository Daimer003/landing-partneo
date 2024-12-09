import { Box } from "@chakra-ui/react";
import Header from "./components/header";
import Partneo from "./components/partneo";
import Service from "./components/Service/service";
import Stories from "./components/stories";
import Brands from "./components/brands";
import LastProjects from "./components/lastProjects";

export default function Home() {
  return (
    <Box
      w="100%"
      h="auto"
      display="flex"
      flexDir='column'
      alignItems="center"
      gap={{base: 20, md: 40}}
    >
      <Header />
      <Partneo /> 
      <Service />
      <LastProjects />
      <Stories />
      <Brands />
    </Box>
  );
}
