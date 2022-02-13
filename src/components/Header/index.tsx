import React from 'react';
import { Container, Logo, Menu, Right, Search, Bell, Button } from './styles';

export function Header() {
  return (
    <Container>
      <Button>
        <Menu />
      </Button>

      <Logo />

      <Right>
        <Button>
          <Search />
        </Button>

        <Button>
          <Bell />
        </Button>
      </Right>
    </Container>
  );
}
