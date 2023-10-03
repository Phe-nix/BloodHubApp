import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface SmallNewsBoxProps {
  isVisible: boolean;
  onBookmarkPress: () => void;
}

const SmallNewsBox: React.FC<SmallNewsBoxProps> = ({ isVisible, onBookmarkPress }) => {
  return (
    isVisible && (
      <ScrollView style={styles.bgcolor}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            {/* Image */}
            <Image
              source={require("/Users/lazender/Documents/GitHub/mobile/BloodHubApp/client/assets/citizen1.png")}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.textRight}>
              <Text style={styles.name}>Suphanat Anumat</Text>
              <FontAwesome name="bookmark" size={24} color="gold" onPress={onBookmarkPress} />
            </View>
            <Text style={styles.description}>Description of the post goes here.</Text>
            <Text style={styles.date}>Date, City</Text>
          </View>
        </View>
      </ScrollView>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    width: "95%",
    marginTop: 15,
    borderRadius: 20,
    borderBottomWidth: 1,
    borderColor: "#ED8085",
    paddingBottom: 15,
  },
  bgcolor: {
    backgroundColor: "white",
    flex: 1,
  },
  textRight: {
    flexDirection: "row",
  },
  leftContainer: {
    flex: 4,
    paddingLeft: 15,
  },
  rightContainer: {
    flex: 5,
    paddingTop: 5,
    paddingLeft: 10,
  },
  image: {
    height: 100,
    width: "100%",
    borderRadius: 20,
  },
  circle: {
    position: "absolute",
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "white", // Customize the color as needed
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    paddingRight: 45,
  },
  date: {
    fontSize: 12,
    marginTop: 15,
    color: "gray",
  },
  description: {
    marginTop: 5,
    fontSize: 16,
  },
});

export default SmallNewsBox;
