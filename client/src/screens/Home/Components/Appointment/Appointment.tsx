import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./Appointment.style";
import { differenceInDays } from "date-fns";

const Appointment = ({item, navigation}: any) => {
    const daysAgo = differenceInDays(new Date(), new Date(item.createdAt));

    return (
        <View style={styles.appointMent}>
            <TouchableOpacity key={item.id} style={{flexDirection: 'row'}} onPress={()=> {
                navigation.navigate("PostDetail", {post: item.post, source: "appointment"})
            }}>
                <Image style={styles.picture} source={{uri: item.post.image}} />
                <View style={styles.box}>
                    <View style={styles.profileAndCross}>
                        <View style={styles.profile}>
                        <Image style={styles.pictureProfile} source={{uri: item.post.user.profileImage}} />
                        <View style={styles.detail}>
                            <Text style={styles.nameProfile}>{`${item.post.user.firstName} ${item.post.user.lastName}`}</Text>
                            <Text style={styles.postTime}>{daysAgo === 0 ? `Today` : `${daysAgo} Days Ago`}</Text>
                        </View>
                        </View>
                    </View>
                    <Text style={styles.description}>{item.post.title.slice(0, 50) + '...'}</Text>
                    <Text style={styles.pending}>{item.status}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Appointment;