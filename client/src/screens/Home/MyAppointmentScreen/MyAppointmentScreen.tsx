import { View } from "react-native"
import picture from "../../../../assets/picture/kitten.png"
import Appointment from "../Components/Appointment/Appointment"
import { styles } from "./MyAppointmentScreen.style"

const MyAppointmentScreen = () => {
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Appointment picture={picture} pictureProfile={picture} nameProfile={"ศุภณัฐ อนุมาตร"} date={"22 พ.ค. 2546 · สุราษฎร์ธานี"} description={"ฉันรักแมว"} status={"· รออนุมัติ "} />
            </View>

        </View>


    )
}

export default MyAppointmentScreen;