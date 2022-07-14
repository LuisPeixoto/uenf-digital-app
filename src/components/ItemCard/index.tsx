/* eslint-disable react/function-component-definition */
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components';
import { Container, Title } from './styles';

interface Props extends RectButtonProps {
  title: string;
  icon: React.FC<SvgProps>;
  color?: string;
}

export const ItemCard: React.FC<Props> = ({
  title,
  icon: Icon,
  color = '#6ca571',
  ...rest
}) => {
  const theme = useTheme();
  ItemCard.defaultProps = {
    color: '#6ca571',
  };
  return (
    <Container color={color} {...rest}>
      <Icon width={36} height={36} color={theme.colors.background_secondary} />
      <Title>{title}</Title>
    </Container>
  );
};
