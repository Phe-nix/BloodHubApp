import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E99999",
    },
    searchBar: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#fff",
      borderRadius: 30,
      paddingHorizontal: 16,
      paddingVertical: 10,
      marginVertical: 20,
      marginHorizontal: 20,
      width: "90%",
    },
    searchInput: {
      flex: 1,
      marginLeft: 12,
      fontSize: 22,
      color: "#000000",
    },
    whitecontainer: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      width: "100%",
      paddingHorizontal: 20, // Add padding to your content as needed
      paddingTop: 20, // Add padding to your content as needed
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 5,
      marginBottom : 5,
      paddingLeft: 10,
    },
    resourceItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 5,
      marginTop: 5, // Adjust the spacing between items as needed
    },
    iconContainer: {
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
    },
    iconCircle: {
      width: 40,
      height: 40,
      borderRadius: 50,
      backgroundColor: "#E99999",
      justifyContent: "center",
      alignItems: "center",
    },
    resourceTitle: {
      fontSize: 22,
      color: "#000000",
      paddingLeft: 20,
    },
  });
  