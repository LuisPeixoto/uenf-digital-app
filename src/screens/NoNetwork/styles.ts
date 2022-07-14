import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../Global/styles/theme';
import NoNetworkSVG from '../../assets/no-network.svg';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.main};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin: 6px 24px;
  font-family: ${theme.fonts.secondary_600};
  font-size: ${RFValue(24)}px;
  text-align: center;
  color: ${theme.colors.background_secondary};
`;
export const SubTitle = styled.Text`
  padding: 6px 24px;
  font-family: ${theme.fonts.secondary_400};
  font-size: ${RFValue(18)}px;
  text-align: center;
  color: ${theme.colors.background_secondary};
`;

export const ContainerIcon = styled.View`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  background-color: #6fa874;
  margin-bottom: 24px;
`;
export const Icon = styled(NoNetworkSVG)``;
