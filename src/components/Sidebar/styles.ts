import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import LogoSVG from '../../assets/logo.svg';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  padding-top: ${getStatusBarHeight() + 10}px;
  padding-bottom: ${RFValue(20)}px;
  background-color: ${({ theme }) => theme.colors.main};
  align-items: center;
  justify-content: center;
`;
export const Logo = styled(LogoSVG).attrs({
  width: RFValue(125),
  height: RFValue(55),
})``;

export const Content = styled(DrawerContentScrollView).attrs({
  contentContainerStyle: {
    paddingTop: RFValue(20),
  },
})``;

export const Item = styled(DrawerItem).attrs({})``;

export const Footer = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
  border-top-width: 1px;
  border-top-color: #e6e6e6;
  left: 0;
  margin-bottom: 20px;
`;
