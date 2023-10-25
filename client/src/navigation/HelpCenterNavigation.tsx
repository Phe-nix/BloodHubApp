import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FeatureOfDonaterScreen from "../screens/settings/HelpCenter/FeatureOfDonaterScreen";
import HelpCenterScreen from "../screens/settings/HelpCenterScreen";

const tab = createNativeStackNavigator();

const HelpCenterNavigation = ({ navigation }: any) => {
    return (
        <tab.Navigator
            
        >
            <tab.Screen name="HelpCenterScreen" component={HelpCenterScreen} />
            <tab.Screen name="Feature of donater" component={FeatureOfDonaterScreen} />
        </tab.Navigator>
    )
}

export default HelpCenterNavigation;