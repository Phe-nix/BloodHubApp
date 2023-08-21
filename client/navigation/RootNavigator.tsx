import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { GetStarted, SignInScreen, SignUpScreen } from '../screens';
import { RootParamsList } from '../types/navigation';

const Root = createStackNavigator<RootParamsList>();

export const RootNavigator: React.FC = () => {
  return (
    <Root.Navigator
      initialRouteName='GetStarted'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Root.Group key="unauthorized">
        <Root.Screen name="GetStarted" component={GetStarted}/>
        <Root.Screen name="SignUp" component={SignUpScreen}/>
        <Root.Screen name="SignIn" component={SignInScreen}/>
      </Root.Group>
    </Root.Navigator>
  );
}