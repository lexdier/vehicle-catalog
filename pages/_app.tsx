import '../styles/globals.css';
import type { AppProps } from 'next/app';
import TheNavbar from '../components/TheNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Auth0Provider
        domain={'vehicle-catalog.us.auth0.com'}
        clientId={'XhOW8LUMCEANBNBU5hYewtDm99sgy3T8'}
        redirectUri={'http://localhost:3000'}>
        <TheNavbar />
        <Component {...pageProps} />
      </Auth0Provider>
    </>
  );
}
