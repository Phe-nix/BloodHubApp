import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: "white",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 24,
      paddingLeft: 8,
    },
    notificationSetting: {
      borderTopColor: "#ED8085",
      borderTopWidth: 2,
      marginBottom: 24,
      marginTop: 16,
    },
    notificationSettingRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 16,
    },
    bellIcon: {
      marginRight: 16,
    },
    muteText: {
      flex: 1,
      fontSize: 18,
    },
    onOffText: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 8,
      paddingRight: 16,
      color: "gray",
    },
    additionalText: {
      fontSize: 16,
      color: "gray",
      marginTop: 8,
    },
  });