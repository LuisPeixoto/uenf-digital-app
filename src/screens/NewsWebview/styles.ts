import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import VolumeSVG from '../../assets/volume.svg';

interface ButtonVoiceProps {
  isVoiceOn: boolean;
}

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Content = styled.View`
  flex: 1;
  padding-top: 16px;
  border-radius: 20px;
  margin-top: -26px;
  padding: 0 16px;
  padding-bottom: 16px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const ContainerBar = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Bar = styled.View`
  width: 66px;
  height: 4px;
  margin: 8px 0;
  background-color: #dedee3;
  border-radius: 10px;
`;

export const Thumbnail = styled.Image`
  width: 100%;
  height: 300px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(21)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.text_title};
  align-items: center;
  line-height: ${RFValue(24)}px;
  margin-top: 48px;
`;

export const DateAndCategory = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const TextStyleBase = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
`;

export const Date = styled(TextStyleBase)``;
export const Category = styled(TextStyleBase)`
  text-transform: uppercase;
`;

export const Separator = styled.View`
  width: 4px;
  height: 4px;
  margin: 0 8px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.text_detail};
`;

export const ButtonVoice = styled(RectButton)<ButtonVoiceProps>`
  padding: 0 8px;
  height: 24px;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ isVoiceOn }) =>
    isVoiceOn ? ' rgba(222, 104, 104, 0.83)' : 'rgba(126, 191, 131, 0.83)'};
`;

export const ButtonText = styled(TextStyleBase)`
  color: ${({ theme }) => theme.colors.background_secondary};
`;
export const IconVolume = styled(VolumeSVG).attrs({
  width: RFValue(12),
  height: RFValue(12),
})`
  margin-right: 4px;
`;

export const ArticleHeader = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin: 8px 0;
`;
