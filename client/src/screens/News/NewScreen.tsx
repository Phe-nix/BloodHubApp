import { Text, View, Image, TouchableOpacity, ScrollView, RefreshControl, ActivityIndicator } from "react-native";
import { styles } from "./NewScreen.style"
import New from "./Components/New"
import { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { differenceInDays } from "date-fns";
import Constants from "expo-constants";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const NewScreen = ({ navigation }: any) => {
  const [news, setNews] = useState<any>([]);
  const [expandedText, setExpandedText] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
      getNews();
  }, []);

  useEffect(() => {
    console.log();
    
  }, [news])

  const getNews = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      const { data: res } = await axios.get(
        `${Constants.expoConfig?.extra?.API_URL}/news/getAllNews/${userId}`,
      )
      setNews(res.news);
      setRefreshing(false);
    } catch (error) {
      console.log(error);
      setRefreshing(false);
    }
  }

  const toggleBookmark = async (item: any) => {
    try {
      if (item.isBookmark) {
        await axios.delete(`${Constants.expoConfig?.extra?.API_URL}/bookmark/news/delete`, {
          params: {
            userId: await AsyncStorage.getItem("userId"),
            newId: item.id,
          },
        });
      } else {
        await axios.post(`${Constants.expoConfig?.extra?.API_URL}/bookmark/news/add`, {
          newId: item.id,
          userId: await AsyncStorage.getItem("userId"),
        });
      }

      getNews();
    } catch (error) {
      console.log(error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    getNews();
  }
  
  return news.length === 0 ? (
    <View style={{flex: 1, justifyContent: 'center',}}>
      <ActivityIndicator size="small" color="#E99999" />
    </View>
  ) :

  (
    <ScrollView
      style={styles.background}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <Text style={styles.lastestNews}>ข่าวสารล่าสุด</Text>
      {
        news?.map((item: any, index: any, key: any) => {
          if (index === 0) {
            const daysAgo = differenceInDays(new Date(), new Date(item.createdAt))

            return(
              <TouchableOpacity key={item.id} onPress={() => { navigation.navigate('NewDetail', { news: item })}}>
                <View style={{marginBottom:10}}>
                  <Image style={styles.lastestNewsPicture} source={{uri: item.image}} />
                  <Text style={styles.title}>{item.title}</Text>

                  <Text style={styles.description}>
                  {expandedText ? item.description : item.description.slice(0, 100) + (item.description.length > 100 ? '...' : '')}
                    {item.description.length > 100 && (
                      <Text
                        style={styles.seeMore}
                        onPress={() => setExpandedText(!expandedText)}
                      >
                        {" " + (expandedText ? "Read less" : "Read more")}
                      </Text>
                    )}
                  </Text>
                  <View style={styles.timeAndBookmark}>
                    <Text style={styles.lastestTimeNews}>
                      {daysAgo === 0 ? `Today` : `${daysAgo} Days Ago`} 
                    </Text>
                    <TouchableOpacity onPress={() => toggleBookmark(item)}>
                      <Image
                        style={styles.bookmarkIcon}
                        source={item.isBookmark ? require('../../../assets/icon/icon_bookmarked.png') : require('../../../assets/icon/icon_bookmark.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }
          return (
          <View key={item.id}>
            <TouchableOpacity onPress={() => { navigation.navigate('NewDetail', { news: item })}}>
              <New item={item} getNews={getNews}/>
            </TouchableOpacity>
          </View>
        )
        })
      }
    </ScrollView>
  );
};

export default NewScreen;