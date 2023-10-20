import React, { useState } from "react";
import { Text, TextInput, View, ScrollView, Image } from "react-native";
import AppHeader from "../../core/components/AppHeader";
import { Button } from "../../core/components/Button";
import Layer from "../../core/layouts/Layout";
import { styles } from "./auth.styles";
import axios from "axios";

const CreateAccountScreen = ({ route }: any) => {
  const header = "ลงทะเบียน";
  const subheader = "กรุณากรอกข้อมูลด้านล่างเพื่อเข้าใช้งานแอปพลิเคชั่น";

  // Access the passed parameters here
  const { citizenId, password } = route.params || {};

  // State for other input fields
  const [prefix, setPrefix] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [citizenBack, setCitizenBack] = useState("");

  const create = async () => {
    console.log(citizenId, password);
    try {
      const {data: res} = await axios.post("http://localhost:3000/auth/register", {
        citizenId: citizenId,
        password: password,
        prefix: prefix,
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        phoneNumber: phoneNumber,
        citizenBack: citizenBack,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Layer>
        <ScrollView showsVerticalScrollIndicator={false} style={{marginVertical:50}}>
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
                <TextInput
                  style={[styles.input]}
                  placeholder="คำนำหน้า"
                  placeholderTextColor="#856464"
                  value={prefix}
                  onChangeText={(text) => setPrefix(text)}
                />
                <TextInput
                  style={[styles.input, { marginTop: 20 }]}
                  placeholder="ชื่อ"
                  placeholderTextColor="#856464"
                  value={firstName}
                  onChangeText={(text) => setFirstName(text)}
                />
                <TextInput
                  style={[styles.input, { marginTop: 20 }]}
                  placeholder="นามสกุล"
                  placeholderTextColor="#856464"
                  value={lastName}
                  onChangeText={(text) => setLastName(text)}
                />
                <TextInput
                  style={[styles.input, { marginTop: 20 }]}
                  placeholder="วัน/เดือน/ปี เกิด"
                  placeholderTextColor="#856464"
                  value={dob}
                  onChangeText={(text) => setDob(text)}
                />
                <TextInput
                  style={[styles.input, { marginTop: 20 }]}
                  placeholder="หมายเลขโทรศัพท์"
                  placeholderTextColor="#856464"
                  value={phoneNumber}
                  onChangeText={(text) => setPhoneNumber(text)}
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
                  value={citizenId} // Display the citizenId
                />
                <Image
                  style={{ marginTop: 40 }}
                  source={require("../../../assets/citizen2.png")}
                />
                <TextInput
                  style={[styles.input, { marginTop: 20 }]}
                  placeholder="รหัสหลังบัตรประชาชน"
                  placeholderTextColor="#856464"
                  value={citizenBack} // Display the citizenId
                  onChangeText={(text) => setCitizenBack(text)}
                />
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <Button
                title="Next"
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
