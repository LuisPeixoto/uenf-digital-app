import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgProps } from 'react-native-svg';
import { Container, ContainerIcon, Title, SubTitle } from './styles';

interface Props {
  title: string;
  subtitle: string;
  icon: React.FC<SvgProps>;
}

export function NoItem({ title, subtitle, icon: Icon }: Props) {
  return (
    <Container>
      <ContainerIcon>
        <Icon width={RFValue(100)} height={RFValue(100)} color="#dedee3" />
      </ContainerIcon>

      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
