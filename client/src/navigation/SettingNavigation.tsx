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
        options={{ headerTitle: "การตั้งค่า" }}
      />
      <tab.Screen name="MyProfile" component={MyProfileScreen} options={{ headerTitle: "โปร์ไฟล์" }} />
      <tab.Screen name="EditAddress" component={EditAddressScreen} options={{ headerTitle: "ที่อยู่" }} />
      <tab.Screen name="EditNotification" component={EditNotificationScreen} options={{ headerTitle: "การแจ้งเตือน" }} />
      <tab.Screen name="History" component={HistoryNavigation} options={{ headerTitle: "ประวัติ" }} />
      <tab.Screen name="Bookmark" component={BookMarkNavigation} options={{ headerTitle: "บุ๊คมาร์ค" }} />
      <tab.Screen name="HelpCenter" component={HelpCenterScreen} options={{ headerTitle: "ศูนย์ช่วยเหลือ" }} />
      <tab.Screen name="About" component={AboutScreen} options={{ headerTitle: "เกี่ยวกับพวกเรา" }} />
      <tab.Screen name="Edit My Address" component={AddressScreen} />
    </tab.Navigator>
  );
};
