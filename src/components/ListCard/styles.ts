import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Props {
  borderColor: string;
}

export const Container = styled.View<Props>`
  background-color: #6fa874;
  border-radius: 10px;
  border-left-width: 9px;
  margin-bottom: 12px;
  border-color: ${({ borderColor }) => borderColor};
`;

export const Content = styled.View`
  padding: 12px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.background_secondary};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  margin-bottom: 6px;
`;
export const Subtitle = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.background_secondary};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;
