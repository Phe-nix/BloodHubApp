import { StyleSheet, Text, View } from "react-native";

const NewScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.whitecontainer}>
        <View style={{marginVertical:"70%"}}>
          <View style={styles.image}></View>
          <View style={styles.centeredText}>
            <Text style={{ fontWeight: "bold" }}>Blood Hub</Text>
            <Text>Version 1.00</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E99999",
  },
  whitecontainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginVertical: 50,
    alignSelf: "center",
    width: "80%",
  },
  image: {
    justifyContent: "center",
    backgroundColor: "#E99999",
    borderRadius: 20,
    alignSelf: "center",
    width: 70,
    height: 70,
  },
  centeredText: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});

export default NewScreen;
