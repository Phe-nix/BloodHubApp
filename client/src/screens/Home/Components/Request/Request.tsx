import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from "./Request.style"
import tel from "../../../../../assets/icon/DonateRequest/tel.png"
import blood from "../../../../../assets/icon/DonateRequest/bloodtype.png"
import age from "../../../../../assets/icon/DonateRequest/age.png"
import disease from "../../../../../assets/icon/DonateRequest/disease.png"
import { differenceInDays, differenceInYears } from 'date-fns';
import axios from 'axios';

const Request = (props: any) => {
    const { item } = props;
    const daysAgo = differenceInDays(new Date(), new Date(item.createdAt));
    const dob = differenceInYears(new Date(), new Date(item.user.dob));

    return (
        <View>
            <View style={styles.underLine} />
            <View style={styles.profile}>
                <Image style={styles.profilePicture} source={{uri: item.user.profileImage}} />
                <View>
                    <Text style={styles.profileName}>{`${item.user.firstName} ${item.user.lastName}`}</Text>
                    <Text style={styles.requestTime}>{daysAgo === 0 ? `Today` : `${daysAgo} Days Ago`}</Text>
                    <View style={styles.profileAndInfo}>
                        <View style={styles.iconAndInfo}>
                            <Image style={styles.telIcon} source={tel} />
                            <Text style={styles.info}>{item.user.phoneNumber}</Text>
                        </View>
                        <View style={styles.iconAndInfo}>
                            <Image style={styles.bloodIcon} source={blood} />
                            <Text style={styles.info}>{item.user.bloodType}</Text>
                        </View>
                        <View style={styles.iconAndInfo}>
                            <Image style={styles.ageIcon} source={age} />
                            <Text style={styles.info}>{`อายุ ${dob} ปี`}</Text>
                        </View>
                        <View style={styles.iconAndInfo}>
                            <Image style={styles.diseaseIcon} source={disease} />
                            <Text style={styles.info}>{item.user.disease}</Text>
                        </View>
                    </View>

                </View>
            </View>
            <View style={styles.button}>
                <TouchableOpacity style={styles.acceptButton} onPress={ async () => {
                    await axios.put(`http://localhost:3000/donation/update`,
                    {
                        userId: item.user.id,
                        donationId: item.donationId,
                        donationHistoryId: item.donationHistoryId,
                        reservationId: item.id,
                        status: "APPOINTED"
                    })
                        .then((res) => {
                            console.log(res.data);
                            
                            props.fetch();
                        })
                }}>
                    <Text style={styles.acceptButtonText}>อนุมัติ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.declineButton}onPress={ async () => {
                    await axios.put(`http://localhost:3000/donation/update`,
                    {
                        userId: item.user.id,
                        donationId: item.donationId,
                        donationHistoryId: item.donationHistoryId,
                        reservationId: item.id,
                        status: "DENIED"
                    })
                        .then((res) => {
                            console.log(res.data);

                            props.fetch();
                        })
                }}>
                    <Text style={styles.declineButtonText}>ปฏิเสธ</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Request;