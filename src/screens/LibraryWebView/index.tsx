import { useRoute } from '@react-navigation/native';
import React, { useRef } from 'react';
import { WebView } from 'react-native-webview';
import { Container } from './styles';
import { injectedJavaScript } from './injectedJavaScript';

interface Params {
  url: string;
}

export function LibraryWebView() {
  const routes = useRoute();
  const webview = useRef(null);
  const { url } = routes.params as Params;

  const handleLoadEnd = () => {
    webview.current.injectJavaScript(injectedJavaScript);
  };
  return (
    <Container>
      <WebView
        javaScriptEnabled
        style={{ width: '240%' }}
        startInLoadingState
        ref={webview}
        onLoadEnd={handleLoadEnd}
        scalesPageToFit
        source={{ uri: url }}
      />
    </Container>
  );
}
