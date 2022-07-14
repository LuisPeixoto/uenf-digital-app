import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import PreviousSVG from '../../assets/previous.svg';
import NextSVG from '../../assets/next.svg';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background: ${({ theme }) => theme.colors.main};
`;

export const Options = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;

export const Content = styled.View`
  padding: 0 16px;
  margin: 24px 0;
`;

export const DaySelect = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
`;

export const DaySelectButton = styled(BorderlessButton)``;

export const PreviousIcon = styled(PreviousSVG).attrs({
  width: RFValue(24),
  height: RFValue(24),
})`
  margin-right: 8px;
`;
export const NextIcon = styled(NextSVG).attrs({
  width: RFValue(24),
  height: RFValue(24),
})`
  margin-left: 8px;
`;

export const Day = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.background_secondary};
`;
