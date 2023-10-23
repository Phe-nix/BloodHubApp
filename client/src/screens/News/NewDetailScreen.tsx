import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import {styles} from "./NewDetailScreen.style"
import bookmark from "../../../assets/icon/icon_bookmark.png"
import { useEffect, useState } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { set } from 'date-fns'

const NewDetailScreen = ({route} : any) => {
  const { post } = route.params
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false)

  useEffect(() => {
    if(route.params.post.isBookmarked){
      setIsBookmarked(true)
    }
  }, [])

  return (
    <View style={styles.background}>
        <View style={styles.container}>
            <View style={{marginTop:10}}>
                <Text style={styles.title}>{post.title}</Text>
                <View style={styles.timeAndBookmark}>
                    <Text style={styles.time}>{post.createdAt}</Text>
                    <TouchableOpacity onPress={ async ()=>{
                      if(isBookmarked){
                        await axios.delete(`http://localhost:3000/bookmark/news/delete`, {
                          params: {
                            userId: await AsyncStorage.getItem("userId"),
                            newId: post.id,
                          }
                        })
                        .then((res)=>{
                          setIsBookmarked(false)
                        })
                      } else {
                        await axios.post(`http://localhost:3000/bookmark/news/add`,
                        {
                          newId: post.id,
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
                <Image style={styles.newsPicture} source={{uri: post.image}}/>
                <Text style={styles.description}>{post.description}</Text>
            </View>
        </View>
    </View>
  )
}

export default NewDetailScreen