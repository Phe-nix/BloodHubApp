import React from "react";
import { Text, View, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./style/HelpCenterScreen.style";

// Sample data for help resources
const helpResources = [
  { id: "1", title: "คุณสมบัติการบริจาคเลือด" },

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



export default HelpCenterScreen;
