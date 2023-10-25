import { View, Text, Image, StyleSheet } from "react-native";

const Card = (props: any) => {
  return (
    <View style={styles.container}>
      <Image style={{ width: 60 }} source={props.image} />
      <View
        style={{
          alignItems: "center",
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: "#E5E5E5",
          marginTop: 10,
          padding: 4,
        }}
      >
        <Text style={{ fontSize: 10 }}>เลือดที่ต้องการ</Text>
        <Text style={{ fontSize: 12 }}>{props.unit}</Text>
        <Text style={{ fontSize: 10 }}>ยูนิต/ต่อเดือน</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "red",
          backgroundColor: "pink",
          marginTop: 10,
          padding: 4,
        }}
      >
        <Text style={{ fontSize: 10 }}>เลือดที่ได้รับ</Text>
        <Text style={{ fontSize: 10 }}>{props.recieve}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 90,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 10
  },
});
export default Card;
