// pages/_app.js or pages/_app.tsx
import '../styles/globals.css'; // Adjust path as necessary
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;