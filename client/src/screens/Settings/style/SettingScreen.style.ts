import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
        container: {
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: 20,
        },
        sectionHeader: {
          backgroundColor: "#F2F2F2",
          paddingVertical: 10,
          paddingLeft: 15,
          marginBottom: 10,
          borderBottomColor: "red",
          borderBottomWidth: 1,
        },
        sectionHeaderText: {
          fontSize: 22,
          fontWeight: "bold",
        },
        redText: {
          color: "black",
        },
        settingGroup: {
          backgroundColor: "#E2E2E2",
          borderRadius: 20,
          marginBottom: 10,
        },
        groupContainer: {
          paddingHorizontal: 10,
        },
        settingOption: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 15,
          borderBottomWidth: 1,
          borderBottomColor: "#E5E5E5",
        },
        settingOptionText: {
          fontSize: 16,
          marginLeft: 10,
        },
        rightIcon: {
          fontSize: 20,
          color: "gray", // Change the color to your preference
        },
        settingTextContainer: {
          flexDirection: "row",
          alignItems: "center",
        },
        settingIcon: {
          fontSize: 20,
          marginRight: 10,
          marginLeft: 5,
          color: "black", // Change the color to your preference
        },
      });