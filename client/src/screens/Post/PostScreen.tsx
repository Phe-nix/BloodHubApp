import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import * as ImagePicker from 'expo-image-picker';
import { Button } from '../../core/components/Button';
import { styles } from './PostScreen.style';
import axios from 'axios';

const PostScreen = ({navigation} : any) => {
  const [image, setImage] = useState<string[]>([]);
  const [showImagePicker, setShowImagePicker] = useState(true);
  
  useEffect(() => {
    console.log(image);
  }, [image])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage([...image, ...result.assets?.map((asset) => asset.uri) || []]);
      setShowImagePicker(false); // Hide the image picker button after selecting an image
    }
  };

  const removeImage = (indexToRemove: number) => {
    const newImages = image.filter((_, index) => index !== indexToRemove);
    setImage(newImages);
    if (newImages.length === 0) {
      setShowImagePicker(true); // Show the image picker button again if there are no selected images
    }
  };

  const uploadImages = async () => {
    try {
      const formData = new FormData();

      image.forEach((uri, index) => {
        const uriParts = uri.split('.');
        const fileType = uriParts[uriParts.length - 1];
        formData.append('image', {
          uri,
          name: `image_${index}.${fileType}`,
          type: `image/${fileType}`,
        });
      });

      const response = await axios.post(`http://localhost:3000/posts/create`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Upload response:', response.data);

      // navigation.navigate('Home');
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };
  
  
  return(
    <View style={styles.container}>
      {/* <ScrollView> */}
        <View style={styles.profile}>
          <View style={styles.profileImage}>
          </View>
          <View>
            <Text style={styles.userName}>Norrapat Srimoonnoi</Text>
            <Text style={styles.subHeader}>สร้างโพสขอความช่วยเหลือ</Text>
          </View>
        </View>

        {/* Conditionally render the image picker button */}
        {showImagePicker && (
          <TouchableOpacity style={styles.addPhoto} onPress={pickImage}>
            <View style={styles.addIcon}>
              <Image source={require('../../../assets/icons/icon_addPhoto.png')} />
              <Text style={{ color: '#FF6D6E', marginTop: 5 }}>เพิ่มรูปภาพ</Text>
            </View>
          </TouchableOpacity>
        )}

        {/* Render selected images with a remove button */}
        {image.map((uri, index) => (
          <View key={index} style={{ ...styles.addPhoto, ...{ marginTop: 10 }}}>
            <TouchableOpacity style={{position: 'absolute', zIndex: 1, top: -10, right: -10, backgroundColor: '#E99999', width: 20, height: 20, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} onPress={() => removeImage(index)}>
              <Text style={{color: 'white'}}>X</Text>
            </TouchableOpacity>
            <Image source={{ uri: uri }} style={{ width: '100%', height: 150, borderRadius: 10 , zIndex: 0}} resizeMode="cover" />
          </View>
        ))}

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

        <Button title="สร้างโพสต์" buttonHeight={10} buttonWidth={100} to="" navigation={navigation} onPress={uploadImages}/>
      {/* </ScrollView> */}
    </View>
  );
};

export default PostScreen;

