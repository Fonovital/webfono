'use strict';
import type { AppProps } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@/styles/theme';
import Head from "next/head";
import styles from '@/styles/index.module.scss';
import Header from '@/section/Header';
import Footer from '@/section/Footer';
import WhatsApp from '@/components/Social/WhatsApp';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
        <Head>
          <title>Fonovital</title>
        </Head>
        <CssBaseline />
        <div className={styles.Layout}>
            <Header className={styles.header} />
            <Component {...pageProps} className={styles.component} />
            <WhatsApp className={styles.whatsapp} color='white'/>
            <Footer className={styles.footer} />   
        </div>
    </ThemeProvider>
  );
}
export default MyApp
