import styled from 'styled-components/native';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Indicator = styled(ActivityIndicator).attrs(
  {},
)<ActivityIndicatorProps>``;
