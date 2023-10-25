import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 16,
      backgroundColor: "white",
    },
    profileImageContainer: {
      alignItems: "center",
      marginBottom: 20,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderWidth: 1,
    },
    genderTitleContainer: {
      marginBottom: 10,
    },
    fieldTitle: {
      width: 100,
      fontWeight: "bold",
      fontSize: 16,
    },
    fieldValue: {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: "#ED8085",
      paddingVertical: 4,
      fontSize: 16,
    },
    genderContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    genderButton: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      margin: 4,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#ED8085",
      padding: 10,
    },
    selectedGender: {
      backgroundColor: "#ED8085",
      opacity: 0.7,
    },
    genderText: {
      fontSize: 16,
      color: "#ED8085",
    },
    inputWithIcon: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
    },
    editIcon: {
      marginLeft: 10,
    },
    inputWithUnit: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
    },
    unitText: {
      marginLeft: 10,
    },
    pickerContainer: {
      flex: 1,
      borderBottomColor: "#ED8085",
      marginBottom: 10,
    },
    buttonContainer: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 5,
    },
    saveButton: {
      backgroundColor: "white", // You can change the color as needed
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
      width: 210,
      marginRight: 10,
      height: 55,
      borderWidth: 2,
      borderColor: "#ED8085",
    },
    saveButtonText: {
      color: "#ED8085",
      fontWeight: "bold",
      fontSize: 18,
    },
    fieldContainer: { // Add this fieldContainer style
      flexDirection: "row",
      alignItems: "center",
    },
  });
  
  export const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
      ...styles.fieldValue,
      flex: 1,
    },
    inputIOS: {
      ...styles.fieldValue,
      flex: 1,
    },
  
  });