import { RefreshControl, ScrollView, Text, View } from "react-native";
import {styles} from "./DonateRequestScreen.style"
import Request from "../Components/Request/Request"
import Profile from "../../../../assets/picture/kitten.png"
import { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import { set } from "date-fns";



const DonateRequestScreen = () => {
    const [reservation, setReservation] = useState<any>([])
  const [refreshing, setRefreshing] = useState<boolean>(false);


    useEffect(() => {
        fetch();
    }, [])

    const fetch = async () => {
        const user = await AsyncStorage.getItem("userId")
        await axios.get(`${Constants.expoConfig?.extra?.API_URL}/donation/getReservation/${user}`)
            .then((res) => {
                setReservation(res.data.reservation)
                setRefreshing(false);
            })
    }

    const onRefresh = () => {
        setRefreshing(true);
        fetch();
    }
    
    return (
        <ScrollView
         style={styles.background}
         refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
         >
            <View style={styles.container}>
                <Text style={styles.lastestRequest}>คำขอบริจาคล่าสุด</Text>
                {   
                    reservation.length === 0 ? 
                    (   
                        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                            <Text>ไม่มีคำขอ</Text>
                        </View>
                    ) 
                    : 
                    (
                        reservation.map((item: any) => {
                            return (
                                <Request key={item.id} item={item} fetch={fetch}/>
                            )
                        })
                    )
                }
            </View>
        </ScrollView>
    )
}

export default DonateRequestScreen