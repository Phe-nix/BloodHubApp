import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { differenceInDays } from "date-fns";
import Constants from "expo-constants";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface SmallNewsBoxProps {
  isVisible: boolean;
  onBookmarkPress: () => void;
}

const SmallPostBox: React.FC<any> = ({ item, fetch, navigation, source }) => {
  const post = item
  const daysAgo = differenceInDays(new Date(), new Date(post.createdAt));

  return (
    <TouchableOpacity style={styles.bgcolor} onPress={() => {
      navigation.navigate('Home', {
        screen: 'PostDetail',
        params: { post: post, source: source },
      });
    }}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            {/* Image */}
            <Image
              source={{uri: post.image}}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.textRight}>
              <Text style={styles.name}>{post.title.slice(0,40) + "..."}</Text>
              <TouchableOpacity onPress={ async ()=>{
                await axios.delete(`${Constants.expoConfig?.extra?.API_URL}/bookmark/post/delete`, {
                  params: {
                    userId: await AsyncStorage.getItem("userId"),
                    postId: item.id,
                  }
                })
                .then((res)=>{
                  fetch();
                })
              
            }}>
              <Image style={{width: 18, height:20, position: 'absolute', top: 0, right: 20}} source={post.isBookmark ? require('../../../assets/icon/icon_bookmarked.png') : require('../../../assets/icon/icon_bookmark.png')} />
            </TouchableOpacity>
            </View>
            <Text style={styles.date}>
              {daysAgo === 0 ? `Today` : `${daysAgo} Days Ago`}
            </Text>
            <Text style={styles.description}>{post.description.slice(0,60) + "..."}</Text>
          </View>
        </View>
      </TouchableOpacity>
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
    marginTop: 2,
    marginBottom: 5,
    color: "gray",
  },
  description: {
    marginTop: 5,
    fontSize: 14,
  },
});

export default SmallPostBox;
