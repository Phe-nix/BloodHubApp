import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './PostDetailScreen.style';
import User from './components/User';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const PostDetailScreen = ({route, navigation}: any) => {
  const { post } = route.params;
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      if (post.isBookmarked) {
        setIsBookmarked(true);
      }
    })();
  }, []);

  console.log(route.params.source);
  

  return(
    <View style={styles.container}>
      <User image={post.user.profileImage}userName={`${post.user.firstName} ${post.user.lastName}`} time={post.createdAt} />
      
      <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
        <Text>Post Name</Text>
        <TouchableOpacity onPress={ async ()=>{
          if(isBookmarked){
            await axios.delete(`http://localhost:3000/bookmark/post/delete`, {
              params: {
                userId: await AsyncStorage.getItem("userId"),
                postId: post.id,
              }
            })
            .then((res)=>{
              setIsBookmarked(false)
            })
          } else {
            await axios.post(`http://localhost:3000/bookmark/post/add`,
            {
              postId: post.id,
              userId: await AsyncStorage.getItem("userId")
            })
            .then((res)=>{
              setIsBookmarked(true)
            })
          }
        }}>
          <Image style={{width: 18, height:20}} source={isBookmarked ? require('../../../assets/icon/icon_bookmarked.png') : require('../../../assets/icon/icon_bookmark.png')} />
        </TouchableOpacity>
      </View>
      <Image source={{uri: post.image}} style={{height: '30%'}}/>
      <View style={styles.underline} />
      <View style={{gap: 20}}>
        <View style={{gap: 10}}>
            <Text style={{fontWeight: 'bold'}}>รายละเอียด</Text>
            <Text>{post.description}</Text>
        </View>
        <View style={{gap: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex:1, color: "#856464"}}>กรุ๊ปเลือด</Text>
            <Text style={{flex:1}}>{post.bloodType}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex:1, color: "#856464"}}>เคส</Text>
            <Text style={{flex:1}}>{post.case}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex:1, color: "#856464"}}>เบอร์ติดต่อ</Text>
            <Text style={{flex:1}}>{post.phone_number}</Text>
          </View>
        </View>

            
              {
                route.params.source !== "appointment" ? 
                (
                  <TouchableOpacity onPress={async ()=>{
                    await axios.post(`http://localhost:3000/donation/create`,
                    {
                      status: "PENDING",
                      userId: await AsyncStorage.getItem("userId"),
                      postId: post.id
                    }).then((res)=>{
      
                      navigation.navigate("Home")
                    })
                  }}>
                    <View style={styles.button}>
                      <Text style={styles.text}>บริจาคเลือด</Text>
                    </View>
                  </TouchableOpacity>
                )
                : 
                (
                  <View style={{backgroundColor: '#E1E1E1', paddingVertical: 10, margin: 5, borderRadius: 100}}>
                    <Text style={{color: '#D8666B', fontSize: 20, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>ยืนยันแล้ว</Text>
                  </View>
                )
              }
      </View>
    </View>
  );
}

export default PostDetailScreen;