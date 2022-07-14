import React from 'react';
import { ActivityIndicatorProps } from 'react-native';
import { Container, Indicator } from './styles';

export function Loading({ ...rest }: ActivityIndicatorProps) {
  return (
    <Container>
      <Indicator {...rest} />
    </Container>
  );
}
