import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import theme from '../../Global/styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.main};
  justify-content: center;
  align-items: center;
`;

export const Indicator = styled(ActivityIndicator).attrs({
  size: 'large',
  color: '#fff',
})``;
