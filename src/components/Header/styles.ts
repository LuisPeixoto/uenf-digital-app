import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import logo from '../../assets/logo.svg';
import menu from '../../assets/menu.svg';
import search from '../../assets/search.svg';
import bell from '../../assets/bell.svg';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  height: ${getStatusBarHeight() + 57}px;
  background-color: ${({ theme }) => theme.colors.main};
`;

export const Logo = styled(logo)`
  width: 85px;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: ${Dimensions.get('window').width / 2 - 42.5}px;
  margin-top: ${getStatusBarHeight()}px;
  margin-bottom: 10px;
`;

export const Menu = styled(menu)`
  width: 30px;
  height: 30px;
  margin-top: ${getStatusBarHeight()}px;
  margin-bottom: 10px;
`;

export const Right = styled.View`
  flex-direction: row;
`;

export const Button = styled(BorderlessButton)``;

export const Search = styled(search)`
  width: 30px;
  height: 30px;
  margin-right: 14px;
  margin-top: ${getStatusBarHeight()}px;
  margin-bottom: 10px;
`;
export const Bell = styled(bell)`
  width: 30px;
  height: 30px;
  margin-top: ${getStatusBarHeight()}px;
  margin-bottom: 10px;
`;
