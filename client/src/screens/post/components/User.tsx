import { differenceInDays } from "date-fns";
import { Image, StyleSheet, Text, View } from "react-native";

const User = (props: any) => {
  const daysAgo = differenceInDays(new Date(), new Date(props.time));

  return (
    <View style={styles.profile}>
      <Image source={{uri: props.image}} style={styles.profileImage}/>
      <View>
        <Text style={styles.userName}>{props.userName}</Text>
        <Text style={styles.subHeader}>{daysAgo === 0 ? `Today` : `${daysAgo} Days Ago`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  userName: {
    fontSize: 16
  },
  subHeader: {
    fontSize: 12,
    color: '#856464'
  },
});

export default User;
