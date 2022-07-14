import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import ClockSVG from '../../assets/clock.svg';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Content = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding-top: 16px;
`;
export const Card = styled.View`
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  border-bottom-width: 1px;
  border-bottom-color: #dedee3;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_title};
  margin-bottom: 8px;
`;

export const Desciption = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;

export const Date = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const DateIcon = styled(ClockSVG)`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export const DateText = styled.Text`
  text-transform: uppercase;
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.text_detail};
`;
