import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

export const Header = styled.View`
  padding: 16px;
  background: #d3d3d3;
  border-radius: 8px;
  margin-bottom: 16px;
`;
export const HeaderText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text_title};
  line-height: ${RFValue(20)}px;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;
