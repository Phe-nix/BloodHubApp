import React, { useState } from "react";
import { Text, TextInput, View, ScrollView, Image } from "react-native";
import AppHeader from "../../core/components/AppHeader";
import { Button } from "../../core/components/Button";
import Layer from "../../core/layouts/Layout";
import { styles } from "./auth.styles";
import { pickerSelectStyles } from "./auth.styles"; // Replace with the correct path to your styles file
import axios from "axios";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";
import { format } from "date-fns"; // Import date-fns for date formatting

const CreateAccountScreen = ({ navigation, route }: any) => {
  const header = "ลงทะเบียน";
  const subheader = "กรุณากรอกข้อมูลด้านล่างเพื่อเข้าใช้งานแอปพลิเคชั่น";

  const { citizenId, password } = route.params || {};
  const [prefix, setPrefix] = useState("คำนำหน้า"); // Default value
  const [bloodType, setbloodType] = useState("กรุ๊ปเลือด"); // Default value
  const [gender, setGender] = useState("เพศ"); // Default value
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState(new Date());
  const [email, setemail] = useState("");
  const [citizenBack, setCitizenBack] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const create = async () => {
    try {
        const dobFormatted = format(dob, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"); // Format the date
        const { data: res } = await axios.post(
        "http://localhost:3000/auth/register",
        {
          prefix: prefix,
          bloodType: bloodType,
          gender:gender,
          firstName: firstName,
          lastName: lastName,
          password: password,
          dob: dobFormatted,
          email: email,
          citizenId: citizenId,
          citizenBack: citizenBack,
        }
      );
      
      navigation.navigate("VerificationScreen", {id: res.user.id});
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDob(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <Layer>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginVertical: 50 }}
        >
          <View style={{ marginHorizontal: 20, flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <AppHeader header={header} subheader={subheader} />
            </View>

            <Text style={styles.headerPanel}>ข้อมูลส่วนตัว</Text>
            <View
              style={[
                {
                  flex: 1,
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                },
                styles.panel,
              ]}
            >
              <View style={{ width: "85%", paddingTop: 10, paddingBottom: 20 }}>
                <View
                  style={{
                    marginTop: 5,
                    borderBottomWidth: 1,
                    borderColor: "#856464",
                    paddingVertical: 10,
                  }}
                >
                  <Text style={{ marginBottom: 10, color: "#856464" }}>
                    คำนำหน้า
                  </Text>
                  <RNPickerSelect
                    onValueChange={(value) => {
                      // Check if the selected value is not "คำนำหน้า"
                      if (value !== "คำนำหน้า") {
                        setPrefix(value);
                      }
                    }}
                    items={[
                      { label: "นาย", value: "นาย" },
                      { label: "นาง", value: "นาง" },
                      { label: "นางสาว", value: "นางสาว" },
                    ]}
                    value={prefix}
                    style={pickerSelectStyles}
                  />
                </View>
                
                <Text style={{ marginTop: 10, color: "#856464" }}>
                  ชื่อจริง
                </Text>
                <TextInput
                  style={[styles.input]}
                  placeholder="..."
                  placeholderTextColor="#856464"
                  value={firstName}
                  onChangeText={(text) => setFirstName(text)}
                  autoCapitalize="none" // Add this line to disable auto-capitalization
                />
                <Text style={{ marginTop: 10, color: "#856464" }}>นามสกุล</Text>

                <TextInput
                  style={[styles.input]}
                  placeholder="..."
                  placeholderTextColor="#856464"
                  value={lastName}
                  onChangeText={(text) => setLastName(text)}
                  autoCapitalize="none" // Add this line to disable auto-capitalization
                />
                <View>
                  <Text style={{ marginTop: 10, color: "#856464" }}>
                    วันเดือนปีเกิด
                  </Text>
                  <TextInput
                    style={[styles.input]}
                    placeholder="..."
                    placeholderTextColor="#856464"
                    value={format(dob, "dd/MM/yyyy")} // Format the date as "dd/MM/yyyy"
                    onTouchStart={toggleDatePicker}
                  />
                  {showDatePicker && (
                    <DateTimePicker
                      value={dob}
                      mode="date"
                      display="spinner"
                      onChange={handleDateChange}
                    />
                  )}
                </View>

                <View
                  style={{
                    marginTop: 5,
                    borderBottomWidth: 1,
                    borderColor: "#856464",
                    paddingVertical: 10,
                  }}
                >
                  <Text style={{ marginBottom: 10, color: "#856464" }}>
                    เพศ
                  </Text>
                  <RNPickerSelect
                    onValueChange={(value) => {
                      // Check if the selected value is not "คำนำหน้า"
                      if (value !== "เพศ") {
                        setGender(value);
                      }
                    }}
                    items={[
                      { label: "ชาย", value: "ชาย" },
                      { label: "หญิง", value: "หญิง" },
                    ]}
                    value={gender}
                    style={pickerSelectStyles}
                  />

                </View>
                <View
                  style={{
                    marginTop: 5,
                    borderBottomWidth: 1,
                    borderColor: "#856464",
                    paddingVertical: 10,
                  }}
                >
                  <Text style={{ marginBottom: 10, color: "#856464" }}>
                    กรุ๊ปเลือด
                  </Text>
                  <RNPickerSelect
                    onValueChange={(value) => {
                      // Check if the selected value is not "คำนำหน้า"
                      if (value !== "กรุ๊ปเลือด") {
                        setbloodType(value);
                      }
                    }}
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
                    value={bloodType}
                    style={pickerSelectStyles}
                  />
                </View>
                <Text style={{ marginTop: 10, color: "#856464" }}>อีเมล</Text>
                <TextInput
                  style={[styles.input]}
                  placeholder="..."
                  placeholderTextColor="#856464"
                  value={email}
                  onChangeText={(text) => setemail(text)}
                  autoCapitalize="none" // Add this line to disable auto-capitalization
                />

              </View>
            </View>

            <Text style={styles.headerPanel}>บัตรประชาชน</Text>
            <View
              style={[
                {
                  flex: 1,
                  borderBottomLeftRadius: 50,
                  borderBottomRightRadius: 50,
                },
                styles.panel,
              ]}
            >
              <View
                style={{
                  width: "85%",
                  paddingTop: 10,
                  paddingBottom: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ marginTop: 20 }}
                  source={require("../../../assets/citizen1.png")}
                />
                <TextInput
                  style={[styles.input, { marginTop: 20 }]}
                  placeholder="รหัสบัตรประชาชน"
                  placeholderTextColor="#856464"
                  value={citizenId}
                />
                <Image
                  style={{ marginTop: 40 }}
                  source={require("../../../assets/citizen2.png")}
                />
                <TextInput
                  style={[styles.input, { marginTop: 20 }]}
                  placeholder="รหัสหลังบัตรประชาชน"
                  placeholderTextColor="#856464"
                  value={citizenBack}
                  onChangeText={(text) => setCitizenBack(text)}
                  autoCapitalize="none" // Add this line to disable auto-capitalization
                />
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <Button
                title="Create"
                onPress={create}
                buttonWidth={100}
                buttonHeight={10}
              />
            </View>
          </View>
        </ScrollView>
      </Layer>
    </View>
  );
};

export default CreateAccountScreen;
