import React, { useState } from 'react';
import { SelectOptions } from '../../components/SelectOptions';
import { Container, Options, Content, Card } from './styles';
import { Calendar as Teste } from '../../components/Calendar';

export function Calendar() {
  const [optionSelected, setOptionSelected] = useState('Mensal');

  const onSelect = (option: string) => setOptionSelected(option);

  return (
    <Container>
      <Options>
        <SelectOptions options={['Mensal', 'Semestral']} onSelect={onSelect} />
      </Options>

      <Content>
        {optionSelected === 'Mensal' ? (
          <>
            <Teste />
            <Card
              title="Quarta Feira de Cinzas"
              subtitle="1 de março  - Feriado"
              borderColor="#fff"
            />
          </>
        ) : (
          <>
            <Card
              title="Quarta Feira de Cinzas"
              subtitle="1 de março  - Feriado"
              borderColor="#fff"
            />
            <Card
              title="Quarta Feira de Cinzas"
              subtitle="1 de março  - Feriado"
              borderColor="#fff"
            />
            <Card
              title="Quarta Feira de Cinzas"
              subtitle="1 de março  - Feriado"
              borderColor="#fff"
            />
          </>
        )}
      </Content>
    </Container>
  );
}
