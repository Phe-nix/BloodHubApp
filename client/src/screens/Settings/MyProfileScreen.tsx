import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { Button } from "../../core/components/Button";
import TextInputWithLabel from "../../core/components/TextInputWithLabel";
import { styles } from "./style/MyProfileScreen.style";
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"; // Import Axios for making HTTP requests.
import Constants from "expo-constants";
 
interface ProfileEditScreenProps {
  navigation: any;
}

const pickerSelectStyles = {
  inputIOS: {
    color: '#505050',
  },
  placeholder: {
    color: '#505050',
  },
};

const ProfileEditScreen: React.FC<ProfileEditScreenProps> = ({
  navigation,
}) => {
  const [showImagePicker, setShowImagePicker] = useState(true);
  const [image, setImage] = useState<string[]>([]);
  const [prefix, setPrefix] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState(""); // Store DoB as a string
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [disease, setDisease] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        const response = await axios.get(
          `${Constants.expoConfig?.extra?.API_URL}/user/${userId}`
        );
        const userData = response.data;
		    setImage([userData.profileImage]);
        setPrefix(userData.prefix);
        setFirstName(userData.firstName);
        setLastName(userData.lastName);
        setEmail(userData.email);
        setPhoneNumber(userData.phoneNumber);
        setBloodType(userData.bloodType);
        setGender(userData.gender);
        setDob(formatDob(userData.dob)); // Format DoB
        setWeight(userData.weight);
        setHeight(userData.height);
        setDisease(userData.disease);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  // Function to format DoB as "YYYY-MM-DD"
  const formatDob = (dob: string) => {
    const date = new Date(dob);
    return date.toISOString().split("T")[0];
  };

  const logout = () => {
    try {
      AsyncStorage.removeItem("token");
      AsyncStorage.removeItem("userId");
      navigation.navigate("Auth");
    } catch (error) {
      console.log(error);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log();
    
    if (!result.canceled) {
      setImage(result.assets?.map((asset) => asset.uri) || []);
      setShowImagePicker(false);
    }
  };

  const removeImage = (index: number) => {
    const newImages = image.filter((_, index) => index !== index);
    setImage(newImages);
    if (newImages.length === 0) {
      setShowImagePicker(true);
    }
  };

  useEffect(() => {
    console.log(image);
  }, [image])
  
  const handleSave = async() => {
    try {
      const formData = new FormData();

      image.forEach((uri, index) => {
        const uriParts = uri.split('.');
        const fileType = uriParts[uriParts.length - 1];
        formData.append('profileImage', {
          uri,
          name: `image_${index}.${fileType}`,
          type: `image/${fileType}`,
        });
      });

      formData.append('id', await AsyncStorage.getItem('userId'));
      formData.append('phoneNumber', phoneNumber);
      formData.append('weight', weight);
      formData.append('height', height);
      formData.append('disease', disease);
      console.log(formData);
    
      const response = await axios.post(`${Constants.expoConfig?.extra?.API_URL}/user/update`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Upload response:', response.data);
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.profileImageContainer}>
          {image ? (
            <Image
              source={{ uri: image[0] }}
              style={styles.profileImage}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.profileImage}></View>
          )}
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity style={{position: 'absolute', zIndex: 1, top: -10, right: -10, backgroundColor: '#E99999', width: 20, height: 20, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} onPress={() => removeImage(index)}>
              <Text style={{color: 'white'}}>X</Text>
            </TouchableOpacity> */}
      <TextInputWithLabel
        label="คำนำหน้า"
        value={prefix}
        onChangeText={(text) => setPrefix(text)}
        placeholder={"Enter prefix"}
		editable={false}
      />

      <TextInputWithLabel
        label="ชื่อจริง"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        placeholder="Enter first name"
		editable={false}
      />

      <TextInputWithLabel
        label="นามสกุล"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        placeholder="Enter last name"
		editable={false}
      />

      <TextInputWithLabel
        label="อีเมล"
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter email"
		editable={false}
      />

      <TextInputWithLabel
        label="เบอร์โทรศัพท์"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        placeholder="Enter phone number"
      />

      <TextInputWithLabel
        label="กรุ๊ปเลือด"
        value={bloodType}
        onChangeText={(text) => setBloodType(text)}
        placeholder="Enter Blood Type"
		editable={false}
      />
	  
	  <Text style={[{ fontWeight: "bold",fontSize: 16,flex:1, marginTop: 10, marginBottom:10, textAlign:"center"}]}>เพศ</Text>

      <View style={[styles.genderContainer, { marginBottom: 16 }]}>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === "ชาย" ? styles.selectedGender : null,
          ]}
        >
        <FontAwesome name="mars" size={18} color={gender === "ชาย" ? "white" : "#ED8085"}/>
          <Text style={[styles.genderText, gender === "ชาย" ? { color: "white" } : null,]}>
            ชาย
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === "หญิง" ? styles.selectedGender : null,
          ]}
        >
        <FontAwesome name="venus" size={18} color={gender === "หญิง" ? "white" : "#ED8085"}/>
          <Text style={[styles.genderText, gender === "หญิง" ? { color: "white" } : null,]}>
            หญิง
          </Text>
        </TouchableOpacity>
      </View>

      <TextInputWithLabel
        label="วันเดือนปีเกิด"
        value={dob}
        onChangeText={(text) => setDob(text)}
        placeholder="YYYY-MM-DD" // Display the desired date format
		editable={false}
      />

      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>น้ำหนัก</Text>
        <View style={styles.inputWithUnit}>
          <TextInput
            style={styles.fieldValue}
            value={weight}
            onChangeText={(text) => setWeight(text)}
            placeholder="Enter weight"
          />
          <Text style={styles.unitText}>กก.</Text>
        </View>
      </View>

      <View
        style={[styles.fieldContainer, { marginTop: 10, marginBottom: 10 }]}
      >
        <Text style={styles.fieldTitle}>ส่วนสูง</Text>
        <View style={styles.inputWithUnit}>
          <TextInput
            style={styles.fieldValue}
            value={height}
            onChangeText={(text) => setHeight(text)}
            placeholder="Enter height"
          />
          <Text style={styles.unitText}>ซม.</Text>
        </View>
      </View>

      <TextInputWithLabel
        label="โรคประจำตัว"
        value={disease}
        onChangeText={(text) => setDisease(text)}
        placeholder="Enter congenital disease"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>บันทึก</Text>
        </TouchableOpacity>
        <Button
          title="ออกจากระบบ"
          buttonWidth={30}
          buttonHeight={15}
          onPress={() => logout()}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileEditScreen;
