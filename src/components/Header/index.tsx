import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Container, Logo, Menu, Right, Search, Bell, Button } from './styles';

export function Header() {
  const navigation = useNavigation<any>();
  return (
    <Container>
      <Button onPress={() => navigation.toggleDrawer()}>
        <Menu />
      </Button>
      <Logo />
      <Right>
        <Button onPress={() => navigation.navigate('Search')}>
          <Search />
        </Button>

        <Button onPress={() => navigation.navigate('Notifications')}>
          <Bell />
        </Button>
      </Right>
    </Container>
  );
}
