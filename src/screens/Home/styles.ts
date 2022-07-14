import styled from 'styled-components/native';
import { NoItem as noItem } from '../../components/NoItem';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
  padding-bottom: 16px;
`;
export const QuickAccess = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  padding-top: 4px;
  background-color: ${({ theme }) => theme.colors.main};
`;

export const News = styled.FlatList`
  padding: 12px 16px;
`;

export const NoItem = styled(noItem)``;

export const ContainerNoItem = styled.View`
  margin-top: 30px;
`;
