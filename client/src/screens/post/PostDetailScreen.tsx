import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './PostDetailScreen.style';
import { styles as stylesRequest } from "../home/Components/Request/Request.style"

import User from './components/User';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { item } from '../../mock/getStart';

import tel from "../../../assets/icon/DonateRequest/tel.png"
import blood from "../../../assets/icon/DonateRequest/bloodtype.png"
import age from "../../../assets/icon/DonateRequest/age.png"
import disease from "../../../assets/icon/DonateRequest/disease.png"
import { differenceInDays, differenceInYears } from 'date-fns';

const Donator = ({postId}: any) => {
  const [donator, setDonator] = useState<any>([])

  useEffect(() => {
    fetch();
  }, [])
  const fetch = async () => {
    await axios.get(`${Constants.expoConfig?.extra?.API_URL}/donation/getPostDonator/${postId}`)
      .then((res) => {
        setDonator(res.data.donator)
      })
  }

  return(
    <View>
      {
        donator.map((item: any, index: number) => {
          const daysAgo = differenceInDays(new Date(), new Date(item.createdAt));
          const dob = differenceInYears(new Date(), new Date(item.user.dob));

          return(
          <View key={index} style={{marginBottom: 100}}>
            <Text style={{ margin: 5, fontWeight: 'bold', fontSize: 18 }}>ผู้บริจาค</Text>
            <View style={styles.underline} />
            <View style={stylesRequest.profile}>
              <Image style={stylesRequest.profilePicture} source={{ uri: item.user.profileImage }} />
              <View>
                <Text style={stylesRequest.profileName}>{`${item.user.firstName} ${item.user.lastName}`}</Text>
                <Text style={stylesRequest.requestTime}>
                  {daysAgo === 0 ? `Today` : `${daysAgo} Days Ago`}
                </Text>
                <View style={stylesRequest.profileAndInfo}>
                  <View style={stylesRequest.iconAndInfo}>
                    <Image style={stylesRequest.telIcon} source={tel} />
                    <Text style={stylesRequest.info}>{item.user.phoneNumber}</Text>
                  </View>
                  <View style={stylesRequest.iconAndInfo}>
                    <Image style={stylesRequest.bloodIcon} source={blood} />
                    <Text style={stylesRequest.info}>{item.user.bloodType}</Text>
                  </View>
                  <View style={stylesRequest.iconAndInfo}>
                    <Image style={stylesRequest.ageIcon} source={age} />
                    <Text style={stylesRequest.info}>{`อายุ ${dob} ปี`}</Text>
                  </View>
                  <View style={stylesRequest.iconAndInfo}>
                    <Image style={stylesRequest.diseaseIcon} source={disease} />
                    <Text style={stylesRequest.info}>{item.user.disease}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          )
        })
      }
    </View>

  )
}

const PostDetailScreen = ({route, navigation}: any) => {
  const { post } = route.params;
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      if (post.isBookmark) {
        setIsBookmarked(true);
      }
    })();
  }, []);

  return(
    <ScrollView>
      <View style={styles.container}>
        <User image={post.user.profileImage}userName={`${post.user.firstName} ${post.user.lastName}`} time={post.createdAt} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{post.title}</Text>
          <TouchableOpacity onPress={ async ()=>{
            if(isBookmarked){
              await axios.delete(`${Constants.expoConfig?.extra?.API_URL}/bookmark/post/delete`, {
                params: {
                  userId: await AsyncStorage.getItem("userId"),
                  postId: post.id,
                }
              })
              .then((res)=>{
                setIsBookmarked(false)
              })
            } else {
              await axios.post(`${Constants.expoConfig?.extra?.API_URL}/bookmark/post/add`,
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
        <Image source={{uri: post.image}} style={{height: 250}}/>
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
              <Text style={{flex:1}}>{post.phoneNumber}</Text>
            </View>
          </View>
                {
                  route.params.source === "Home" ? 
                  (
                    <TouchableOpacity onPress={async ()=>{
                      await axios.post(`${Constants.expoConfig?.extra?.API_URL}/donation/create`,
                      {
                        status: "PENDING",
                        userId: post.user.id,
                        donatorId: await AsyncStorage.getItem("userId"),
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
                    route.params.source === "history" ?
                  (
                    <Donator postId={post.id}/>
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
    </ScrollView>
  );
}

export default PostDetailScreen;