import { Dimensions, KeyboardAvoidingView, TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import CoverLibrarySVG from '../../assets/coverLibrary.svg';
import { ItemCard as itemCard } from '../../components/ItemCard';
import searchSVG from '../../assets/search.svg';

const { width } = Dimensions.get('window');
const size = width / 2;

interface TextInputProps {
  isFocused: boolean;
}

export const Container = styled(KeyboardAvoidingView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.main};
`;

export const Content = styled.View`
  padding: 0 16px;
`;
export const Items = styled.View`
  flex-direction: row;
  height: 300px;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 16px;
`;
export const Cover = styled(CoverLibrarySVG).attrs({
  width,
})`
  margin-top: 16px;
`;

export const ItemCard = styled(itemCard)`
  width: ${size - 30}px;
  height: ${size - 80}px;
  margin-bottom: 21px;
`;
export const ContainerSearch = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.1,
  shadowRadius: 4.65,

  elevation: 3,
})<TextInputProps>`
  margin: 24px 0;
  border-width: 2px;
  border-color: ${({ isFocused }) =>
    isFocused ? 'rgba(255, 255, 255, 0.7)' : 'transparent'};
  flex-direction: row;
  align-items: center;
  background-color: #6ca571;
  border-radius: 8px;
`;
export const SearchInput = styled(TextInput).attrs({
  placeholderTextColor: '#fff',
})`
  flex: 1;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: #fff;
  height: 50px;
  padding: 0 24px;
`;
export const SearchIcon = styled(searchSVG).attrs({})`
  color: ${({ theme }) => theme.colors.main};
  margin-right: 24px;
`;
