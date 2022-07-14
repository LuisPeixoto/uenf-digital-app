import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton).attrs({
  shadowColor: '#ccc',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.1,
  shadowRadius: 4.65,

  elevation: 3,
})`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  margin-bottom: 24px;
  border-radius: 10px;
`;
export const Thumbnail = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.text_title};
  margin-top: 8px;
  padding: 0 8px;
  align-items: center;
`;
export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  padding-bottom: 8px;
`;

export const TextDateAndCategory = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  text-transform: uppercase;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 3,
  ellipsizeMode: 'tail',
})`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  padding: 8px;
  text-align: justify;
  line-height: 24px;
`;

export const Date = styled(TextDateAndCategory)``;
export const Category = styled(TextDateAndCategory)``;
