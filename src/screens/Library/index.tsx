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
import RestaurantSvg from '../../assets/restaurant.svg';
import AcademicSvg from '../../assets/academic.svg';
import CalendarSvg from '../../assets/calendar.svg';

export function Library() {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <Container>
      <Cover />
      <Content>
        <Section>
          <SectionTitle>Consulta</SectionTitle>
          <Items>
            <ItemCard
              title="Empréstimos"
              onPress={() =>
                navigation.navigate('LibraryWebView', {
                  url: 'http://bibliotecas.uenf.br:8011/informa/cgi-bin/biblio.dll/emprest?g=geral&bd=&p=GERAL',
                })
              }
              icon={RestaurantSvg}
            />
            <ItemCard
              title="Publicações"
              onPress={() =>
                navigation.navigate('LibraryWebView', {
                  url: 'http://bibliotecas.uenf.br:8011/informa/cgi-bin/biblio.dll/book?g=geral&bd=&p=GERAL&unide=&t=',
                })
              }
              icon={AcademicSvg}
            />
            <ItemCard
              title="Periódicos"
              onPress={() =>
                navigation.navigate('LibraryWebView', {
                  url: 'http://bibliotecas.uenf.br:8011/informa/cgi-bin/biblio.dll/colec?g=geral&bd=&p=GERAL',
                })
              }
              icon={CalendarSvg}
            />
          </Items>
        </Section>

        <Section>
          <SectionTitle>Sugestão</SectionTitle>
          <ItemCard
            title="Inclusão"
            onPress={() =>
              navigation.navigate('LibraryWebView', {
                url: 'http://bibliotecas.uenf.br:8011/informa/cgi-bin/biblio.dll/sugest?g=geral&bd=&p=MULTIPLA',
              })
            }
            icon={AcademicSvg}
          />
        </Section>
      </Content>
    </Container>
  );
}
