import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DarkProvider } from '@/context/dark-context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkProvider>
      <Component {...pageProps} />
    </DarkProvider>
  );
}

export default MyApp;
