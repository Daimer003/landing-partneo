import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./components/shared/navbar/navbar";
import Footer from "./components/shared/footer/footer";
import { Box, Stack } from "@chakra-ui/react";

const poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf", // Ruta del archivo de fuente local
  variable: "--font-poppins", // Variable CSS personalizada
  weight: "100 900", // Pesos admitidos por la fuente
  style: "normal", // Estilo (normal o italic)
});

export const metadata: Metadata = {
  title: "Partneo",
  description:
    "Especialistas en desarrollo de software con tecnología Web3 y Web2 modernas. Diseñamos aplicaciones escalables, seguras y personalizadas que transforman negocios digitales. Innovación, blockchain, y soluciones a medida para tu éxito.s",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Providers>
          <Box display="flex" w="100%" justifyContent="center" >
            <Box w="100%" maxW="1440px">
              <Navbar />
              {children}
              <Footer />
            </Box>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
