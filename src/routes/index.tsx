import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { AppStack } from './app.stack.routes';
import { Sidebar } from '../components/Sidebar';

export function Routes() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="AppStack"
        drawerContent={(props: DrawerContentComponentProps) => (
          <Sidebar {...props} />
        )}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen name="AppStack" component={AppStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
