import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { differenceInDays } from "date-fns";

const Appointment = ({item, source, navigation}: any) => {
    const daysAgo = differenceInDays(new Date(), new Date(item.createdAt));

    return (
        <TouchableOpacity style={styles.bgcolor} onPress={() => {
            navigation.navigate('Home', {
            screen: 'PostDetail',
            params: { post: item.post, source: source },
            });
        }}>
            <View style={styles.container}>
            <View style={styles.leftContainer}>
                {/* Image */}
                <Image
                source={{uri: item.post.image}}
                style={styles.image}
                resizeMode="cover"
                />
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.textRight}>
                    <Text style={styles.name}>{item.post.title.slice(0,40) + "..."}</Text>
                </View>
                <Text style={styles.date}>
                {daysAgo === 0 ? `Today` : `${daysAgo} Days Ago`}
                </Text>
                <Text style={{
                    ...styles.description,
                    color: item.status === 'PENDING' ? 'red' : '#07E707'
                    }}>{item.status}</Text>

            </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignSelf: "center",
      width: "95%",
      marginTop: 15,
      borderRadius: 20,
      borderBottomWidth: 1,
      borderColor: "#ED8085",
      paddingBottom: 15,
    },
    bgcolor: {
      backgroundColor: "white",
      flex: 1,
    },
    textRight: {
      flexDirection: "row",
    },
    leftContainer: {
      flex: 4,
      paddingLeft: 15,
    },
    rightContainer: {
      flex: 5,
      paddingTop: 5,
      paddingLeft: 10,
    },
    image: {
      height: 100,
      width: "100%",
      borderRadius: 20,
    },
    circle: {
      position: "absolute",
      width: 30,
      height: 30,
      borderRadius: 50,
      backgroundColor: "white", // Customize the color as needed
      marginLeft: 15,
    },
    name: {
      fontSize: 16,
      fontWeight: "bold",
      paddingRight: 45,
    },
    date: {
      fontSize: 12,
      marginTop: 2,
      marginBottom: 5,
      color: "gray",
    },
    description: {
      marginTop: 5,
      fontSize: 14,
    //   fontWeight: "bold",
    },
  });

export default Appointment;