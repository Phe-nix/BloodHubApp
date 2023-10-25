import { Text, View } from "react-native"
import picture from "../../../../assets/picture/kitten.png"
import Appointment from "../Components/Appointment/Appointment"
import { styles } from "./MyAppointmentScreen.style"
import { useEffect, useState } from "react"
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Constants from "expo-constants"

const MyAppointmentScreen = ({navigation}: any) => {
    const [donation, setDonation] = useState<any>([])

    useEffect(()=>{
        (async ()=> {
            const user = await AsyncStorage.getItem("userId")
            await axios.get(`${Constants.expoConfig?.extra?.API_URL}/donation/getDonation/${{user}}`)
                .then((res) => {
                    setDonation(res.data.donation)
                })
        })()
    }, [])

    return (
        <View style={styles.background}>
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
        </View>
    )
}

export default MyAppointmentScreen;