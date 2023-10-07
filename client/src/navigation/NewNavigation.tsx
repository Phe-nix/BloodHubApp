import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewScreen from "../screens/News/NewScreen";
import NewDetailScreen from "../screens/News/NewDetailScreen";
const Tab = createNativeStackNavigator();

export const NewNavigation = () => {
    return (
        <Tab.Navigator
        initialRouteName=""
        screenOptions={{
            headerStyle: {
                backgroundColor: '#E99999',
            },
        }}
        >
            <Tab.Screen name="NewScreen" component={NewScreen} />
            <Tab.Screen name="NewDetail" component={NewDetailScreen} />
        </Tab.Navigator>
    );
}