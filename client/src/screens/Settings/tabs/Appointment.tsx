import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, RefreshControl, ActivityIndicator } from "react-native";
import AppointmentBox from "../../Home/Components/Appointment/Appointment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import axios from "axios";

const Appointment = ({navigation} : any) => {
    const [appointment, setAppointment] = useState<any>([])
    const [refreshing, setRefreshing] = useState<boolean>(false);

    const source  = "AppointmentHistory"

    useEffect(()=>{
        fetch();
    }, [])

    const fetch = async () => {
        const user = await AsyncStorage.getItem("userId")
            await axios.get(`${Constants.expoConfig?.extra?.API_URL}/donation/getDonationHistory/${user}`)
                .then((res) => {
                    setAppointment(res.data.donation)
                    setRefreshing(false);
                })
    }

    const onRefresh = () => {
        setRefreshing(true);
        fetch();
      }

  return appointment.length === 0 ? (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size="small" color="#E99999" />
    </View>
  ) : (
    <ScrollView 
      style={styles.bgcolor}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      {
        appointment.map((item: any) => {
          return (
              <AppointmentBox key={item.id} item={item} navigation={navigation} source={source} />
          )
        })
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    bgcolor:{
        backgroundColor: "white",
        flex: 1,
    }
});
export default Appointment;
