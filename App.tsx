import React, { useEffect, useState } from 'react';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { useNetInfo } from '@react-native-community/netinfo';
import theme from './src/Global/styles/theme';
import { Routes } from './src/routes';
import { NoNetwork } from './src/screens/NoNetwork';
import { AppLoading } from './src/screens/AppLoading';

export default function App() {
  const netInfo = useNetInfo();
  const [network, setNetwork] = useState(true);

  function networkInfo() {
    if (netInfo.isConnected) {
      setNetwork(true);
    } else {
      setNetwork(false);
    }
  }

  useEffect(() => {
    networkInfo();
  }, [netInfo.isConnected]);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (!network) {
    return <NoNetwork />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor={theme.colors.main} />
      <Routes />
    </ThemeProvider>
  );
}
