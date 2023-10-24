import { Text, View, Image, TouchableOpacity, ScrollView, RefreshControl } from "react-native";
import { styles } from "./NewScreen.style"
import New from "./Components/New"
import { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { differenceInDays } from "date-fns";

const NewScreen = ({ navigation }: any) => {
  const [news, setNews] = useState<any>([]);
  const [expandedText, setExpandedText] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      const { data: res } = await axios.get(
        `http://localhost:3000/news/getAllNews/${userId}`,
      )
      setNews(res.news);
      setRefreshing(false);
    } catch (error) {
      console.log(error);
      setRefreshing(false);
    }
  }

  const onRefresh = () => {
    setRefreshing(true); // Start the refreshing animation
    getNews();
  }

  return (
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
              <TouchableOpacity key={item.id} onPress={() => { navigation.navigate('NewDetail', { post: item })}}>
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
                    <TouchableOpacity onPress={ async ()=>{
                      if(item.isBookmarked){
                        await axios.delete(`http://localhost:3000/bookmark/news/delete`, {
                          params: {
                            userId: await AsyncStorage.getItem("userId"),
                            newId: item.id,
                          }
                        })
                        .then((res)=>{
                          getNews();
                        })
                      } else {
                        await axios.post(`http://localhost:3000/bookmark/news/add`,
                        {
                          newId: item.id,
                          userId: await AsyncStorage.getItem("userId")
                        })
                        .then((res)=>{
                          getNews();
                        })
                      }
                    }}>
                      <Image style={styles.bookmarkIcon} source={item.isBookmarked ? require('../../../assets/icon/icon_bookmarked.png') : require('../../../assets/icon/icon_bookmark.png')} />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }
          return (
          <TouchableOpacity key={item.id} onPress={() => { navigation.navigate('NewDetail', { post: item })}}>
            <New item={item}/>
          </TouchableOpacity>
          )
        })
      }
    </ScrollView>
  );
};

export default NewScreen;