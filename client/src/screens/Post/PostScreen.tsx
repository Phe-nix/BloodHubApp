import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import * as ImagePicker from 'expo-image-picker';
import { Button } from '../../core/components/Button';
import { styles } from './PostScreen.style';
import axios from 'axios';
import RNPickerSelect from "react-native-picker-select";
import { set } from 'date-fns';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const pickerSelectStyles = {
  inputIOS: {
    color: '#505050',
  },
  placeholder: {
    color: '#505050',
  },
};

const PostScreen = ({navigation} : any) => {
  const [image, setImage] = useState<string[]>([]);
  const [showImagePicker, setShowImagePicker] = useState(true);

  const [description, setDescription] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [bloodType, setBloodType] = useState<string>('');
  const [cases, setCases] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  
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
      setShowImagePicker(false);
    }
  };

  const removeImage = (indexToRemove: number) => {
    const newImages = image.filter((_, index) => index !== indexToRemove);
    setImage(newImages);
    if (newImages.length === 0) {
      setShowImagePicker(true);
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

      formData.append('description', description);
      formData.append('phoneNumber', contact);
      formData.append('bloodType', bloodType);
      formData.append('case', cases);
      formData.append('address', location);
      formData.append('userId', await AsyncStorage.getItem('userId'));

      console.log(formData);
      

      const response = await axios.post(`${Constants.expoConfig?.extra?.API_URL}/posts/create`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Upload response:', response.data);
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
            value={description}
            onChangeText={setDescription}
          />
          <TextInput
            style={styles.input}
            placeholder='เบอร์ติดต่อ'
            placeholderTextColor={'#505050'}
            value={contact}
            onChangeText={setContact}
          />
          <View style={styles.input}>
            <RNPickerSelect
              placeholder={{ label: "-- กรุ๊ปเลือด --", value: "กรุ๊ปเลือด"}}
              onValueChange={(value) => {
                if (value !== "กรุ๊ปเลือด") {
                  setBloodType(value);
                }
              }}
              items={[
                { label: "A+", value: "A_POSITIVE" },
                { label: "B+", value: "B_POSITIVE" },
                { label: "AB+", value: "AB_POSITIVE" },
                { label: "O+", value: "O_POSITIVE" },
                { label: "A-", value: "A_NEGATIVE" },
                { label: "B-", value: "B_NEGATIVE" },
                { label: "AB-", value: "AB_NEGATIVE" },
                { label: "O-", value: "O_NEGATIVE" },
              ]}
              value={bloodType}
              style={pickerSelectStyles}
            />    
          </View>
          <View style={styles.input}>
            <RNPickerSelect
              placeholder={{ label: "-- ความต้องการ --"}}
              onValueChange={(value) => {
                if (value) {
                  setCases(value);
                }
              }}
              items={[
                { label: "ทั่วไป", value: "NORMAL" },
                { label: "ฉุกเฉิน", value: "EMERGENCY" },
              ]}
              value={bloodType}
              style={pickerSelectStyles}
            />    
          </View>
          <TextInput
            style={styles.input}
            placeholder='สถานที่'
            placeholderTextColor={'#505050'}
            value={location}
            onChangeText={setLocation}
          />
        </View>

        <Button title="สร้างโพสต์" buttonHeight={10} buttonWidth={100} to="" navigation={navigation} onPress={uploadImages}/>
      {/* </ScrollView> */}
    </View>
  );
};

export default PostScreen;

