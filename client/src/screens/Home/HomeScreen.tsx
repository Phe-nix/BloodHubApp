import { Text, View, ScrollView, TouchableOpacity, RefreshControl } from "react-native";
import { styles } from "./HomeStyle/HomeScreen.style";
import Button from "./Components/Button";
import appointment from "../../../assets/button/Appointment.png";
import Request from "../../../assets/button/Request.png";
import Location from "../../../assets/button/Location.png";
import Post from "./Components/Post";
import picture from "../../../assets/picture/kitten.png";
import { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }: any) => {
  const [user, setUser] = useState<any>(null);
  const [post, setPost] = useState<any>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    getUser();
    getPost();
  }, [user]);

  const getUser = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      const { data: res } = await axios.get(
        `http://localhost:3000/user/${userId}`,
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
        `http://localhost:3000/posts/getAllPosts/${userId}`,
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
  }

  const onRefresh = () => {
    setRefreshing(true);
    getPost();
    getUser();
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <View>
        <View style={{ padding: 20 }}>
          <Text style={styles.welcome}>ยินดีต้อนรับ,</Text>
          <Text style={styles.userName}>{user?.firstName} {user?.lastName}</Text>
        </View>
        <View style={styles.underLine_0} />
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("My Appointment");
            }}
          >
            <Button image={appointment} text={"การนัดหมาย"} text_0={"ของฉัน"} />
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
        <View style={{borderWidth: 2, borderBottomWidth: 0, borderTopRightRadius: 20, borderTopLeftRadius: 20, borderColor: '#FF6D6E'}}>
          <Text style={styles.postFeed}>ฟีดโพสต์</Text>
          <View style={{ borderWidth: 1, borderColor: "#D9D9D9" }} />
        </View>
        <View>
          { post ?
            (
              post?.map((item: any, index: any, key: any) => {
                return(
                  <TouchableOpacity key={item.id} onPress={()=>{
                    navigation.navigate("PostDetail", { post: item})
                  }}>
                    <Post
                      key={item.id}
                      item={item}
                      getPost={getPost}
                    />
                  </TouchableOpacity>
                );
              })
            )
            :
            (
              <Text>ไม่มีโพสต์</Text>
            )
          }
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
