import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface NewsNotiProps {
  text: string;
}

const NewsNoti: React.FC<NewsNotiProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.notificationBox}>
        <Text style={styles.title}>News Notifications</Text>
        <Text style={styles.notificationText}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  notificationBox: {
    margin: 20,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  notificationText: {
    fontSize: 18,
    paddingLeft: 10,
  },
});

export default NewsNoti;
