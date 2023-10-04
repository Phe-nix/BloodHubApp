import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import * as ImagePicker from 'expo-image-picker';
import { Button } from '../../core/components/Button';
import { styles } from './PostScreen.style';

const PostScreen = ({navigation} : any) => {
  const [image, setImage] = useState<string[]>([]);
  
  useEffect(() => {
    console.log(image);
    
  }, [image])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage([...image, ...result.assets?.map((asset) => asset.uri) || []]);
    }
  };
  
  return(
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.profile}>
          <View style={styles.profileImage}>
          </View>
          <View>
            <Text style={styles.userName}>Norrapat Srimoonnoi</Text>
            <Text style={styles.subHeader}>สร้างโพสขอความช่วยเหลือ</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.addPhoto} onPress={pickImage}>
          {image.length === 0 ? (
            <View style={styles.addIcon}>
              <Image source={require('../../../assets/icons/icon_addPhoto.png')}/>
              <Text style={{color: '#FF6D6E', marginTop: 5}}>เพิ่มรูปภาพ</Text>
            </View>
          ) 
          : 
          (
            image.map((uri, index) => {
              return(
                <View key={index} style={{flexDirection: 'row', overflow: 'hidden'}}>
                  <Image  source={{uri : uri}} style={{ width: '100%', height: 150, borderRadius: 10 }} resizeMode="cover"/>
                </View>
              );
            })
          )}
        </TouchableOpacity>

        <View style={styles.underline}></View>

        <View>
          <TextInput
            style={styles.input}
            placeholder='คำบรรยาย'
            placeholderTextColor={'#505050'}
          />
          <TextInput
            style={styles.input}
            placeholder='เบอร์ติดต่อ'
            placeholderTextColor={'#505050'}
          />
          <TextInput
            style={styles.input}
            placeholder='กลุ่มเลือด'
            placeholderTextColor={'#505050'}
          />
          <TextInput
            style={styles.input}
            placeholder='ความต้องการ'
            placeholderTextColor={'#505050'}
          />
          <TextInput
            style={styles.input}
            placeholder='สถานที่'
            placeholderTextColor={'#505050'}
          />
        </View>

        <Button title="สร้างโพสต์" buttonHeight={10} buttonWidth={100} to="Home" navigation={navigation}/>
      </ScrollView>
    </View>
  );
};

export default PostScreen;

