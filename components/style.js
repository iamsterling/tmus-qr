// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react"
import { Global } from "@emotion/react"

// 2. Extend the theme to include custom colors, fonts, etc
export const theme = extendTheme({
  colors: {
    transparent: "transparent",
    black: "#0F0F0F",
    white: "#fff",
    magenta: {
      // swatch provided from Smart-Swatch
      // https://smart-swatch.netlify.app/#E20074
      0: "#E20074",
      50: "#ffe1fb",
      100: "#ffb1e6",
      200: "#ff7ece",
      300: "#ff4cb4",
      400: "#ff1a97",
      500: "#e60076",
      600: "#b40068",
      700: "#820052",
      800: "#500037",
      900: "#200018",
    },
    
    gray: {
      50: "#f7fafc",
      // ...
      900: "#171923",
    },
    // ...
  },
})

// 3. Pass the `theme` prop to the `ChakraProvider` in _app.js