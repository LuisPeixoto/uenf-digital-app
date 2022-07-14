import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import {
  Container,
  Content,
  Cover,
  Section,
  SectionTitle,
  Items,
  ItemCard,
} from './styles';
import GroupSVG from '../../assets/group.svg';
import MobileSVG from '../../assets/mobile.svg';

export function About() {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <Container>
      <Cover />
      <Content>
        <Section>
          <SectionTitle>Sobre</SectionTitle>
          <Items>
            <ItemCard
              title="Projeto"
              onPress={() =>
                navigation.navigate('WebView', {
                  url: 'https://digital.uenf.br/quem-somos/',
                  title: 'Sobre o projeto',
                })
              }
              icon={GroupSVG}
            />
            <ItemCard
              title="Aplicativo"
              onPress={() => navigation.navigate('AboutApp')}
              icon={MobileSVG}
            />
          </Items>
        </Section>
      </Content>
    </Container>
  );
}
