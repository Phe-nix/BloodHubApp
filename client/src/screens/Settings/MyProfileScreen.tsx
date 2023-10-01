import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "../../core/components/Button";

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

  // Function to handle the save action
  const handleSave = () => {
    // You can perform save logic here, but for now, just update the state
    // with the user input
    // Example:
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
      <View style={styles.profileImageContainer}>
        <View style={styles.profileImage}></View>
        <Text style={styles.changeProfileImageText}>Change Profile Photo</Text>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Prefix</Text>
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            style={pickerSelectStyles}
            value={prefix}
            onValueChange={(value) => setBloodGroup(value)}
            items={[
              { label: "Mr.", value: "Mr." },
              { label: "Ms.", value: "Ms." },
              { label: "Mrs.", value: "Mrs." },
            ]}
          />
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Name</Text>
        <TextInput
          style={styles.fieldValue}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Enter name"
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Surname</Text>
        <TextInput
          style={styles.fieldValue}
          value={surname}
          onChangeText={(text) => setSurname(text)}
          placeholder="Enter surname"
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Email</Text>
        <View style={styles.inputWithIcon}>
          <TextInput
            style={[styles.fieldValue]}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Enter email"
          />
          <FontAwesome
            name="pencil"
            size={18}
            color="black"
            style={styles.editIcon}
          />
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Phone Number</Text>
        <View style={styles.inputWithIcon}>
          <TextInput
            style={styles.fieldValue}
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            placeholder="Enter phone number"
          />
          <FontAwesome
            name="pencil"
            size={18}
            color="black"
            style={styles.editIcon}
          />
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Password</Text>
        <View style={styles.inputWithIcon}>
          <TextInput
            style={styles.fieldValue}
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Enter password"
            secureTextEntry={true}
          />
          <FontAwesome
            name="pencil"
            size={18}
            color="black"
            style={styles.editIcon}
          />
        </View>
      </View>

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

      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>DoB</Text>
        <TextInput
          style={styles.fieldValue}
          value={dateOfBirth}
          onChangeText={(text) => setDateOfBirth(text)}
          placeholder="Enter date of birth"
        />
      </View>

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

      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Congenital Disease</Text>
        <TextInput
          style={styles.fieldValue}
          value={congenitalDisease}
          onChangeText={(text) => setCongenitalDisease(text)}
          placeholder="Enter congenital disease"
        />
      </View>

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
    marginBottom: 10,
  },
  changeProfileImageText: {
    color: "#ED8085",
    fontSize: 16,
  },
  fieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
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
  genderIcon: {
    marginBottom: 8,
  },
  selectedGender: {
    backgroundColor: "#ED8085",
    opacity: 0.7,
  },
  genderText: {
    fontSize: 16,
    color: "#ED8085",
  },
  logoutButton: {
    backgroundColor: "#ED8085",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
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
});

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    ...styles.fieldValue,
    flex: 1,
  },
  inputIOS: {
    ...styles.fieldValue,
    flex: 1,
  },
});

export default ProfileEditScreen;
