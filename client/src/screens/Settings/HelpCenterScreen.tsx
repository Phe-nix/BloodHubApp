import React from "react";
import { Text, View, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./style/HelpCenterScreen.style";

// Sample data for help resources
const helpResources = [
  { id: "1", title: "ฉันจะสามารถดูประวัติการบริจาคเลือดของฉันได้อย่างไร"},
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
        <Text style={styles.title}>คำถามยอดฮิต</Text>

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
        <Text style={styles.title}>ต้องการความช่วยเหลือ?</Text>
        <View style={styles.resourceItem}>
          
  <View style={styles.iconContainer}>
    <View style={styles.iconCircle}>
      <FontAwesome name="phone" size={22} color="#fff" />
    </View>
  </View>
  <View style={{ flex: 1}}>
    <Text style={styles.resourceTitle}></Text>
    <Text style={{ color: "gray", paddingLeft:20 }}>Tell us more and we’ll help you get there</Text>
  </View>
</View>

      </View>
    </View>
  );
};



export default HelpCenterScreen;
