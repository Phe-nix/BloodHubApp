import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import {styles} from "./NewDetailScreen.style"
import bookmark from "../../../assets/icon/icon_bookmark.png"
import { useEffect, useState } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { set, differenceInDays } from 'date-fns'
import Constants from 'expo-constants'

const NewDetailScreen = ({route} : any) => {
  const { news } = route.params
  
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false)
  const daysAgo = differenceInDays(new Date(), new Date(news.createdAt))

  useEffect(() => {
    if(news.isBookmark){
      setIsBookmarked(true)
    }
  }, [])

  return (
    <ScrollView style={styles.background}>
        <View style={styles.container}>
            <View style={{marginTop:10}}>
                <Text style={styles.title}>{news.title}</Text>
                <View style={styles.timeAndBookmark}>
                    <Text style={styles.time}>
                      {daysAgo === 0 ? `Today` : `${daysAgo} Days Ago`} 
                    </Text>
                    <TouchableOpacity onPress={ async ()=>{
                      if(isBookmarked){
                        await axios.delete(`${Constants.expoConfig?.extra?.API_URL}/bookmark/news/delete`, {
                          params: {
                            userId: await AsyncStorage.getItem("userId"),
                            newId: news.id,
                          }
                        })
                        .then((res)=>{
                          setIsBookmarked(false)
                        })
                      } else {
                        await axios.post(`${Constants.expoConfig?.extra?.API_URL}/bookmark/news/add`,
                        {
                          newId: news.id,
                          userId: await AsyncStorage.getItem("userId")
                        })
                        .then((res)=>{
                          setIsBookmarked(true)
                        })
                      }
                    }}>
                      <Image style={styles.bookmarkIcon} source={isBookmarked ? require('../../../assets/icon/icon_bookmarked.png') : require('../../../assets/icon/icon_bookmark.png')} />
                    </TouchableOpacity>
                </View>
                <Image style={styles.newsPicture} source={{uri: news.image}}/>
                <Text style={styles.description}>{news.description}</Text>
            </View>
        </View>
    </ScrollView>
  )
}

export default NewDetailScreen