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
import { Button } from "../../core/components/Button";
import TextInputWithLabel from "../../core/components/TextInputWithLabel";
import { styles, pickerSelectStyles } from "./style/MyProfileScreen.style";
import RNPickerSelect from "react-native-picker-select";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"; // Import Axios for making HTTP requests.

interface ProfileEditScreenProps {
  navigation: any;
}

const ProfileEditScreen: React.FC<ProfileEditScreenProps> = ({
  navigation,
}) => {
  const [image, setImage] = useState(String);
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
          `http://localhost:3000/user/${userId}`
        );
        const userData = response.data;
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

    // Call the function to fetch user data
    fetchUserData();
  }, []);

  // Function to format DoB as "YYYY-MM-DD"
  const formatDob = (dob:string) => {
    const date = new Date(dob);
    return date.toISOString().split('T')[0];
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
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    const userData = {
      image,
      phoneNumber,
      weight,
      height,
      disease,
    };
    console.log("User Data to be saved:", userData);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.profileImageContainer}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={styles.profileImage}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.profileImage}></View>
          )}
        </View>
      </TouchableOpacity>

      <TextInputWithLabel
        label="Prefix"
        value={prefix}
        onChangeText={(text) => setPrefix(text)}
        placeholder={"Enter prefix"}
      />

      <TextInputWithLabel
        label="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        placeholder="Enter first name"
      />

      <TextInputWithLabel
        label="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        placeholder="Enter last name"
      />

      <TextInputWithLabel
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter email"
      />

      <TextInputWithLabel
        label="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        placeholder="Enter phone number"
      />

      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Blood Type</Text>
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            style={pickerSelectStyles}
            value={bloodType}
            onValueChange={(value) => setBloodType(value)}
            items={[
              { label: "A+", value: "A+" },
              { label: "B+", value: "B+" },
              { label: "AB+", value: "AB+" },
              { label: "O+", value: "O+" },
              { label: "A-", value: "A-" },
              { label: "B-", value: "B-" },
              { label: "AB-", value: "AB-" },
              { label: "O-", value: "O-" },
            ]}
          />
        </View>
      </View>
      <View style={styles.genderTitleContainer}>
        <Text style={[styles.fieldTitle, {marginTop:10}]}>Gender</Text>
      </View>
	  
      <View style={[styles.genderContainer, { marginBottom: 16}]}>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === "male" ? styles.selectedGender : null,
          ]}
          onPress={() => setGender("male")}
        >
          <FontAwesome
            name="mars"
            size={18}
            color={gender === "male" ? "white" : "#ED8085"}
          />
          <Text
            style={[
              styles.genderText,
              gender === "male" ? { color: "white" } : null,
            ]}
          >
            Male
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === "female" ? styles.selectedGender : null,
          ]}
          onPress={() => setGender("female")}
        >
          <FontAwesome
            name="venus"
            size={18}
            color={gender === "female" ? "white" : "#ED8085"}
          />
          <Text
            style={[
              styles.genderText,
              gender === "female" ? { color: "white" } : null,
            ]}
          >
            Female
          </Text>
        </TouchableOpacity>
      </View>

      <TextInputWithLabel
        label="DoB"
        value={dob}
        onChangeText={(text) => setDob(text)}
        placeholder="YYYY-MM-DD" // Display the desired date format
      />

      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Weight</Text>
        <View style={styles.inputWithUnit}>
          <TextInput
            style={styles.fieldValue}
            value={weight}
            onChangeText={(text) => setWeight(text)}
            placeholder="Enter weight"
          />
          <Text style={styles.unitText}>KG</Text>
        </View>
      </View>

      <View
        style={[styles.fieldContainer, { marginTop: 10, marginBottom: 10 }]}
      >
        <Text style={styles.fieldTitle}>Height</Text>
        <View style={styles.inputWithUnit}>
          <TextInput
            style={styles.fieldValue}
            value={height}
            onChangeText={(text) => setHeight(text)}
            placeholder="Enter height"
          />
          <Text style={styles.unitText}>CM</Text>
        </View>
      </View>

      <TextInputWithLabel
        label="Congenital Disease"
        value={disease}
        onChangeText={(text) => setDisease(text)}
        placeholder="Enter congenital disease"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
        <Button
          title="Logout"
          buttonWidth={30}
          buttonHeight={15}
          onPress={() => logout()}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileEditScreen;
