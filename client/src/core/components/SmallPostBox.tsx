import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface PostProps {
  onDelete: () => void; // Callback function for handling post deletion
}

const SmallPostBox: React.FC<PostProps> = ({ onDelete }) => {
  const [isCircleVisible, setCircleVisible] = useState(false);

  const handlerLongClick = () => {
    // Toggle the visibility of the circle
    setCircleVisible(!isCircleVisible);
  };

  const handleCirclePress = () => {
    // Check if the circle is visible before handling the click event
    if (isCircleVisible) {
      onDelete(); // Trigger the onDelete callback
    }
  };

  return (
    <TouchableOpacity style={styles.container} onLongPress={handlerLongClick}>
      <View style={styles.leftContainer}>
        {/* Image */}
        <Image
          source={require("../../../assets/citizen1.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.rightContainer}>
        <View style={styles.textRight}>
          <Text style={styles.name}>Suphanat Anumat</Text>
          {isCircleVisible && (
            <TouchableOpacity 
            onPress={handleCirclePress}>
              <View style={styles.circle} />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.date}>Date, City</Text>
        {/* Description */}
        <Text style={styles.description}>Description of the post goes here.</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    width: "85%",
    marginTop: 15,
    backgroundColor: "#FDE8E9",
    borderRadius: 20,
    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
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
  },
  date: {
    fontSize: 12,
    color: "gray",
  },
  description: {
    marginTop: 10,
    fontSize: 14,
  },
});

export default SmallPostBox;
