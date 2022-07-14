import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Container, Header, HeaderText, Content } from './styles';
import { items } from './items';
import { NewsCard } from '../../components/NewsCard';

export function Assignments() {
  const navigation = useNavigation<NavigationProp<any>>();
  const handlePress = (url: string) =>
    navigation.navigate('WebView', { url, title: 'Atribuições' });
  return (
    <Container>
      <Content>
        <Header>
          <HeaderText>
            Atribuições dos autores das imagens usadas no aplicativo.
          </HeaderText>
        </Header>
        {items.map(item => (
          <NewsCard
            title={item.name}
            category={item.category}
            thumbnail={item.image}
            onPress={() => handlePress(item.url)}
          />
        ))}
      </Content>
    </Container>
  );
}
