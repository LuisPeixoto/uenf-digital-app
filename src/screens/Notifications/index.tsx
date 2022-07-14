import React from 'react';
import { NoItem } from '../../components/NoItem';
import {
  Container,
  Content,
  Card,
  Title,
  Desciption,
  Date,
  DateText,
  DateIcon,
} from './styles';
import BellSVG from '../../assets/bell-no-item.svg';

export function Notifications() {
  const data = [
    // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    // 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  return (
    <Container>
      {data.length > 0 ? (
        <Content
          data={data}
          renderItem={(item, index) => (
            <Card key={index}>
              <Title>What is Lorem Ipsum?</Title>
              <Desciption>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </Desciption>
              <Date>
                <DateIcon />
                <DateText>10, jan 22</DateText>
              </Date>
            </Card>
          )}
        />
      ) : (
        <NoItem
          icon={BellSVG}
          title="Nenhuma notificação"
          subtitle={`Quando você receber uma ${'\n'} notificação, ela aparecerá aqui.`}
        />
      )}
    </Container>
  );
}
