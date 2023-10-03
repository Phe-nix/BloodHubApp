import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import Appointment from "../screens/Settings/tabs/appointment";
import Post from "../screens/Settings/tabs/post";

const Tab = createMaterialTopTabNavigator();

const HistoryNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: 'orange',
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
        tabBarIndicatorStyle: { backgroundColor: 'pink' },
      }}
    >
      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="Appointment" component={Appointment} />
    </Tab.Navigator>
  );
};

export default HistoryNavigation;
