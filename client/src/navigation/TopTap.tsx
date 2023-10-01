import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HistoryScreen from "../screens/Settings/HistoryScreen";
import BookmarkScreen from "../screens/Settings/BookmarkScreen";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
          tabBarIndicatorStyle: { backgroundColor: 'pink' },
        }}
      >
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Bookmark" component={BookmarkScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TopTabNavigator;
