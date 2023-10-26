import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, RefreshControl, TouchableOpacity, ActivityIndicator } from "react-native";
import SmallNewsBox from "../../../core/components/SmallNewsBox";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const News: React.FC = ({navigation} : any) => {
  const [news, setNews] = useState<any>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    fetch();
  }, [])

  const fetch = async () => {
    const userId = await AsyncStorage.getItem("userId");
    await axios.get(`${Constants.expoConfig?.extra?.API_URL}/bookmark/news/${userId}`)
      .then((res) => {
        setNews(res.data.bookmark)
        setRefreshing(false);
      })
  }

  const onRefresh = () => {
    setRefreshing(true);
    fetch();
  }

  return news.length === 0 ? (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size="small" color="#E99999" />
    </View>
  ) : (
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
        news.map((item: any) => {
          return (
              <SmallNewsBox key={item.id} item={item} fetch={fetch} navigation={navigation}/>
          )
        })
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bgcolor: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default News;
