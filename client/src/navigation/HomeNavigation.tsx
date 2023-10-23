import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home/HomeScreen";
import DonateRequestScreen from "../screens/home/DonateRequestScreen/DonateRequestScreen"
import MyAppointmentScreen from "../screens/home/MyAppointmentScreen/MyAppointmentScreen";
import FindHealthUnitScreen from "../screens/home/FindHealthUnitScreen";
import PostDetailScreen from "../screens/home/PostDetailScreen";

const Tab = createNativeStackNavigator();

export const HomeNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#E99999',
                },
            }}
        >
            <Tab.Screen name="HomePage" component={Home} />
            <Tab.Screen name="Donate Request" component={DonateRequestScreen} />
            <Tab.Screen name="My Appointment" component={MyAppointmentScreen} />
            <Tab.Screen name="Find Health Units" component={FindHealthUnitScreen} />
            <Tab.Screen name="PostDeatil" component={PostDetailScreen} />

        </Tab.Navigator>
    );
}