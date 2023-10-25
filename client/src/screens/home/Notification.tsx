import React from "react";
import { View, StyleSheet } from "react-native";
import NewsNoti from "./Components/Noti/NewsNoti"; // Import the component
import PostNoti from "./Components/Noti/PostNoti"; // Import the component
import EmergencyNoti from "./Components/Noti/EmergencyNoti";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.postcontainer}>
        <NewsNoti text={"asdadasad"} />
      </View>
      <View style={styles.postcontainer}>
        <PostNoti text={"a"} />
      </View>
      <View style={styles.postcontainer}>
        <EmergencyNoti text={"b"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  postcontainer: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default App;
