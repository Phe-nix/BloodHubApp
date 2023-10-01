import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

const BookmarkScreen = ({ navigation }: any) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("History")}>
          <Text style={[styles.headerText, navigation.isFocused() && styles.activeText]}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Bookmark")}>
          <Text style={styles.headerText}>Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  activeText: {
    borderBottomWidth: 2, // Increase the width to create an underline effect
    borderBottomColor: "pink", // Set the underline color to pink
  },
});

export default BookmarkScreen;
