import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Touchable, RefreshControl } from "react-native";
import SmallPostBox from "../../../core/components/SmallPostBox";
import axios from "axios";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SmallNewsBox from "../../../core/components/SmallNewsBox";

const App = ({navigation, route} : any) => {
  const [posts, setPosts] = useState<any>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    fetch();
  }, [])

  const fetch = async () => {
    if(route.params.source === "history"){
      const userId = await AsyncStorage.getItem("userId");
      await axios.get(`${Constants.expoConfig?.extra?.API_URL}/posts/getPostByUser/${userId}`)
        .then((res) => {
          setPosts(res.data.posts)
          setRefreshing(false);
        })
    } else if (route.params.source === "bookmark") {
      const userId = await AsyncStorage.getItem("userId");
      await axios.get(`${Constants.expoConfig?.extra?.API_URL}/bookmark/post/${userId}`)
        .then((res) => {
          setPosts(res.data.bookmark)
          setRefreshing(false);
        })
    }
  }

  const onRefresh = () => {
    setRefreshing(true);
    fetch();
  }

  return (
    <ScrollView 
      style={styles.bgcolor}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      {
        posts.map((item: any) => {
          if(route.params.source === "history"){
            return (
              <SmallPostBox key={item.id} item={item} fetch={fetch} navigation={navigation} source={route.params.source}/>
            )
          } else if (route.params.source === "bookmark") {
            return (
              <SmallPostBox key={item.id} item={item.post} fetch={fetch} navigation={navigation} source={route.params.source}/>
            )
          }
          
          
        })
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    bgcolor:{
        backgroundColor: "white",
        flex: 1,
    }
});
export default App;
