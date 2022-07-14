import React, { useState } from 'react';
import { ListCard } from '../../components/ListCard';
import { SelectOptions } from '../../components/SelectOptions';
import {
  Container,
  Options,
  Content,
  DaySelect,
  DaySelectButton,
  PreviousIcon,
  Day,
  NextIcon,
} from './styles';

export function Restaurant() {
  const [selected, setSelected] = useState('Almoço');
  return (
    <Container>
      <DaySelect>
        <DaySelectButton>
          <PreviousIcon />
        </DaySelectButton>

        <Day>Segunda feira - 24/03/2022</Day>

        <DaySelectButton>
          <NextIcon />
        </DaySelectButton>
      </DaySelect>

      <Options>
        <SelectOptions onSelect={setSelected} options={['Almoço', 'Jantar']} />
      </Options>

      <Content>
        {selected === 'Almoço' ? (
          <>
            <ListCard title="Repolho" subtitle="(80g = 15kcal)" />
            <ListCard title="Repolho" subtitle="(80g = 15kcal)" />
            <ListCard title="Repolho" subtitle="(80g = 15kcal)" />
            <ListCard title="Repolho" subtitle="(80g = 15kcal)" />
            <ListCard title="Repolho" subtitle="(80g = 15kcal)" />
            <ListCard title="Repolho" subtitle="(80g = 15kcal)" />
            <ListCard title="Repolho" subtitle="(80g = 15kcal)" />
            <ListCard title="Repolho" subtitle="(80g = 15kcal)" />
            <ListCard title="Repolho" subtitle="(80g = 15kcal)" />
            <ListCard title="Repolho" subtitle="(80g = 15kcal)" />
          </>
        ) : (
          <ListCard title="Batata Frita" subtitle="(80g = 15kcal)" />
        )}
      </Content>
    </Container>
  );
}
