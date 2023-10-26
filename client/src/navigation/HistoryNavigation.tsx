import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import Appointment from "../screens/settings/tabs/Appointment";
import Post from "../screens/settings/tabs/Post";

const Tab = createMaterialTopTabNavigator();

const HistoryNavigation = ({route}: any) => {

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
      <Tab.Screen name="Appointment" component={Appointment} />
    </Tab.Navigator>
  );
};

export default HistoryNavigation;
