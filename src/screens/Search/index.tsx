import React, { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import {
  Container,
  Content,
  Cover,
  Items,
  ItemCard,
  ContainerSearch,
  SearchInput,
  SearchIcon,
} from './styles';
import RestaurantSvg from '../../assets/restaurant.svg';

export function Search() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container behavior="height">
        <Cover />
        <Content>
          <ContainerSearch isFocused={isFocused}>
            <SearchInput
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder="Digite o que deseja..."
            />
            <SearchIcon />
          </ContainerSearch>
          <Items>
            <ItemCard
              title="Emprdadéstimos"
              color="#6C8AA5"
              onPress={() =>
                navigation.navigate('LibraryWebView', {
                  url: 'http://bibliotecas.uenf.br:8011/informa/cgi-bin/biblio.dll/emprest?g=geral&bd=&p=GERAL',
                })
              }
              icon={RestaurantSvg}
            />

            <ItemCard
              title="Empréstimos"
              color="#C95F5F"
              onPress={() =>
                navigation.navigate('LibraryWebView', {
                  url: 'http://bibliotecas.uenf.br:8011/informa/cgi-bin/biblio.dll/emprest?g=geral&bd=&p=GERAL',
                })
              }
              icon={RestaurantSvg}
            />

            <ItemCard
              title="Empréstimos"
              color="#9364B8"
              onPress={() =>
                navigation.navigate('LibraryWebView', {
                  url: 'http://bibliotecas.uenf.br:8011/informa/cgi-bin/biblio.dll/emprest?g=geral&bd=&p=GERAL',
                })
              }
              icon={RestaurantSvg}
            />

            <ItemCard
              title="Empréstimos"
              color="#6C8AA5"
              onPress={() =>
                navigation.navigate('LibraryWebView', {
                  url: 'http://bibliotecas.uenf.br:8011/informa/cgi-bin/biblio.dll/emprest?g=geral&bd=&p=GERAL',
                })
              }
              icon={RestaurantSvg}
            />

            <ItemCard
              title="Empréstimos"
              color="#696969"
              onPress={() =>
                navigation.navigate('LibraryWebView', {
                  url: 'http://bibliotecas.uenf.br:8011/informa/cgi-bin/biblio.dll/emprest?g=geral&bd=&p=GERAL',
                })
              }
              icon={RestaurantSvg}
            />
            <ItemCard
              title="Empréstimos"
              color="#33755D"
              onPress={() =>
                navigation.navigate('LibraryWebView', {
                  url: 'http://bibliotecas.uenf.br:8011/informa/cgi-bin/biblio.dll/emprest?g=geral&bd=&p=GERAL',
                })
              }
              icon={RestaurantSvg}
            />
          </Items>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}
