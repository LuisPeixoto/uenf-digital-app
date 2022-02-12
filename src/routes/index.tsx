import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useTheme } from 'styled-components';
import { Home } from '../screens/Home';

export function Routes() {
  const { Navigator, Screen } = createStackNavigator();
  const theme = useTheme();
  return (
    <NavigationContainer>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Navigator
        initialRouteName="Home"
        screenOptions={{ headerStyle: { backgroundColor: theme.colors.main } }}
      >
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}
