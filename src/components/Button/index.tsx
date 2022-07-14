import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { Container, Title, ContainerIcon } from './styles';

interface Props extends RectButtonProps {
  title: string;
  icon: React.FC<SvgProps>;
  BackgroundColor?: string;
  textColor?: string;
}
export const Button: React.FC<Props> = ({
  title,
  icon: Icon,
  BackgroundColor = '#7EBF83',
  textColor = '#fff',
  ...rest
}: Props) => {
  Button.defaultProps = {
    BackgroundColor: '#7EBF83',
    textColor: '#fff',
  };
  return (
    <Container BackgroundColor={BackgroundColor} {...rest}>
      <ContainerIcon>
        <Icon width={36} color={textColor} height={36} />
      </ContainerIcon>
      <Title color={textColor}>{title}</Title>
    </Container>
  );
};
