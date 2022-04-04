import { createContext, createRef } from 'react';
import { AppProps } from 'next/app';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache, Global } from '@emotion/react';
import theme from '../theme';
import createEmotionCache from '../createEmotionCache';
import { GlobalStyle } from '../styles/global';
import { SiteRefProvider } from '../contexts/context';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const aboutRef = createRef<HTMLDivElement>();
  const skillRef = createRef<HTMLDivElement>();
  const experienceRef = createRef<HTMLDivElement>();
  const certificateRef = createRef<HTMLDivElement>();
  const contactRef = createRef<HTMLDivElement>();
  const refs = {
    aboutRef: aboutRef,
    skillRef: skillRef,
    experienceRef: experienceRef,
    certificateRef: certificateRef,
    contactRef: contactRef,
  };

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <CssBaseline />
        <SiteRefProvider ContextRefs={refs}>
          <Component {...pageProps} />
        </SiteRefProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
