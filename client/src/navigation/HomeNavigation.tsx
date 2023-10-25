import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home/HomeScreen";
import DonateRequestScreen from "../screens/home/DonateRequestScreen/DonateRequestScreen";
import MyAppointmentScreen from "../screens/home/MyAppointmentScreen/MyAppointmentScreen";
import FindHealthUnitScreen from "../screens/home/FindHealthUnitScreen";
import PostDetailScreen from "../screens/post/PostDetailScreen";
import NotificationScreen from "../screens/home/Notification";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createNativeStackNavigator();

export const HomeNavigation = ({ navigation }: any) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#E99999",
        },
      }}
    >
      <Tab.Screen
        name="HomePage"
        component={Home}
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Notification");
                }}
              >
                <View
                  style={[{ backgroundColor: "#E99999", borderRadius: 50 }]}
                >
                  <Ionicons
                    name="notifications-outline"
                    size={28}
                    color="#ff3636"
                  />
                </View>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Donate Request" component={DonateRequestScreen} />
      <Tab.Screen name="My Appointment" component={MyAppointmentScreen} />
      <Tab.Screen name="Find Health Units" component={FindHealthUnitScreen} />
      <Tab.Screen name="PostDetail" component={PostDetailScreen} />
    </Tab.Navigator>
  );
};
