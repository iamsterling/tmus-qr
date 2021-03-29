// 1. Import Layout
import Layout from '../components/layout.js';
// -----------------
// 2. import `ChakraProvider` component
// 3. import Chakra Theme
import { Box, ChakraProvider, CSSReset } from "@chakra-ui/react"
import { theme } from '../components/theme'

// -----------------
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {


  // if context = Tmobile, then load tmobile theme
  // otherwise, load metro theme
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
