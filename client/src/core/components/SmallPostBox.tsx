import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

interface PostProps {
  onDelete: () => void; // Callback function for handling post deletion
}

const SmallPostBox: React.FC<PostProps> = ({ onDelete }) => {
  return (
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
          <TouchableOpacity onLongPress={onDelete}>
            <View style={styles.circle} />
          </TouchableOpacity>
        </View>
        <Text style={styles.date}>Date, City</Text>
        {/* Description */}
        <Text style={styles.description}>Description of the post goes here.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    width: "85%",
    marginTop: 15,
    backgroundColor: "pink",
    borderRadius: 20,
  },
  textRight: {
    flexDirection: "row",
  },
  leftContainer: {
    flex: 4,
    paddingRight: 5,
  },
  rightContainer: {
    flex: 5,
    paddingLeft: 5,
    paddingTop: 15,
  },
  image: {
    width: "100%",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "white", // Customize the color as needed
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    marginTop: -10,
    fontSize: 12,
    color: "gray",
  },
  description: {
    marginTop: 10,
    fontSize: 14,
  },
});

export default SmallPostBox;
