import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import LogoSVG from '../../assets/logo-appversion.svg';

export const Container = styled.View`
  flex: 1;
`;
export const Content = styled.View`
  flex: 0.7;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled(LogoSVG)`
  margin-bottom: 18px;
`;
export const Name = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_title};
`;
export const Description = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.text};
  margin-top: 6px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0 16px;
  position: absolute;
  bottom: 0;
  margin-bottom: 30px;
`;
