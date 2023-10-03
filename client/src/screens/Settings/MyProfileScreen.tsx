import * as React from "react";
import { useState, useEffect } from "react";
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

interface ProfileEditScreenProps {
	navigation: any;
  }

const ProfileEditScreen: React.FC<ProfileEditScreenProps> = ({ navigation }) => {
	const [image, setImage] = useState<string | null>(null);
  const [prefix, setPrefix] = useState("Tinnaphoom");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [congenitalDisease, setCongenitalDisease] = useState("");

  const handleProfileImageEdit = async () => {
    try {
      const result: any = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1], // 1:1 aspect ratio (adjust as needed)
        quality: 1, // Image quality (adjust as needed)
      });

      if (!result.cancelled) {
        if (result.uri) {
          setImage(result.uri); // Set the selected image URI in state
        }
      }
    } catch (error) {
      console.error("Error picking an image:", error);
    }
  };

  const handleSave = () => {
    const userData = {
      prefix,
      name,
      surname,
      email,
      phoneNumber,
      password,
      bloodGroup,
      gender,
      dateOfBirth,
      weight,
      height,
      congenitalDisease,
    };
    console.log("User Data to be saved:", userData);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={handleProfileImageEdit}>
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
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Enter name"
      />

      <TextInputWithLabel
        label="Surname"
        value={surname}
        onChangeText={(text) => setSurname(text)}
        placeholder="Enter surname"
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

      <TextInputWithLabel
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Enter password"
        secureTextEntry={true}
      />

      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Blood Type</Text>
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            style={pickerSelectStyles}
            value={bloodGroup}
            onValueChange={(value) => setBloodGroup(value)}
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

      <View style={[styles.genderContainer, { marginBottom: 16 }]}>
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
        value={dateOfBirth}
        onChangeText={(text) => setDateOfBirth(text)}
        placeholder="Enter date of birth"
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

      <View style={styles.fieldContainer}>
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
        value={congenitalDisease}
        onChangeText={(text) => setCongenitalDisease(text)}
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
          to="SignIn"
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileEditScreen;
