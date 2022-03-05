import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import AuthProvider from '../libs/authContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <AuthProvider>
      <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
