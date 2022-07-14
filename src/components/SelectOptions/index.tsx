import React, { useState } from 'react';
import { Container, Option, OptionText } from './styles';

interface Props {
  options: string[];
  onSelect: (option: string) => void; // eslint-disable-line 
}

export function SelectOptions({ options, onSelect }: Props) {
  const [selected, setSelected] = useState(options[0]);

  function handleSelected(option: string) {
    setSelected(option);
    onSelect(option);
  }
  return (
    <Container>
      {options.map(option => (
        <Option
          key={option}
          active={selected === option}
          onPress={() => handleSelected(option)}
        >
          <OptionText active={selected === option}>{option}</OptionText>
        </Option>
      ))}
    </Container>
  );
}
