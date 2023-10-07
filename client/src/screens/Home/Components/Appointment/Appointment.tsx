import { View, Image, Text } from "react-native";
import { styles } from "./Appointment.style";
import cross from "../../../../../assets/icon/MyAppointment/cross.png"

const Appointment = (props: any) => {
    return (
        <View style={styles.appointMent}>
            <Image style={styles.picture} source={props.picture} />
            <View style={styles.box}>
                <View style={styles.profileAndCross}>
                    <View style={styles.profile}>
                    <Image style={styles.pictureProfile} source={props.pictureProfile} />
                    <View style={styles.detail}>
                        <Text style={styles.nameProfile}>{props.nameProfile}</Text>
                        <Text style={styles.postTime}>{props.date}</Text>
                    </View>
                    </View>
                    <Image style={styles.cross} source={cross} />      
                </View>
                <Text style={styles.description}>{props.description}</Text>
                <Text style={styles.pending}>{props.status}</Text>
            </View>
        </View>
    )
}

export default Appointment;