import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ContainerProps {
  BackgroundColor: string;
}

interface TitleProps {
  color: string;
}

export const Container = styled(RectButton)<ContainerProps>`
  background-color: ${({ BackgroundColor }) => BackgroundColor};
  padding: 12px 16px;
  margin-bottom: 12px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text<TitleProps>`
  color: ${({ color }) => color};
  width: 200px;
  text-align: center;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  position: absolute;
  right: 50%;
  left: 30%;
`;
export const ContainerIcon = styled.View`
  padding-right: 16px;
  border-color: rgba(0, 0, 0, 0.2);
  border-right-width: 2px;
`;
