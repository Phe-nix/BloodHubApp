import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from "./Request.style"
import tel from "../../../../../assets/icon/DonateRequest/tel.png"
import blood from "../../../../../assets/icon/DonateRequest/bloodtype.png"
import age from "../../../../../assets/icon/DonateRequest/age.png"
import disease from "../../../../../assets/icon/DonateRequest/disease.png"

const Request = (props: any) => {
    return (
        <View>
            <View style={styles.underLine} />
            <View style={styles.profile}>
                <Image style={styles.profilePicture} source={props.profile} />
                <View>
                    <Text style={styles.profileName}>{props.name}</Text>
                    <Text style={styles.requestTime}>{props.time}</Text>
                    <View style={styles.profileAndInfo}>
                        <View style={styles.iconAndInfo}>
                            <Image style={styles.telIcon} source={tel} />
                            <Text style={styles.info}>{props.Tel}</Text>
                        </View>
                        <View style={styles.iconAndInfo}>
                            <Image style={styles.bloodIcon} source={blood} />
                            <Text style={styles.info}>{props.Blood}</Text>
                        </View>
                        <View style={styles.iconAndInfo}>
                            <Image style={styles.ageIcon} source={age} />
                            <Text style={styles.info}>{props.Age}</Text>
                        </View>
                        <View style={styles.iconAndInfo}>
                            <Image style={styles.diseaseIcon} source={disease} />
                            <Text style={styles.info}>{props.Disease}</Text>
                        </View>
                    </View>

                </View>
            </View>
            <View style={styles.button}>
                <TouchableOpacity style={styles.acceptButton}>
                    <Text style={styles.acceptButtonText}>อนุมัติ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.declineButton}>
                    <Text style={styles.declineButtonText}>ปฏิเสธ</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Request;