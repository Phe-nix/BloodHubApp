import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput, // Import TextInput from react-native
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "../../core/components/Button";
import TextInputWithLabel from "../../core/components/TextInputWithLabel";

const ProfileEditScreen = ({ navigation }: any) => {
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
  const handleProfileImageEdit = () => {

    console.log("Profile image clicked for selection/edit");
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
          <View style={styles.profileImage}></View>
        </View>
      </TouchableOpacity>

      <TextInputWithLabel
        label="Prefix"
        value={prefix}
        onChangeText={(text) => setPrefix(text)}
        placeholder="Enter prefix"
      />

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

      <TextInputWithLabel
        label="Blood Type"
        value={bloodGroup}
        onChangeText={(text) => setBloodGroup(text)}
        placeholder="Enter blood type"
      />

      <View style={styles.genderTitleContainer}>
        <Text style={[styles.fieldTitle]}>Gender</Text>
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

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "white",
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    backgroundColor: "#ED8085",
    borderRadius: 50,
  },
  genderTitleContainer: {
    marginLeft: 170,
    marginBottom: 10,
  },
  fieldTitle: {
    width: 100,
    fontWeight: "bold",
    fontSize: 16,
  },
  fieldValue: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#ED8085",
    paddingVertical: 4,
    fontSize: 16,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  genderButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ED8085",
    padding: 10,
  },
  selectedGender: {
    backgroundColor: "#ED8085",
    opacity: 0.7,
  },
  genderText: {
    fontSize: 16,
    color: "#ED8085",
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  editIcon: {
    marginLeft: 10,
  },
  inputWithUnit: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  unitText: {
    marginLeft: 10,
  },
  pickerContainer: {
    flex: 1,
    borderBottomColor: "#ED8085",
    paddingVertical: 4,
  },
  buttonContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  saveButton: {
    backgroundColor: "white", // You can change the color as needed
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 55,
    borderWidth: 2,
    borderColor: "#ED8085",
  },
  saveButtonText: {
    color: "#ED8085",
    fontWeight: "bold",
    fontSize: 18,
  },
  fieldContainer: { // Add this fieldContainer style
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ProfileEditScreen;
