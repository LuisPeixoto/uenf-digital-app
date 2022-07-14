import React, { useEffect, useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { ItemCard } from '../../components/ItemCard';
import {
  Container,
  QuickAccess,
  News,
  NoItem,
  ContainerNoItem,
} from './styles';

import BookSvg from '../../assets/book.svg';
import RestaurantSvg from '../../assets/restaurant.svg';
import AcademicSvg from '../../assets/academic.svg';
import ErrorSVG from '../../assets/error.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { NewsCard } from '../../components/NewsCard';
import { getNews } from '../../database/repositories';
import { NewsProps } from '../../database/Interfaces';
import { SelectCategory } from '../../components/SelectCategory';
import { Loading } from '../../components/Loading';

export function Home() {
  const [data, setData] = useState<NewsProps[]>([]);
  const [category, setCategory] = useState('Recentes');
  const [loading, setLoading] = useState(true);

  const numberOfNews = 7;

  const navigation = useNavigation<NavigationProp<any>>();
  const theme = useTheme();

  const getData = async (): Promise<void> => {
    try {
      const news = await await getNews({
        lastVisible: data.length > 0 ? data[data.length - 1].date : [],
        limit: numberOfNews,
        category: category === 'Recentes' ? '' : category,
      });
      setData(prev => [...prev, ...news]);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    await getData();
  };

  const handleCategory = (category: string) => {
    setCategory(category);
    // setData(news => news.filter(item => item.categories === category));
  };

  useEffect(() => {
    getData();
  }, [category]);

  return (
    <Container>
      <QuickAccess>
        <ItemCard
          onPress={() => navigation.navigate('Library')}
          icon={BookSvg}
          title="Biblioteca"
        />
        <ItemCard
          onPress={() => navigation.navigate('Restaurant')}
          icon={RestaurantSvg}
          title="Cardápio"
        />
        <ItemCard onPress={() => {}} icon={AcademicSvg} title="Acadêmico" />
        <ItemCard
          onPress={() => navigation.navigate('Calendar')}
          icon={CalendarSvg}
          title="Calendário"
        />
      </QuickAccess>
      {loading ? (
        <Loading color={theme.colors.main} size="large" />
      ) : (
        <News
          data={data}
          ListEmptyComponent={
            <ContainerNoItem>
              <NoItem
                title="Houve um erro"
                subtitle="Tente novamente mais tarde"
                icon={ErrorSVG}
              />
            </ContainerNoItem>
          }
          ListHeaderComponent={
            data.length > 0 ? (
              <SelectCategory
                options={[
                  'Recentes',
                  'Notícias',
                  'Editais',
                  'Bolsas',
                  'Eventos',
                  'Informes',
                ]}
                onSelect={handleCategory}
              />
            ) : null
          }
          showsVerticalScrollIndicator={false}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <NewsCard
              onPress={() => navigation.navigate('NewsWebview', { item })}
              title={item.title}
              description={item.description}
              date={item.date}
              category={item.categories.split(' ')[0]}
              thumbnail={item.image}
            />
          )}
        />
      )}
    </Container>
  );
}
