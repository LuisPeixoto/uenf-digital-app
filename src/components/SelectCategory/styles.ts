import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Props {
  active: boolean;
}

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingRight: 16,
  },
})`
  height: 56px;
  padding: 0 16px;
  margin-top: 18px;
`;

export const Option = styled(BorderlessButton)`
  padding: 4px;
  margin-right: 8px;
  border-radius: 10px;
  align-items: center;
`;

export const OptionText = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(18)}px;
  color: ${({ theme, active }) =>
    active ? theme.colors.text_title : theme.colors.text_detail};
`;

export const Line = styled.View<Props>`
  height: 4px;
  width: 24px;
  border-radius: 10px;
  margin-top: 6px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.main : 'transparent'};
`;
