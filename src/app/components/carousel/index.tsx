"use client";

import { Box, Text, HStack, Button, Flex, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import BadgePartneo from "../badge/indeex";
import { IconRow } from "@/Utils/icons";

const StackedCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number | null>(null);

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
        "We developed our crypto payment gateway for ETH, BSC, MATIC, and TRON networks. Customizable for businesses, it saves clients hundreds of thousands of dollars in development.",
      technologies: ["#CryptoPayments", "#Gateway", "#Fintech", "#WhiteLabel"],
    },
  ];

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length + 1 ? 0 : prevIndex - 1
    );
    setProgress(0);
  };
  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
    setProgress(0);
  };

  const animate = () => {
    setProgress((prevProgress) => {
      if (prevProgress >= 200) {
        nextCard();
        return 0;
      }
      return prevProgress + .3
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="center"
      position="relative"
      flexDir={{ base: "column-reverse", md: "row" }}
      height={{ base: "600px", sm: "650px", md: "354px" }}
      width="100%"
      maxW="1004px"
      margin="0 auto"
      gap={10}
      mt={20}
    >
      {/* Navegación */}
      <Stack
        gap={10}
        position={{ base: "absolute", md: "relative" }}
        bottom={{ base: "-50px", md: "auto" }}
        direction={{ base: "row", md: "column" }}
        zIndex={10}
      >
        <Button
          onClick={prevCard}
          border="1px solid #474747"
          bg="transparent"
          color="white"
          _hover={{ bg: "gray.700" }}
          aria-label="Previous Card"
          transform={{ base: "rotate(90deg)", md: "rotate(180deg)" }}
        >
          <IconRow size="28px" />
        </Button>
        <Button
          onClick={nextCard}
          border="1px solid #474747"
          bg="transparent"
          color="white"
          _hover={{ bg: "gray.700" }}
          aria-label="Next Card"
          transform={{ base: "rotate(270deg)", md: "rotate(0deg)" }}
        >
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
            top={index === currentIndex ? 10 : 0}
            left="0"
            right="0"
            bottom="0"
            opacity={index === currentIndex ? 1 : 0.5}
            transform={`scale(${index === currentIndex ? 1 : 0.9})`}
            transition="all 0.4s ease-in-out"
            zIndex={index === currentIndex ? 1 : 0}
            bg='black'
            borderRadius="18px 18px 0 0"
            padding="20px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            boxShadow={index === currentIndex ? "lg" : "md"}
            color="white"
            border="1px solid #474747"
          >
            <HStack flexDir={{ base: "column", md: "row" }} gap={6}>
              <Stack w="100%" p={{ base: "10px", md: "20px" }}>
                <Text fontSize="2xl" fontWeight="bold" color="white" mb={4}>
                  {card.title}
                </Text>
                <Text fontSize="md" color="#aaaaaa" maxW="411px">
                  {card.description}
                </Text>
                <HStack wrap="wrap" gap={2} opacity='30%'>
                  {card.technologies.map((tech) => (
                    <BadgePartneo key={tech}>{tech}</BadgePartneo>
                  ))}
                </HStack>
              </Stack>
              <Box>
                <Image
                  src={card.cover}
                  alt={card.title}
                  width={500}
                  height={350}
                  style={{ borderRadius: "12px" }}
                />
              </Box>
            </HStack>
          </Box>
        ))}
        {/* Barra de progreso */}
        <Box
          width="100%"
          height="2px"
          bg="gray.700"
          borderRadius="full"
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
            transition="width 0.1s linear"
          />
        </Box>
      </Box>

      <Box display="flex" contain='c' w="100%" h="auto" backgroundImage='/assets/path-line.webp' position='absolute' bottom={0}  bg='red' zIndex={10}/>
    </Flex>
  );
};

export default StackedCards;
