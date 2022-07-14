import styled from 'styled-components/native';
import { ListCard } from '../../components/ListCard';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background: ${({ theme }) => theme.colors.main};
`;

export const Options = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;

export const Content = styled.View`
  padding: 0 16px;
  margin-top: 24px;
`;

export const Card = styled(ListCard)``;
