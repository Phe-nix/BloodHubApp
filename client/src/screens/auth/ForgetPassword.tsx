import React, { useState } from "react";
import { SafeAreaView, ScrollView, TextInput, View } from "react-native";
import AppHeader from "../../core/components/AppHeader";
import { Button } from "../../core/components/Button";
import Layer from "../../core/layouts/Layout";
import { styles } from "./auth.styles";
import axios from "axios";
import Constants from "expo-constants";

interface ForgetPasswordProps {
  navigation: any;
}

const ForgetPassword: React.FC<ForgetPasswordProps> = ({ navigation }) => {
  const [email, setemail] = useState("");

  const forget = async () => {
    try {
      const { data: res } = await axios.post(`${Constants.expoConfig?.extra?.API_URL}/auth/forgotPassword`, {
        email: email,
      });

      navigation.navigate("VerificationScreen", { id: res.user, source: "forgetPassword" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Layer>
        <SafeAreaView style={[styles.container, { marginHorizontal: 20 }]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <AppHeader header="ลืมรหัสผ่าน" subheader="เราจะทำการส่ง OTP ไปยังอีเมลของท่าน" />
            </View>

            <View
              style={[
                { flex: 1, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, marginTop: 30 },
                styles.panel,
              ]}
            >
              <View style={{ width: "85%", paddingTop: 10, paddingBottom: 20 }}>
                <TextInput
                  style={[styles.input]}
                  placeholder="อีเมล"
                  placeholderTextColor="#856464"
                  autoCapitalize="none"
                  onChangeText={(text) => setemail(text)}
                />
                <View style={{ marginTop: 20 }}>
                  <Button
                    title="ถัดไป"
                    onPress={() => forget()}
                    buttonWidth={100}
                    buttonHeight={10}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Layer>
    </View>
  );
};

export default ForgetPassword;
