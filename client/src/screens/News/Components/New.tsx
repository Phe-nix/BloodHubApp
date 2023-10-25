import { View, Image, Text, TouchableOpacity } from "react-native"
import { styles } from "./New.style"
import { differenceInDays } from "date-fns"
import { useEffect, useState } from "react"
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

const New = (props: any) => {
    const { item } = props
    
    const daysAgo = differenceInDays(new Date(), new Date(item.createdAt))

    return (
        <View>
            <View style={styles.underLine} />
            <View style={styles.news}>
                <Image style={styles.newsPicture} source={{uri: item.image}} />
                <View style={styles.box}>
                    <View>
                        <Text style={styles.title}>{`${item.title.slice(0, 60)} ${item.title.length > 60 ? '...' : ''}`}</Text>
                        <Text style={styles.description}>{`${item.description.slice(0, 90)} ${item.description.length > 90 ? '...' : ''}`}</Text>
                    </View>
                    <View style={styles.timeAndBookmark}>
                        <Text style={styles.timeNews}>
                            {daysAgo === 0 ? `Today` : `${daysAgo} Days Ago`} 
                        </Text>

                        <TouchableOpacity onPress={ async ()=>{
                        if(item.isBookmark){
                            await axios.delete(`http://localhost:3000/bookmark/news/delete`, {
                            params: {
                                userId: await AsyncStorage.getItem("userId"),
                                newId: item.id,
                            }
                            })
                            .then(async (res)=>{
                                await props.getNews();
                            })
                        } else {
                            await axios.post(`http://localhost:3000/bookmark/news/add`,
                            {
                            newId: item.id,
                            userId: await AsyncStorage.getItem("userId")
                            })
                            .then(async (res)=>{
                                await props.getNews();
                            })
                        }
                        }}>
                        <Image style={styles.bookmarkIcon} source={item.isBookmark ? require('../../../../assets/icon/icon_bookmarked.png') : require('../../../../assets/icon/icon_bookmark.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default New;