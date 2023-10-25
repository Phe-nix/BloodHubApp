import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./style/HelpCenterScreen.style";

// Sample data for help resources
const helpResources = [

  { id: "1", title: "คุณสมบัติของผู้บริจาคโลหิต", page: "Feature of donater" },
  { id: "2", title: "ควรเตรียมตัวอย่างไรก่อนไปบริจาคเลือด", page: "How to prepare before donate" },
  { id: "3", title: "ฉันจะขอรับบริจาคเลือดได้อย่างไร", page: "How to make request" },
  { id: "4", title: "ฉันจะขอรับบริจาคเลือดแบบฉุกเฉินได้อย่างไร", page: "How to make emergency request" },
  { id: "5", title: "ฉันจะเปลี่ยนรหัสของฉันได้อย่างไร", page: "How to change password" },

];

const HelpCenterScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <FontAwesome name="search" size={15} color="#7A7A7A" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Help"
          placeholderTextColor="#B8B8B8"
        />
      </View>

      {/* White Container */}
      <View style={styles.whitecontainer}>
        <Text style={styles.title}>คำถามยอดฮิต</Text>
        {helpResources.map((item) => (
          <TouchableOpacity style={styles.resourceItem} key={item.id} onPress={() => navigation.navigate(item.page)}>
            <View >
              <View style={styles.iconCircle}>
                <FontAwesome name="file-text" size={20} color="#fff" />
              </View>
            </View>
            <Text style={styles.resourceTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
        <View style={{ borderTopWidth: 1, borderColor: "#E99999", marginVertical: 15 }} ></View>
        <Text style={styles.title}>ต้องการความช่วยเหลือเพิ่มเติมรึป่าว?</Text>
        <View style={styles.resourceItem}>

          <View>
            <View style={styles.iconCircle}>
              <FontAwesome name="phone" size={20} color="#fff" />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.resourceTitle}>ติดต่อเรา</Text>
            <Text style={{ color: "#7A7A7A", marginLeft: 10 }}>บอกพวกเรา แล้วเราจะช่วยคุณเอง</Text>
          </View>
        </View>

      </View>
    </View>
  );
};



export default HelpCenterScreen;
