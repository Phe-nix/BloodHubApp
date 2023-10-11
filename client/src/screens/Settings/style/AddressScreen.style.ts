import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    panel: {
      backgroundColor: "rgba(237, 128, 133, 0.5)", // Pink color with opacity
      width: "100%",
      padding: 12,
      flexDirection: "column", // Stack children elements vertically
      alignItems: "center", // Center horizontally
    },
    panelContent: {
      flexDirection: "row", // Make children elements align horizontally
      alignItems: "center", // Center vertically
      marginBottom: 6, // Add spacing between content and the text below
    },
    icon: {
      marginRight: 10, // Add spacing between icon and text
    },
    panelText: {
      color: "#ED8085",
      fontWeight: "bold",
      fontSize: 18,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      borderBottomColor: "lightgray",
      borderBottomWidth: 1,
      padding: 10,
      marginBottom: 12,
      fontSize: 16,
    },
    map: {
      height: 400,
      marginBottom: 15,
    },
    saveButton: {
      backgroundColor: "#ED8085", // You can change the color as needed
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
      width: 350,
      height: 55,
      alignSelf: "center", // Center the button horizontally
    },
    saveButtonText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 18,
    },
  });