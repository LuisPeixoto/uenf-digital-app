import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { Container, Content, Logo, Name, Description, Footer } from './styles';
import GithubSVG from '../../assets/github.svg';
import CopyrightSVG from '../../assets/copyright.svg';

export function AboutApp() {
  const navigation = useNavigation<NavigationProp<any>>();

  const handleGithub = () =>
    navigation.navigate('WebView', {
      url: 'https://github.com/LuisPeixoto/uenf-digital-app',
      title: 'Código-fonte',
    });

  const handleAssignments = () => navigation.navigate('Assignments');

  return (
    <Container>
      <Content>
        <Logo />
        <Name>UENF Digital</Name>
        <Description>Versão: 1.0.0</Description>
        <Description>Compilado em 23/06/2021</Description>
      </Content>

      <Footer>
        <Button icon={GithubSVG} title="Código-fonte" onPress={handleGithub} />
        <Button
          icon={CopyrightSVG}
          title="Atribuições"
          textColor="#4F4F4F"
          BackgroundColor="#CCCCCC"
          onPress={handleAssignments}
        />
      </Footer>
    </Container>
  );
}
