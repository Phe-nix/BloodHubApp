import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";
import { differenceInDays } from "date-fns";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

const Post = (props: any, { navigation }: any) => {
  const { item } = props;
  const [expandedText, setExpandedText] = useState<boolean>(false);

  const daysAgo = differenceInDays(new Date(), new Date(item.createdAt));

  return (
    <View
      style={{
        borderWidth: 1,
        padding: 12,
        borderColor: "#D9D9D9",
        borderRadius: 10,
        marginHorizontal: 50,
        marginVertical: 10,
        backgroundColor: "#FFFFFF",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 5,
          marginVertical: 10,
          width: "100%"
        }}
      >
        <View style={{ flexDirection: "row", width: "70%" }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={{ uri: item.user.profileImage }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text
              style={{ fontSize: 18, fontWeight: "bold" }}
            >{`${item.user.firstName} ${item.user.lastName}`}</Text>
            <Text>{daysAgo === 0 ? `Today` : `${daysAgo} Days Ago`}</Text>
          </View>
          <View style={{ width: 20, height: 20, borderRadius: 10 }} />
        </View>
        <View style={{marginRight: 10}}>
          <TouchableOpacity
            onPress={async () => {
              if (item.isBookmarked) {
                await axios
                  .delete(
                    `${Constants.expoConfig?.extra?.API_URL}/bookmark/post/delete`,
                    {
                      params: {
                        userId: await AsyncStorage.getItem("userId"),
                        postId: item.id,
                      },
                    }
                  )
                  .then((res) => {
                    props.getPost();
                  });
              } else {
                await axios
                  .post(
                    `${Constants.expoConfig?.extra?.API_URL}/bookmark/post/add`,
                    {
                      postId: item.id,
                      userId: await AsyncStorage.getItem("userId"),
                    }
                  )
                  .then((res) => {
                    props.getPost();
                  });
              }
            }}
          >
            <Image
              style={{ width: 18, height: 20 }}
              source={
                item.isBookmarked
                  ? require("../../../../assets/icon/icon_bookmarked.png")
                  : require("../../../../assets/icon/icon_bookmark.png")
              }
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 10 }}>
        {item.title.length > 100 ? item.title.slice(0, 100) + "..." : "..."}
      </Text>
      <Image
        style={{ width: "auto", height: 300 }}
        source={{ uri: item.image }}
      />
      <View style={{ marginTop: 10, marginLeft: 8 }}>
        <Text style={{ fontSize: 15 }}>
          {expandedText
            ? item.description
            : item.description.slice(0, 100) +
              (item.description.length > 100 ? "..." : "")}
        </Text>
        {item.description.length > 100 && (
          <Text
            style={{ color: "#FA9598", marginTop: 10 }}
            onPress={() => setExpandedText(!expandedText)}
          >
            {" " + (expandedText ? "Read less" : "Read more")}
          </Text>
        )}
      </View>
    </View>
  );
};

export default Post;
