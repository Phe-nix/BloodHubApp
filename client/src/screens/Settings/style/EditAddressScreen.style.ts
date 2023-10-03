import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF", // Background color of the screen
      paddingTop: 40, // Margin from the top of the screen
      alignItems: "center",
    },
    border: {
      borderWidth: 3, // Border width
      borderColor: "lightgray", // Border color
      width: 350, // Border width
      padding: 16,
      borderRadius: 10, // Border radius
      backgroundColor: "white", // White background color
      marginBottom: 20, // Margin between border and button
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 8, // Spacing between title and address
    },
    address: {
      fontSize: 16,
      fontWeight: "normal",
      color: "gray",
      marginBottom: 8, // Spacing between address and button
    },
    button: {
      backgroundColor: "#ED8085", // Button background color
      padding: 10,
      alignItems: "center",
      borderRadius: 20, // Button border radius
    },
    buttonText: {
      color: "white", // Button text color
      fontWeight: "bold",
      fontSize: 24,
    },
  });