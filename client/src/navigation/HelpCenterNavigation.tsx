import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FeatureOfDonaterScreen from "../screens/Settings/HelpCenter/FeatureOfDonaterScreen";
import HelpCenterScreen from "../screens/Settings/HelpCenterScreen";
import HowToChangePassword from "../screens/Settings/HelpCenter/HowToChangePasswordScreen";
import HowToMakeEmergencyRequest from "../screens/Settings/HelpCenter/HowToMakeEmergencyRequestScreen";
import HowToMakeRequest from "../screens/Settings/HelpCenter/HowToMakeRequestScreen";
import HowToPrepareBeforeDonate from "../screens/Settings/HelpCenter/HowToPrepareBeforeDonateScreen";
import ContactUsScreen from "../screens/Settings/HelpCenter/ContactUsScreen";

const tab = createNativeStackNavigator();

const HelpCenterNavigation = ({ navigation }: any) => {
  return (
    <tab.Navigator
      initialRouteName=""
      screenOptions={{
        headerStyle: {
          backgroundColor: "#E99999",
        },
      }}
    >
      <tab.Screen
        options={{ headerTitle: "การตั้งค่า" }}
        name="HelpCenterScreen"
        component={HelpCenterScreen}
      />
      <tab.Screen
        options={{ headerTitle: "คุณสมบัติของผู้บริจาคโลหิต" }}
        name="Feature of donater"
        component={FeatureOfDonaterScreen}
      />
      <tab.Screen
        options={{ headerTitle: "วิธีการเปลี่ยนรหัสผ่าน" }}
        name="How to change password"
        component={HowToChangePassword}
      />
      <tab.Screen
        options={{ headerTitle: "การขอรับบริจาคโลหิตแบบฉุกเฉิน" }}
        name="How to make emergency request"
        component={HowToMakeEmergencyRequest}
      />
      <tab.Screen
        options={{ headerTitle: "การขอรับบริจาคเลือด" }}
        name="How to make request"
        component={HowToMakeRequest}
      />
      <tab.Screen
        options={{ headerTitle: "เตรียมตัวก่อนไปบริจาคโลหิต" }}
        name="How to prepare before donate"
        component={HowToPrepareBeforeDonate}
      />
      <tab.Screen
        options={{ headerTitle: "ติดต่อเรา" }}
        name="ContactUs"
        component={ContactUsScreen}
      />
    </tab.Navigator>
  );
};
export default HelpCenterNavigation;
