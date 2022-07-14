import { StatusBar } from 'react-native';
import React from 'react';
import { Container, Indicator } from './styles';

export function AppLoading() {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Indicator />
    </Container>
  );
}
