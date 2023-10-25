import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface EmergencyNotiProps {
  text: string;
}

const EmergencyNoti: React.FC<EmergencyNotiProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.notificationBox}>
        <Text style={styles.title}>Emergency Notifications</Text>
        <Text style={styles.notificationText}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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

export default EmergencyNoti;
