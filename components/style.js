// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react"
import { Global } from "@emotion/react"


//const Fonts = () => (
//  <Global
//    styles={`
//      @font-face {
//        font-family: 'Open Sans';
//        src: url("public/OpenSans.woff2") format('woff2');
//        }
//      `}
//  />
//)



// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#E20074",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const fonts = {
  heading: "Open Sans 600",
  body: "Open Sans",
}

export const theme = extendTheme({ colors, fonts })
// 3. Pass the `theme` prop to the `ChakraProvider` in _app.js


