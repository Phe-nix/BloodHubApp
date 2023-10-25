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
        <tab.Navigator>
            <tab.Screen name="HelpCenterScreen" component={HelpCenterScreen} />
            <tab.Screen name="Feature of donater" component={FeatureOfDonaterScreen} />
            <tab.Screen name="How to change password" component={HowToChangePassword}/>
            <tab.Screen name="How to make emergency request" component={HowToMakeEmergencyRequest}/>
            <tab.Screen name="How to make request" component={HowToMakeRequest}/>
            <tab.Screen name="How to prepare before donate" component={HowToPrepareBeforeDonate}/>
            <tab.Screen name="ContactUs" component={ContactUsScreen}/>
        </tab.Navigator>
    )
}
export default HelpCenterNavigation;