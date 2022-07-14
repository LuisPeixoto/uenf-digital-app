import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Props {
  active: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #6fa874;
  padding: 0;
  border-radius: 10px;
  /* padding: 12px; */
`;

export const Option = styled(RectButton)<Props>`
  padding: 12px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.background_secondary : '#6fa874'};
  border-radius: 10px;
`;

export const OptionText = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme, active }) => (active ? '#6fa874' : '#B3D8B6')};
`;
