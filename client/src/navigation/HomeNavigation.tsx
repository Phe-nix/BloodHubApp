import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home/HomeScreen";
import DonateRequestScreen from "../screens/Home/DonateRequestScreen/DonateRequestScreen"
import MyAppointmentScreen from "../screens/Home/MyAppointmentScreen/MyAppointmentScreen";
import FindHealthUnitScreen from "../screens/Home/FindHealthUnitScreen";
import PostDetailScreen from "../screens/Post/PostDetailScreen";
import NotificationScreen from "../screens/Home/Notification";
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
        name="Home Page"
        component={Home}
        options={{
          headerTitle: "หน้าหลัก",
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Notification");
                }}
              >
                <View
                  style={[{ backgroundColor: "#E99999" }]}
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
      <Tab.Screen name="Notification" component={NotificationScreen} options={{ headerTitle: "การแจ้งเตือน" }} />
      <Tab.Screen name="Donate Request" component={DonateRequestScreen} options={{ headerTitle: "คำขอบริจาค" }} />
      <Tab.Screen name="My Appointment" component={MyAppointmentScreen} options={{ headerTitle: "การนัดหมายของฉัน" }} />
      <Tab.Screen name="Find Health Units" component={FindHealthUnitScreen} options={{ headerTitle: "ค้นหาสถานพยาบาล" }} />
      <Tab.Screen name="PostDetail" component={PostDetailScreen} options={{ headerTitle: "รายละเอียดโพสต์" }} />
    </Tab.Navigator>
  );
};
