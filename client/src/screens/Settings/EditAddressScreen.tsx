import React,{useState, useEffect} from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "../../core/components/Button";
import { styles } from "./style/EditAddressScreen.style";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"; 
import { set } from "date-fns";



const ProfileEditScreen = ({ navigation }: any) => {
  const [name, setName] = useState(""); // State to store the name

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        const response = await axios.get(
          `http://localhost:3000/address/${userId}`
        );
        const address = response.data.address.address;
        setName(address);
        console.log(address);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.title}>Current location</Text>
        <Text style={styles.address}>{name}</Text>
      </View>
      <Button
          title="Change Location"
          buttonWidth={70}
          buttonHeight={15}
          to="Edit My Address"
          navigation={navigation}
        />
    </View>
  );
};


export default ProfileEditScreen;
