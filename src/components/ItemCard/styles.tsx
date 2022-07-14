import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ContainerProps {
  color: string;
}

export const Container = styled(RectButton).attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.1,
  shadowRadius: 4.65,

  elevation: 3,
})<ContainerProps>`
  width: 82px;
  height: 82px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
`;

export const Title = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.background_secondary};
  margin-top: 8px;
`;
