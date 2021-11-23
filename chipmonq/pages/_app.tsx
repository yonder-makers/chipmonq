import '../styles/globals.css';
import type { AppProps } from 'next/app';

import styles from '../components/layout.component.css';

function MyApp({ Component, pageProps }: AppProps) {
  console.log(styles.logo);
  return <Component {...pageProps} />;
}

export default MyApp;
