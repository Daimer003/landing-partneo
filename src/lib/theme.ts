'use client'

import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'



const activeLabelStyles = {
    transform: "scale(0.85) translateY(-36px)",
    backgroundColor: "transparent",
};

const styles = {
    global: () => ({
        body: {
            bg: '#000000',
            "html, body": {
                height: "100%",
                overflow: "hidden",
                // Estilos adicionales para dispositivos móviles
                touchAction: "none",
                overscrollBehavior: "none",
                WebkitOverflowScrolling: "touch",
                fontFamily: `'Roboto', sans-serif`,
            },
            "::-webkit-scrollbar": {
                display: "none", // Ocultar scrollbar en navegadores basados en WebKit
                width: "0px",
                background: "transparent",  // Hides scrollbar for WebKit browsers
            },
            "::-webkit-scrollbar-thumb": {
                background: "transparent",
            },
            "*": {
                scrollbarWidth: "none",  // Hides scrollbar for Firefox
                msOverflowStyle: "none", // Hides scrollbar for Internet Explorer and Edge
            },
            "#__next": {
                height: "100%", // Asegura que el contenedor de Next.js ocupe toda la altura
                overflowY: "scroll", // Permitir scroll dentro de la aplicación
                '-webkit-overflow-scrolling': 'touch', // Suaviza el desplazamiento en dispositivos táctiles
            },

        }
    })
}

const components = {
    Form: {
        variants: {
            floating: {
                container: {
                    _focusWithin: {
                        label: {
                            ...activeLabelStyles,
                            transform: "scale(0.85) translateY(-45px)", // Mantener la etiqueta flotando en enfoque
                        }
                    },
                    label: {
                        top: 0,
                        left: 0,
                        zIndex: 2,
                        position: "absolute",
                        backgroundColor: "transparent",
                        borderRadius: "6px",
                        color: '#4b4a49',
                        pointerEvents: "none",
                        mx: 3,
                        px: 1,
                        my: '11px',
                        transformOrigin: "left top"
                    }
                }
            }
        }
    },
    Button: {
        variants: {

            buttonPrimary: () => ({
                bg: 'linear-gradient(90deg, #01DBE7 0%, #009BAF 100%)',
                color: '#ffffff',
                fontSize: { base: '14px', md: '16px' },
                borderRadius: '50px',
                position: 'relative',
                transition: '.3s ease-in-out',
                zIndex: 0,
                _hover: {
                    bg: 'rgba(50, 50, 84, 1)',
                },
            }),
        },

    },
    Heading: {
        baseStyle: {
            fontWeight: "bold",
            lineHeight: "110%",
            letterSpacing: "-1%",
            color: 'white',
        },
        sizes: {
            sm: {
                fontSize: "20px",
            },
            md: {
                fontSize: "24px",
            },
            lg: {
                fontSize: "44px",
            },
        },
        variants: {
            custom: {
                sizes: { sm: "sm", md: "md", lg: "lg" },
                color: "black",
            },
        },
        defaultProps: {
            color: 'black',
            sizes: { sm: "sm", md: "md", lg: "lg" }, // Tamaño predeterminado
        },
    },
    Text: {
        baseStyle: {
            fontWeight: "ligt",
            lineHeight: "100%",
            color: 'black',
        },
        sizes: {
            sm: {
                fontSize: "14px",
            },
            md: {
                fontSize: "14px",
            },
            lg: {
                fontSize: "14.5px",
            },
            xl: {
                fontSize: "16px",
            },
            '2xl': {
                fontSize: "18px",
            },
            '4xl': {
                fontSize: "20px",
            },
        },
        variants: {
            custom: {
                color: "black",
                size: { base: "sm", md: "md", lg: 'lg' },
            },

        },
        defaultProps: {
            sizes: { base: "sm", md: "md", lg: "lg" }, // Tamaño predeterminado
        },
    },
    Link: {
        baseStyle: (props: any) => ({
            color: mode('#F0F0F2', '#0B0C0D')(props),
            textUnderlineOffset: 3
        })
    },
    space: {
        px: '1px',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
    },
    sizes: {
        max: 'max-content',
        min: 'min-content',
        full: '100%',
        '3xs': '14rem',
        '2xs': '16rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        '8xl': '90rem',
    },
    container: {
        sm: '40rem',  // 640px ÷ 16 = 40rem
        md: '48rem',  // 768px ÷ 16 = 48rem
        lg: '64rem',  // 1024px ÷ 16 = 64rem
        xl: '75rem',  // 1200px ÷ 16 = 750rem
        '2xl': '90rem',  // 1440px ÷ 16 = 90rem
    },
}

const fonts = {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
    mono: "Menlo, monospace", // Para texto tipo código, puedes cambiar esto tambié
}

const colors = {
    grassTeal: '#D0D9D6',
    greenDawn: {
        50: "#D0D9D6"
    },
    softPeach: "#F2CDAC",
    slateGray: "#4F5559",
    yellow900: {
        900: "#5F370E"
    }
}

const config = {
    initialColorMode: "white",
    useSystemColorMode: false
}

const sizes = {
    container: {
        sm: '40rem',  // 640px
        md: '48rem',  // 768px
        xl: '75rem',  // 1200px ÷ 16 = 750rem
        '2xl': '90rem',  // 1440px ÷ 16 = 90rem
    },
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '8xl': '90rem',
};

const breakpoints = {
    base: '0em', // 0px
    sm: '30em', // ~480px
    md: '48em', // ~768px
    lg: '62em', // ~992px
    xl: '75rem',  // 1200px ÷ 16 = 750rem
    '2xl': '90rem',  // 1440px ÷ 16 = 90rem
}

const theme = extendTheme({
    config,
    styles,
    components,
    fonts,
    colors,
    breakpoints,
    sizes
})

export default theme;