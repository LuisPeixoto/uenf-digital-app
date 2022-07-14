import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import CoverLibrarySVG from '../../assets/coverLibrary.svg';
import { ItemCard as itemCard } from '../../components/ItemCard';

const { width } = Dimensions.get('window');

const sizeMedium = width / 3;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.main};
`;

export const Content = styled.View`
  padding: 0 16px;
`;
export const Items = styled.View`
  flex-direction: row;
`;
export const Cover = styled(CoverLibrarySVG).attrs({
  width,
})`
  margin-top: 16px;
`;
export const Section = styled.View``;
export const SectionTitle = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.background_secondary};
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const ItemCard = styled(itemCard)`
  width: ${sizeMedium - 20}px;
  height: ${sizeMedium - 40}px;
  margin-right: 16px;
`;
