import { format } from 'date-fns';
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import {
  Container,
  Thumbnail,
  Title,
  Description,
  Footer,
  Date as DateText,
  Category,
} from './styles';

interface Props extends RectButtonProps {
  title: string;
  description: string;
  date: string;
  category: string;
  thumbnail: string;
}

export const NewsCard: React.FC<Props> = ({
  title,
  description,
  date,
  category,
  thumbnail,
  ...rest
}) => {
  const formattedDate = format(new Date(date), 'dd/MM/yyyy');
  return (
    <Container {...rest}>
      {thumbnail && (
        <Thumbnail
          source={{
            uri: thumbnail,
          }}
        />
      )}

      <Title>{title}</Title>
      <Description>{description}</Description>

      <Footer>
        <DateText>{formattedDate}</DateText>
        <Category>{category}</Category>
      </Footer>
    </Container>
  );
};
