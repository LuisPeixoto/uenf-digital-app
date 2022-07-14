import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components';

import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Home } from '../screens/Home';
import { Header } from '../components/Header';
import { NewsWebview } from '../screens/NewsWebview';
import { Library } from '../screens/Library';
import BackButtonSVG from '../assets/backButton.svg';
import LogoSVG from '../assets/logo.svg';
import { LibraryWebView } from '../screens/LibraryWebView';
import { Search } from '../screens/Search';
import { Calendar } from '../screens/Calendar';
import { Restaurant } from '../screens/Restaurant';
import { AboutApp } from '../screens/AboutApp';
import { WebView } from '../screens/WebView';
import { Notifications } from '../screens/Notifications';
import { About } from '../screens/About';
import { Assignments } from '../screens/Assignments';

export function AppStack() {
  const { Navigator, Screen } = createStackNavigator();
  const theme = useTheme();
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerBackTitleVisible: false,
        cardShadowEnabled: false,
        headerTitleAlign: 'center',
        headerTintColor: theme.colors.main,
        headerBackImage: () => <BackButtonSVG style={{ marginLeft: 8 }} />,
        headerTitleStyle: {
          fontFamily: theme.fonts.secondary_500,
          color: theme.colors.background_secondary,
        },
        headerStyle: {
          backgroundColor: theme.colors.main,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      }}
    >
      <Screen
        name="Home"
        options={{ header: () => <Header /> }}
        component={Home}
      />
      <Screen
        name="NewsWebview"
        options={{
          headerShown: true,
          headerStyle: {
            height: getStatusBarHeight() + 56,
            backgroundColor: theme.colors.main,
          },
          headerTitle: () => (
            <LogoSVG height={50} style={{ marginBottom: 5 }} />
          ),
        }}
        component={NewsWebview}
      />
      <Screen
        name="Library"
        options={{
          title: 'Biblioteca',
        }}
        component={Library}
      />

      <Screen
        name="LibraryWebView"
        options={{
          title: 'Biblioteca',
        }}
        component={LibraryWebView}
      />
      <Screen
        name="Search"
        options={{
          title: 'Pesquisa',
        }}
        component={Search}
      />
      <Screen
        name="Calendar"
        options={{
          title: 'Calendário',
        }}
        component={Calendar}
      />

      <Screen
        name="Restaurant"
        options={{
          title: 'Cardápio',
        }}
        component={Restaurant}
      />

      <Screen
        name="AboutApp"
        options={{
          title: 'Sobre o aplicativo',
        }}
        component={AboutApp}
      />

      <Screen
        name="About"
        options={{
          title: 'Sobre nós',
        }}
        component={About}
      />

      <Screen name="WebView" component={WebView} />
      <Screen
        name="Notifications"
        options={{ title: 'Notificações' }}
        component={Notifications}
      />

      <Screen
        name="Assignments"
        options={{ title: 'Atribuições' }}
        component={Assignments}
      />
    </Navigator>
  );
}
