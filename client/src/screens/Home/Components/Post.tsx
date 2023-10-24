import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import { differenceInDays } from 'date-fns';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Post = (props: any, { navigation }: any) => {
    const { item } = props;
    const [expandedText, setExpandedText] = useState<boolean>(false);

    const daysAgo = differenceInDays(new Date(), new Date(item.createdAt));
    
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 15 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ width: 50, height: 50, borderRadius: 25}} source={{uri : item.user.profileImage }} />
                    <View style={{marginLeft:20}}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{`${item.user.firstName} ${item.user.lastName}`}</Text>
                        <Text>
                            {daysAgo === 0 ? `Today` : `${daysAgo} Days Ago`}
                        </Text>
                    </View>
                    <View style={{ width: 20, height: 20, borderRadius: 10 }} />
                </View>
                <View>
                <TouchableOpacity onPress={ async ()=>{
                      if(item.isBookmarked){
                        await axios.delete(`http://localhost:3000/bookmark/news/delete`, {
                          params: {
                            userId: await AsyncStorage.getItem("userId"),
                            newId: item.id,
                          }
                        })
                        .then((res)=>{
                          props.getPost();
                        })
                      } else {
                        await axios.post(`http://localhost:3000/bookmark/news/add`,
                        {
                          newId: item.id,
                          userId: await AsyncStorage.getItem("userId")
                        })
                        .then((res)=>{
                            props.getPost();
                        })
                      }
                    }}>
                      <Image style={{width: 18, height:20}} source={item.isBookmarked ? require('../../../../assets/icon/icon_bookmarked.png') : require('../../../../assets/icon/icon_bookmark.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <Image style={{ width: 'auto', height: 300 }} source={{uri: item.image}} />
            <View style={{ marginLeft: 20, marginTop: 10}}>
                <Text style={{ fontSize: 15 }}>
                    {expandedText ? item.description : item.description.slice(0, 100) + (item.description.length > 100 ? '...' : '')}
                </Text>
                {item.description.length > 100 && (
                    <Text
                        style={{ color: '#FA9598' }}
                        onPress={() => setExpandedText(!expandedText)}
                    >
                        {" " + (expandedText ? "Read less" : "Read more")}
                    </Text>
                )}
            </View>
            <View style={{ borderWidth: 1, borderColor: 'grey', marginTop: 20 }} />
        </View>
    )
}

export default Post