import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AppNavigation from './AppNavigation';
import { AuthNaivgation } from './AuthNavigation';

const Root = createNativeStackNavigator();

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Root.Navigator
        initialRouteName='App'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Root.Screen name="Auth" component={AuthNaivgation} />
        <Root.Screen name="App" component={AppNavigation} />
      </Root.Navigator>
    </NavigationContainer>
  );
}