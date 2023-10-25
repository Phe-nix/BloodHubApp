import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import News from "../screens/settings/tabs/News";
import Post from "../screens/settings/tabs/Post";

const Tab = createMaterialTopTabNavigator();

const BookMarkNavigation = ({route}: any) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
        tabBarIndicatorStyle: { backgroundColor: 'pink' },
      }}
    >
      <Tab.Screen
        name="Post"
        component={Post}
        initialParams={{ source: route.params.source }}
      />
      <Tab.Screen name="News" component={News} />
    </Tab.Navigator>
  );
};

export default BookMarkNavigation;
