import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Speech from 'expo-speech';
import { useTheme } from 'styled-components';
import { useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import {
  Container,
  Thumbnail,
  DateAndCategory,
  Date as DateText,
  Category,
  ContainerBar,
  Bar,
  Title,
  Content,
  Separator,
  ButtonVoice,
  ButtonText,
  IconVolume,
  ArticleHeader,
} from './styles';

export function NewsWebview() {
  const [isVoiceOn, setIsVoiceOn] = useState(false);
  const { width } = Dimensions.get('window');

  const routes = useRoute();
  const { item } = routes.params;
  const theme = useTheme();
  const source = `${item.content.replace(/\\"/g, '"').replace(/\\n/g, '')}`;

  const removerHtml = source.replace(/<[^>]*>?|&#[0-9]*; | \s\s/gm, '');

  const dateFormatted = format(new Date(item.date), 'dd/MM/yyyy');

  const speak = async (text: string) => {
    isVoiceOn ? await Speech.stop() : Speech.speak(text);
    setIsVoiceOn(prevState => !prevState);
  };

  const tagsStyles = {
    body: {
      fontSize: RFValue(14),
      lineHeight: RFValue(22),
      textAlign: 'justify',
      whiteSpace: 'normal',
      color: theme.colors.text,
    },
    a: {
      color: theme.colors.main,
      fontWeight: 'bold',
      textDecorationLine: 'none',
    },
  };

  return (
    <Container>
      {/* <Thumbnail
        source={{
          uri: item.image,
        }}
      /> */}
      <Content>
        {/* <ContainerBar>
          <Bar />
        </ContainerBar> */}

        <Title>{item.title}</Title>

        <ArticleHeader>
          <DateAndCategory>
            <DateText>{dateFormatted}</DateText>
            <Separator />
            <Category>{item.categories}</Category>
          </DateAndCategory>

          <ButtonVoice
            onPress={() => {
              speak(removerHtml);
            }}
            isVoiceOn={isVoiceOn}
          >
            <IconVolume />
            <ButtonText>{isVoiceOn ? 'Parar de ouvir' : 'Ouvir'}</ButtonText>
          </ButtonVoice>
        </ArticleHeader>

        <RenderHTML
          contentWidth={width}
          // showsVerticalScrollIndicator={false}
          // style={{ marginHorizontal: 16 }}
          tagsStyles={tagsStyles}
          source={{
            html: `<Body>${source}</Body>`,
          }}
        />
      </Content>
    </Container>
  );
}
