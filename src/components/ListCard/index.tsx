import React from 'react';
import { Container, Title, Subtitle, Content } from './styles';

interface Props {
  title: string;
  subtitle: string;
  borderColor?: string;
}

export const ListCard: React.FC<Props> = ({
  title,
  subtitle,
  borderColor = '#6ca571',
}) => {
  ListCard.defaultProps = {
    borderColor: '#6ca571',
  };
  return (
    <Container borderColor={borderColor}>
      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Content>
    </Container>
  );
};
