import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import AppNavigation from "./AppNavigation";
import { AuthNaivgation } from "./AuthNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Root = createNativeStackNavigator();

export const RootNavigator = () => {
  const [userId, setUserId] = useState<any>(null);
  useEffect(() => {
    getUserId();
  }, []);

  const getUserId = async () => {
    const userId = await AsyncStorage.getItem("userId");
    setUserId(userId);
  };

  return (
    <NavigationContainer>
      {userId ? (
        <Root.Navigator
          initialRouteName={"App"}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Root.Screen name="Auth" component={AuthNaivgation} />
          <Root.Screen name="App" component={AppNavigation} />
        </Root.Navigator>
      ) : (
        <Root.Navigator
          initialRouteName={"Auth"}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Root.Screen name="Auth" component={AuthNaivgation} />
          <Root.Screen name="App" component={AppNavigation} />
        </Root.Navigator>
      )}
    </NavigationContainer>
  );
};
