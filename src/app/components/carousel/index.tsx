"use client";

import {
  Box,
  Text,
  HStack,
  Button,
  Flex,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import BadgePartneo from "../badge/indeex";
import { IconRow } from "@/Utils/icons";

const StackedCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Datos de las tarjetas
  const cards = [
    {
      cover: "/assets/projects/remitt.webp",
      title: "Remitt",
      description:
        "We developed all technology for Remitt, a DeFi ecosystem with swaps, affiliate systems, and a staking factory. We connected Web3 and Off-Chain to provide real-time reward reports, fostering an active and transparent community.",
      technologies: ["#DeFi", "#Web3", "#Token", "#3Months"],
    },
    {
      cover: "/assets/projects/gestia.webp",
      title: "Gestia: Fintech Platform",
      description:
        "We built Gestia’s native app for commercial teams and a web app for partners and administrators. These tools streamline operations and enable microfinance organizations to work efficiently and collaboratively.",
      technologies: ["#Fintech", "#Dashboard", "#App", "#Web2"],
    },
    {
      cover: "/assets/projects/plusvalica.webp",
      title: "Plusvalica",
      description:
        "We developed the technology powering Plusvalica, a groundbreaking platform for real estate tokenization and real-world assets (RWA). At its core is the SOIL token, representing fiduciary rights within a secure trust. ",
      technologies: ["#Web3 ", "#RWA", "#Token", "#Dashboard"],
    },
    {
      cover: "/assets/projects/payment.webp",
      title: "Crypto Payment Gatewaya",
      description:
        "We developed our crypto payment gateway for ETH, BSC, MATIC, and TRON networks. Customizable for businesses, it saves clients hundreds of thousands of dollars in developme",
      technologies: ["#CryptoPayments", "#Gateway", "#Fintech", "#WhiteLabel"],
    },
  ];

  // Manejadores para moverse entre tarjetas
  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
    resetProgress();
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
    resetProgress();
  };

  const resetProgress = () => {
    setProgress(0);
  };

  // Animación automática con barra de progreso
  useEffect(() => {
    const animationInterval = setInterval(() => {
      nextCard();
    }, 3000); // Cambia cada 3 segundos

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + (100 / 3000) * 30
      );
    }, 30); // Incrementa el progreso cada 30ms

    return () => {
      clearInterval(animationInterval);
      clearInterval(progressInterval);
    };
  }, [currentIndex]);

  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="center"
      position="relative"
      flexDir={{base: 'column-reverse', md: 'row'}}
      height={{base: '550px', sm: '650px', md: "354px",}}
      width="100%"
      maxW="1004px"
      margin="0 auto"
      gap={10}
      
    >

      {/* Botones de navegación */}
      <Stack gap={10} bg='transparent'  transform={{base: "rotate(90deg)", md: "rotate(180deg)"}} position={{base: 'absolute', md: 'relative'}} bottom='-30px' zIndex={10} p={1} >
        <Button
          onClick={nextCard}
          border="1px solid #474747"
          zIndex="2"
          //_hover={{ bg: "whiteAlpha.900" }}
          aria-label="Next Card"
          transform="rotate(180deg)"
        >
          {" "}
          <IconRow size="28px" />
        </Button>
        <Button
          onClick={prevCard}
          border="1px solid #474747"
          zIndex="2"
         // _hover={{ bg: "whiteAlpha.900" }}
          aria-label="Previous Card"
        >
          {" "}
          <IconRow size="28px" />
        </Button>
      </Stack>

      {/* Tarjetas */}
      <Box position="relative" width="100%" height="100%" overflow="hidden">
        {cards.map((card, index) => (
          <Box
            key={index}
            width="100%"
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            opacity={index === currentIndex ? 1 : 0.5}
            transform={`scale(${index === currentIndex ? 1 : 0.9})`}
            transition="all 0.4s ease-in-out"
            zIndex={index === currentIndex ? 1 : 0}
            borderRadius="18px 18px 0 0"
            padding="20px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mt={index === currentIndex ? 10 : 0}
            boxShadow={index === currentIndex ? "lg" : "sm"}
            border="1px solid #474747"
          >
            <HStack flexDir={{base: 'column', md: "row"}}>
              <Stack w="100%">
                <Text fontSize="2xl" fontWeight="bold" color="white" mb={4}>
                  {card.title}
                </Text>
                <Text fontSize="md" color="#656565" maxW="411px" minH='100px'>
                  {card.description}
                </Text>
                <HStack opacity="40%">
                  {card.technologies.map((tech) => (
                    <BadgePartneo key={tech}>{tech}</BadgePartneo>
                  ))}
                </HStack>
              </Stack>

              <Stack w="100%">
                <Image
                  src={card.cover}
                  alt={card.title}
                  width={500}
                  height={350}
                />
              </Stack>
            </HStack>
          </Box>
        ))}
        {/* Barra de progreso personalizada */}
        <Box
          width="100%"
          height="2px"
          bg="gray.700"
          borderRadius="md"
          position="absolute"
          bottom="0"
          left="0"
          overflow="hidden"
          zIndex={10}
        >
          <Box
            height="100%"
            width={`${progress}%`}
            bg="white"
            transition="width 0.03s linear"
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default StackedCards;
