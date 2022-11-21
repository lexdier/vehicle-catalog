import '../styles/globals.css';
import type { AppProps } from 'next/app';
import TheNavbar from '../components/TheNavbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TheNavbar />
      <Component {...pageProps} />
    </>
  );
}
