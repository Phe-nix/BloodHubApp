import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AboutScreen from "../screens/settings/AboutScreen";
import AddressScreen from "../screens/settings/AddressScreen";
import EditAddressScreen from "../screens/settings/EditAddressScreen";
import EditNotificationScreen from "../screens/settings/EditNotificationScreen";
import HelpCenterScreen from "../screens/settings/HelpCenterScreen";
import MyProfileScreen from "../screens/settings/MyProfileScreen";
import SettingScreen from "../screens/settings/SettingScreen";
import BookMarkNavigation from "./BookMarkNavigation";
import HistoryNavigation from "./HistoryNavigation";
import HelpCenterNavigation from "./HelpCenterNavigation";

const tab = createNativeStackNavigator();

export const SettingNavigation = ({ navigation }: any) => {
  return (
    <tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#E99999",
        },
      }}>
      <tab.Screen
        name="Setting"
        component={SettingScreen}
      />
      <tab.Screen name="MyProfile" component={MyProfileScreen} />
      <tab.Screen name="EditAddress" component={EditAddressScreen} />
      <tab.Screen name="EditNotification" component={EditNotificationScreen} />
      <tab.Screen name="History" component={HistoryNavigation} />
      <tab.Screen name="Bookmark" component={BookMarkNavigation} />
      <tab.Screen name="HelpCenter" component={HelpCenterNavigation} />
      <tab.Screen name="About" component={AboutScreen} />
      <tab.Screen name="Edit My Address" component={AddressScreen} />
    </tab.Navigator>
  );
};
