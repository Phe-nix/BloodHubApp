import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const NewScreen = () => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <FontAwesome name="search" size={24} color="black" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Help"
          placeholderTextColor="#B0B0B0"
        />
      </View>

      {/* White Container */}
      <View style={styles.whitecontainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 18,
    color: "#000000",
  },
  whitecontainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
  },
});

export default NewScreen;
