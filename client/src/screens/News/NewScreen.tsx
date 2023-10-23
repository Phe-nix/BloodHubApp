import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./NewScreen.style"
import New from "./Components/New"
import { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NewScreen = ({ navigation }: any) => {
  const [news, setNews] = useState<any>([]);

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
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.background}>
      <Text style={styles.lastestNews}>ข่าวสารล่าสุด</Text>
      {
        news?.map((item: any, index: any, key: any) => {
          if (index === 0) {
            return(
              <TouchableOpacity key={key} onPress={() => { navigation.navigate('NewDetail', { post: item })}}>
                <View style={{marginBottom:10}}>
                  <Image style={styles.lastestNewsPicture} source={{uri: item.image}} />
                  <Text style={styles.title}>{item.title}</Text>

                  <Text style={styles.description}>
                    {item.description}
                    <Text style={styles.seeMore}> see more</Text>
                  </Text>
                  <View style={styles.timeAndBookmark}>
                    <Text style={styles.lastestTimeNews}>{item.createdAt}</Text>
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
          <TouchableOpacity key={key} onPress={() => { navigation.navigate('NewDetail', { post: item })}}>
            <New image={item.image} title={item.title} description={item.description} time={item.createdAt}/>
          </TouchableOpacity>
          )
        })
      }
    </View>
  );
};

export default NewScreen;