import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Header, Logo, Content, Item, Footer } from './styles';
import { items } from './items';

interface ItemProps {
  name: string;
  Icon: any;
  iconName: string;
  route: string;
  url: string;
}

export function Sidebar({ ...props }: DrawerContentComponentProps) {
  const navigation = useNavigation<NavigationProp<any>>();
  const theme = useTheme();

  const handleNavigate = (name: string, route: string, url: string) => {
    navigation.navigate(route, { url, title: name });
  };
  return (
    <Container {...props}>
      <Header>
        <Logo />
      </Header>
      <Content>
        {items.map(({ name, Icon, iconName, route, url }: ItemProps) => {
          return (
            <Item
              key={iconName}
              label={name}
              onPress={() => handleNavigate(name, route, url)}
              activeBackgroundColor={theme.colors.main}
              activeTintColor={theme.colors.main}
              labelStyle={{
                color: theme.colors.text_title,
                fontSize: RFValue(12),
                fontFamily: theme.fonts.secondary_500,
              }}
              icon={() => (
                <Icon
                  name={iconName}
                  color={theme.colors.text_detail}
                  size={RFValue(24)}
                />
              )}
            />
          );
        })}
      </Content>
      <Footer style={{ backgroundColor: '#ffffff' }}>
        <Item
          label="Sobre nós"
          onPress={() => handleNavigate('Sobre nós', 'About', '')}
        />
      </Footer>
    </Container>
  );
}
