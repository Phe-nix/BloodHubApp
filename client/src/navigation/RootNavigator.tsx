import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { GetStarted } from '../screens';
import { AuthNaivgation } from './AuthNavigation';

const Root = createNativeStackNavigator();

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Root.Navigator
        initialRouteName='GetStarted'
        screenOptions={{
          headerShown: false,
        }}
      >
          <Root.Screen name="GetStarted" component={GetStarted}/>
          <Root.Screen name="Auth" component={AuthNaivgation} />
      </Root.Navigator>
    </NavigationContainer>
  );
}