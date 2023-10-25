import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsScreen from "../screens/news/NewScreen";
import NewsDetailScreen from "../screens/news/NewDetailScreen";
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
            <Tab.Screen name="NewScreen" component={NewsScreen} options={{ headerTitle: "ข่าวสาร" }} />
            <Tab.Screen name="NewDetail" component={NewsDetailScreen} options={{ headerTitle: "รายละเอียดข่าวสาร" }} />
        </Tab.Navigator>
    );
}