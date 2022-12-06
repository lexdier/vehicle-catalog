import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import TheNavbar from '../components/TheNavbar';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <div className="p-3">
        <TheNavbar />
      </div>
      <Component {...pageProps} />
    </>
  );
}
