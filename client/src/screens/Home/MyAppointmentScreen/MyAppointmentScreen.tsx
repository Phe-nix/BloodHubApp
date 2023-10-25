import { RefreshControl, ScrollView, Text, View } from "react-native"
import picture from "../../../../assets/picture/kitten.png"
import Appointment from "../Components/Appointment/Appointment"
import { styles } from "./MyAppointmentScreen.style"
import { useEffect, useState } from "react"
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Constants from "expo-constants"
import { set } from "date-fns"

const MyAppointmentScreen = ({navigation}: any) => {
    const [donation, setDonation] = useState<any>([])
    const [refreshing, setRefreshing] = useState<boolean>(false);


    useEffect(()=>{
        fetch();
    }, [])

    const fetch = async () => {
        const user = await AsyncStorage.getItem("userId")
            await axios.get(`${Constants.expoConfig?.extra?.API_URL}/donation/getDonation/${user}`)
                .then((res) => {
                    setDonation(res.data.donation)
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
                {   
                    donation.length === 0 ? 
                    (   
                        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                            <Text>ไม่มีการนัดหมาย</Text>
                        </View>
                    )
                    :
                    (
                        donation.map((item: any) => {
                            return (
                                <Appointment key={item.id} item={item} navigation={navigation} />
                            )
                        })
                    )
                }
            </View>
        </ScrollView>
    )
}

export default MyAppointmentScreen;