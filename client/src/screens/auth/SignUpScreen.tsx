import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import AppHeader from "../../core/components/AppHeader";
import { Button } from "../../core/components/Button";
import Layer from "../../core/layouts/Layout";
import { styles } from "./auth.styles";
import axios from "axios";

export const SignUpScreen = ({ navigation }: any) => {
  const header = "สมัครสมาชิก";
  const subheader =
    "ดูเหมือนคุณยังไม่มีบัญชีของเรา กรุณาใส่รายละเอียดด้านล่างเพื่อเข้าใช้งานแอปพลิเคชั่นของเรา";

  const [password, setPassword] = React.useState("");
  const [citizenId, setCitizenId] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const create = async () => {
    if (password !== confirmPassword) {
      setPasswordError("รหัสผ่านไม่ตรงกัน");
      return;
    }

    try {
      const { data: res } = await axios.post(
        "http://localhost:3000/auth/register",
        {
          password: password,
          citizenId: citizenId,
        }
      );

      console.log(res);
      // navigation.navigate("CreateAccount");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layer>
      <View style={{ marginHorizontal: 20, flex: 1 }}>
        {/* ... other code */}
        <View style={styles.panel}>
          <View style={{ width: "85%" }}>
            <TextInput
              style={styles.input}
              placeholder="รหัสบัตรประชาชน"
              placeholderTextColor="#856464"
            />
            <TextInput
              style={styles.input}
              placeholder="รหัสผ่าน"
              placeholderTextColor="#856464"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="ยืนยันรหัสผ่าน"
              placeholderTextColor="#856464"
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
            />
            {passwordError ? (
              <Text style={{ color: "red" }}>{passwordError}</Text>
            ) : null}
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 30,
            }}
          >
            <Button
              title={"สมัครสมาชิก"}
              onPress={() => create()}
              buttonWidth={120}
              buttonHeight={10}
              navigation={navigation}
            />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                <Text style={{ marginVertical: 10, marginHorizontal: 10 }}>
                  มีบัญชีแล้ว ?
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("SignIn");
                  }}
                >
                  <Text style={{ color: "#FF6D6E" }}>เข้าสู่ระบบ</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
    </Layer>
  );
};

export default SignUpScreen;
