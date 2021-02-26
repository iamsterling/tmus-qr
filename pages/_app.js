// js
import Layout from '../structure/layout.js';
import Footer from '../structure/footer.js';

// css
import '../styles/app.scss'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
