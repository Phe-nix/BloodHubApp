import { StyleSheet, Text, View } from "react-native";

const User = (props: any) => {
  return (
    <View style={styles.profile}>
      <View style={styles.profileImage} />
      <View>
        <Text style={styles.userName}>Norrapat Srimoonnoi</Text>
        <Text style={styles.subHeader}>โพสต์เมื่อ 14 กค 2555 | กรุงเทพ</Text>
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
    borderWidth: 1,
    borderColor: 'red',
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
