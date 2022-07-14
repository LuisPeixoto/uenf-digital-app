import { StatusBar } from 'react-native';
import React from 'react';
import { Container, ContainerIcon, Icon, Title, SubTitle } from './styles';

export function NoNetwork() {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <ContainerIcon>
        <Icon />
      </ContainerIcon>
      <Title> Sem conexão</Title>
      <SubTitle>
        Verifique sua conexão com {'\n'} a internet e tente novamente.
      </SubTitle>
    </Container>
  );
}
