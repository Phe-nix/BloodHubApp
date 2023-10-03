import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AboutScreen from "../screens/Settings/AboutScreen";
import AddressScreen from "../screens/Settings/AddressScreen";
import EditAddressScreen from "../screens/Settings/EditAddressScreen";
import EditNotificationScreen from "../screens/Settings/EditNotificationScreen";
import HelpCenterScreen from "../screens/Settings/HelpCenterScreen";
import MyProfileScreen from "../screens/Settings/MyProfileScreen";
import SettingScreen from "../screens/Settings/SettingScreen";
import BookMarkNavigation from "./BookMarkNavigation";
import HistoryNavigation from "./HistoryNavigation";

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


      <tab.Screen name="History" component={HistoryNavigation} />
      
      <tab.Screen name="Bookmark" component={BookMarkNavigation} />

      
      <tab.Screen name="HelpCenter" component={HelpCenterScreen} />
      <tab.Screen name="About" component={AboutScreen} />
      <tab.Screen name="Edit My Address" component={AddressScreen} />
    </tab.Navigator>
  );
};

export default SettingNavigation;
