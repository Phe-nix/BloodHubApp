import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// Sample data for help resources
const helpResources = [
  { id: "1", title: "What popular resource" },
  { id: "2", title: "What popular resource" },
  { id: "3", title: "What popular resource" },
  { id: "4", title: "What popular resource" },
  { id: "5", title: "What popular resource" },
];

const HelpCenterScreen = () => {
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
      <View style={styles.whitecontainer}>
        <Text style={styles.title}>Popular help resource</Text>

        {helpResources.map((item) => (
          <View style={styles.resourceItem} key={item.id}>
            <View style={styles.iconContainer}>
              <View style={styles.iconCircle}>
                <FontAwesome name="file-text" size={22} color="#fff" />
              </View>
            </View>
            <Text style={styles.resourceTitle}>{item.title}</Text>
          </View>
        ))}
        <View style={{borderTopWidth:1, borderColor:"#E99999", marginVertical:10}} ></View>
        <Text style={styles.title}>Need more help?</Text>
        <View style={styles.resourceItem}>
          
  <View style={styles.iconContainer}>
    <View style={styles.iconCircle}>
      <FontAwesome name="phone" size={22} color="#fff" />
    </View>
  </View>
  <View style={{ flex: 1}}>
    <Text style={styles.resourceTitle}>Contact us</Text>
    <Text style={{ color: "gray", paddingLeft:20 }}>Tell us more and we’ll help you get there</Text>
  </View>
</View>

      </View>
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

export default HelpCenterScreen;
