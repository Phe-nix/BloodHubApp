import React,{useState} from "react";
import { SafeAreaView, ScrollView, TextInput, View } from "react-native";
import AppHeader from "../../core/components/AppHeader";
import { Button } from "../../core/components/Button";
import Layer from "../../core/layouts/Layout";
import { styles } from "./auth.styles";
import axios from "axios";

const ForgetPassword = ({ navigation }: any) => {
  const header = "ลืมรหัสผ่าน";
  const subheader = "เราจะทำการส่ง OTP ไปยังอีเมลของท่าน";
  const [email, setemail] = useState("");

  const forget = async () => {
    try {
        const { data: res } = await axios.post(
        "http://localhost:3000/auth/forgotPassword",
        {
          email: email,
        }
      );
      navigation.navigate("VerificationScreen", {res.user.id : id},{ source: "forgetPassword" });
      console.log(res.user.id);
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
              <AppHeader header={header} subheader={subheader} />
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
                    title="Next"
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
