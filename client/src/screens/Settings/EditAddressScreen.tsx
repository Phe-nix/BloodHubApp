import React, { useState, useEffect } from "react";
import { Text, View, RefreshControl, ScrollView } from "react-native";
import { Button } from "../../core/components/Button";
import { styles } from "./style/EditAddressScreen.style";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditAddressScreen = ({ navigation }: any) => {
  const [name, setName] = useState(""); // State to store the name
  const [locationSet, setLocationSet] = useState(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      const response = await axios.get(
        `http://localhost:3000/address/${userId}`
      );
      const address = response.data.address.address;
      setName(address);
      setLocationSet(true); // Set locationSet to true if a location is found
    } catch (err) {
      setLocationSet(false); // Set locationSet to false if no location is found
      console.log("No location found");
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      {locationSet ? (
        <View>
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
      ) : (
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>กรุณาเลือกที่อยู่ของคุณ</Text>
          <Button
            title="Change Location"
            buttonWidth={70}
            buttonHeight={15}
            to="Edit My Address"
            navigation={navigation}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default EditAddressScreen;
