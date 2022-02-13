import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Home } from '../screens/Home';
import { Header } from '../components/Header';

export function Routes() {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          header: () => <Header />,
        }}
      >
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}
