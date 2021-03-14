// 1. Import Layout
import Layout from '../components/layout.js';
// -----------------
// 2. import `ChakraProvider` component
// 3. import Chakra Theme
import { Box, ChakraProvider, CSSReset } from "@chakra-ui/react"
import { theme } from '../components/style'

// -----------------
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
