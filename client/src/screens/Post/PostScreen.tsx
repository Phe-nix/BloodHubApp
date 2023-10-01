import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import * as ImagePicker from 'expo-image-picker';
import { Button } from '../../core/components/Button';
import { styles } from './PostScreen.style';

const PostScreen = ({navigation} : any) => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0]?.uri || null);
    }
  };
  
  return(
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileImage}>
        </View>
        <View>
          <Text style={styles.userName}>Norrapat Srimoonnoi</Text>
          <Text style={styles.subHeader}>สร้างโพสขอความช่วยเหลือ</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.addPhoto} onPress={pickImage}>
          <View style={styles.addIcon}>
            <Image source={require('../../../assets/icons/icon_addPhoto.png')}/>
            <Text style={{color: '#FF6D6E', marginTop: 5}}>เพิ่มรูปภาพ</Text>
          </View>
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </TouchableOpacity>
      </View>

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
    </View>
  );
};

export default PostScreen;

