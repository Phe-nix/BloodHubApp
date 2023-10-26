import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Image,
} from "react-native";
import { styles } from "./HomeScreen.style";
import Button from "./Components/Button";
import appointment from "../../../assets/button/Appointment.png";
import Request from "../../../assets/button/Request.png";
import Location from "../../../assets/button/Location.png";
import Post from "./Components/Post";
import { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

const HomeScreen = ({ navigation }: any) => {
  const [user, setUser] = useState<any>(null);
  const [post, setPost] = useState<any>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const source = "Home";

  useEffect(() => {
    getUser();
    getPost();
  }, []);

  const getUser = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      const { data: res } = await axios.get(
        `${Constants.expoConfig?.extra?.API_URL}/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
          },
        }
      );
      setUser(res);
      setRefreshing(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getPost = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      const { data: res } = await axios.get(
        `${Constants.expoConfig?.extra?.API_URL}/posts/getAllPosts/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
          },
        }
      );
      setPost(res.posts);
      setRefreshing(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    getPost();
    getUser();
  };

  return (
    <ScrollView
      style={{ backgroundColor: "#F1F1F1" }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{ flexDirection: "column", marginTop: 20 }}>
        <View style={styles.button}>
          <View
            style={{
              paddingHorizontal: 30,
              paddingVertical: 10,
              flexDirection: "row",
              gap: 15,
            }}
          >
            <Image
              style={{ width: 60, height: 60, borderRadius: 30 }}
              source={{ uri: user?.profileImage }}
            />
            <View>
              <Text style={styles.welcome}>ยินดีต้อนรับ,</Text>
              <Text style={styles.userName}>
                {user?.firstName} {user?.lastName}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.button}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 25,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("My Appointment");
              }}
            >
              <Button
                image={appointment}
                text={"การนัดหมาย"}
                text_0={"ของฉัน"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Donate Request");
              }}
            >
              <Button image={Request} text={"คำขอบริจาค"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Find Health Units");
              }}
            >
              <Button image={Location} text={"ค้นหา"} text_0={"สถานพยาบาล"} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.postFeed}>ฟีดโพสต์</Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {post.length !== 0 ? (
            post?.map((item: any, index: any, key: any) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    navigation.navigate("PostDetail", {
                      post: item,
                      source: source,
                    });
                  }}
                >
                  <Post key={item.id} item={item} getPost={getPost} />
                </TouchableOpacity>
              );
            })
          ) : (
            <Text>ไม่มีโพสต์</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
