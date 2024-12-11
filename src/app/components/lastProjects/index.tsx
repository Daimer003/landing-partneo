import { Box } from "@chakra-ui/react";
import Carousel from "../carousel";
import TextComplement from "../TextComplement";

const LastProjects = () => {
  const linePath = `
  <svg
width="1440"
height="55"
viewBox="0 0 1440 55"
fill="none"
xmlns="http://www.w3.org/2000/svg"
{...props} // Permite agregar propiedades como className o style
>
<path
  d="M1329.87 53.0166C1334.12 53.0166 1338.19 51.3309 1341.19 48.3303L1384.31 5.2029C1387.31 2.2023 1391.38 0.516602 1395.63 0.516602H1442"
  stroke="#262626"
  strokeLinecap="round"
/>
<path
  d="M112.127 53.0166C107.884 53.0166 103.814 51.3309 100.814 48.3303L57.6863 5.2029C54.6857 2.2023 50.616 0.516602 46.3726 0.516602H0"
  stroke="#262626"
  strokeLinecap="round"
/>
<mask id="path-3-inside-1_1_242" fill="white">
  <path d="M110.664 53.9269H1335.43V52.9269H110.664V53.9269Z" />
</mask>
<path
  d="M110.664 52.9269H1335.43V54.9269H110.664V52.9269Z"
  fill="#262626"
  mask="url(#path-3-inside-1_1_242)"
/>
</svg>
`;

  const gradientLineBefore = {
    content: '""',
    display: "flex",
    width: "100%",
    height: "40px",
    backgroundColor: "white",
    background: `url("data:image/svg+xml;base64, ${btoa(linePath)}") no-repeat`,
    backgroundSize: "contain",
    position: "absolute",
    bottom: 0,
    zIndex: 20,
  };

  return (
    <Box display="flex" flexDir="column" w="100%" p={3} position="relative"   id="projects">
      <TextComplement brother="/assets/text-ourwork.webp">
        Last Projects
      </TextComplement>
      <Carousel />

      <Box
        display="flex"
        content=""
        w="100%"
        h="100%"
        position="absolute"
        bottom={0}
        _after={gradientLineBefore}
        // bg="red"
        zIndex={10}
      />
    </Box>
  );
};

export default LastProjects;
