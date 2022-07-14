import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
`;

export const ContainerIcon = styled.View`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: #dedee3;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.text_title};
  text-align: center;
  margin-top: 24px;
  margin-bottom: 8px;
`;
export const SubTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.text_title};
  line-height: ${RFValue(24)}px;
  margin-bottom: 8px;
`;
