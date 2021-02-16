// js
import QrLayout from '/structure/layout.js';

// css
import '../styles/app.scss'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <QrLayout>
      <Component {...pageProps} />
    </QrLayout>
  );
}
