import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./components/shared/navbar/navbar";
import Footer from "./components/shared/footer/footer";
import { Box } from "@chakra-ui/react";

const poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf", // Ruta del archivo de fuente locals
  variable: "--font-poppins", // Variable CSS personalizada
  weight: "100 900", // Pesos admitidos por la fuente
  style: "normal", // Estilo (normal o italic)
});

export const metadata: Metadata = {
  title: "Partneo",
  description:
    "Specialists in software development with modern Web3 and Web2 technologies. We design scalable, secure, and customized applications that transform digital businesses. Innovation, blockchain, and tailored solutions for your success.",
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
          <Box as="main" w="100vw" display="flex" justifyContent="center">
            <Box w="100%" maxW="1440px" boxSize='border-box'>
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
