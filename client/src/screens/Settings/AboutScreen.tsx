import { StyleSheet, Text, View } from "react-native";
import { styles } from "./style/About.style";

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

export default NewScreen;
