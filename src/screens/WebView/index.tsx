import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { WebView as Web } from 'react-native-webview';

interface Params {
  url: string;
  title: string;
}

export function WebView() {
  const routes = useRoute();
  const { url, title } = routes.params as Params;

  const navigation = useNavigation();
  navigation.setOptions({
    title,
  });

  return (
    <Web
      javaScriptEnabled
      startInLoadingState
      scalesPageToFit
      source={{ uri: url }}
    />
  );
}
