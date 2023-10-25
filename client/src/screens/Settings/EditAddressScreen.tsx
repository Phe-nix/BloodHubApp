import React, { useState, useEffect } from "react";
import { Text, View, RefreshControl, ScrollView } from "react-native";
import { Button } from "../../core/components/Button";
import { styles } from "./style/EditAddressScreen.style";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { add } from "date-fns";
import Constants from "expo-constants";

const EditAddressScreen = ({ navigation }: any) => {
  const [address, setAddress] = useState<any>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      const response = await axios.get(
        `${Constants.expoConfig?.extra?.API_URL}/address/${userId}`
      );
      const address = response.data.address;
      setAddress(address);
      setRefreshing(false);
    } catch (err) {
      setRefreshing(false);
      console.log(err);
      
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchUserData();
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      {address.length !== 0 ? (
        <View>
          <View style={styles.border}>
            <Text style={styles.title}>สถานที่ปัจจุบัน</Text>
            <Text style={styles.address}>{address.address}</Text>
          </View>
          <Button
            title="เปลี่ยนสถานที่"
            buttonWidth={70}
            buttonHeight={15}
            to="Edit My Address"
            navigation={navigation}
          />
        </View>
      ) : (
        <View style={{ alignItems: "center", gap: 20}}>
          <Text style={styles.title}>ยังไม่มีที่อยู่</Text>
          <Button
            title="เพิ่มสถานที่อยู่ของคุณ"
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
