import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyProfileScreen from "../screens/Settings/MyProfileScreen";
import EditAddressScreen from "../screens/Settings/EditAddressScreen";
import EditNotificationScreen from "../screens/Settings/EditNotificationScreen";
import HistoryScreen from "../screens/Settings/HistoryScreen";
import BookmarkScreen from "../screens/Settings/BookmarkScreen";
import HelpCenterScreen from "../screens/Settings/HelpCenterScreen";
import AboutScreen from "../screens/Settings/AboutScreen";
import SettingScreen from "../screens/Settings/SettingScreen";
import { TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const tab = createNativeStackNavigator();

const SettingNavigation = ({ navigation }: any) => {
  return (
    <tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#E99999",
        },
      }}>
      <tab.Screen
        name="Setting"
        component={SettingScreen}
        // screenOptions = {{
        //   headerShown: true,
        //   headerStyle: {
        //     backgroundColor: "#E99999",
        //   },
        //   headerLeft: () => (
        //     <TouchableOpacity onPress={() => navigation.goBack("")}>
        //       <AntDesign name="left" size={24} color="black" />
        //     </TouchableOpacity>
        //   ),
        // }}
      />
      <tab.Screen name="MyProfile" component={MyProfileScreen} />
      <tab.Screen name="EditAddress" component={EditAddressScreen} />
      <tab.Screen name="EditNotification" component={EditNotificationScreen} />
      <tab.Screen name="History" component={HistoryScreen} />
      <tab.Screen name="Bookmark" component={BookmarkScreen} />
      <tab.Screen name="HelpCenter" component={HelpCenterScreen} />
      <tab.Screen name="About" component={AboutScreen} />
    </tab.Navigator>
  );
};

export default SettingNavigation;
