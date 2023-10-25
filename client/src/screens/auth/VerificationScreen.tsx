import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, Alert } from "react-native";
import AppHeader from "../../core/components/AppHeader";
import OTPInputField from "../../core/components/OTPInputField";
import Layer from "../../core/layouts/Layout";
import { styles } from "./auth.styles";
import axios from "axios";
import Constants from "expo-constants";

interface VerificationScreenProps {
  navigation: any;
  route: any;
}

const VerificationScreen: React.FC<VerificationScreenProps> = ({ navigation, route }) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [pinReady, setPinReady] = useState(false);
  const [email, setemail] = useState("");
  const MAX_CODE_LENGTH = 6;

  const header = "ยืนยัน OTP";
  const subheader = "กรอกรหัสยืนยันตัวตน ที่ส่งไปยังอีเมลของคุณ";

  const onOtpInputComplete = () => {
    setPinReady(true);
  };

  useEffect(() => {
    if (pinReady) {
      const otp = code.join("");
      const id = route.params.id;
      (async () => {
        try {
          let apiEndpoint = `${Constants.expoConfig?.extra?.API_URL}/otp/validate`;
          if (route.params.source === "forgetPassword") {
            apiEndpoint = `${Constants.expoConfig?.extra?.API_URL}/otp/validate`;
            const { data: res } = await axios.post(apiEndpoint, {
              userId: id,
              otp: otp,
            });
            navigation.navigate("CreateNewPassword", { email: email, id: id });
          } else {
            const { data: res } = await axios.post(apiEndpoint, {
              userId: id,
              otp: otp,
            });
            Alert.alert(
              "Account Created",
              "You have successfully created an account!",
              [
                {
                  text: "OK",
                  onPress: () => {
                    navigation.navigate("SignIn");
                  },
                },
              ]
            );
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [pinReady]);

  return (
    <View style={styles.container}>
      <Layer>
        <SafeAreaView style={{ marginHorizontal: 20 }}>
          <AppHeader header={header} subheader={subheader} />

          <View style={{ marginTop: 30 }}>
            <OTPInputField
              code={code}
              setCode={setCode}
              setPinReady={setPinReady}
              onInputComplete={onOtpInputComplete}
              MAX_CODE_LENGTH={MAX_CODE_LENGTH}
            />
          </View>
          <View style={{ alignItems: "center", marginTop: 30 }}>
            <Text style={styles.text}>
              ไม่ได้รับรหัส OTP ?{" "}
              <Text style={{ color: "#FF363C" }}>ส่งอีกครั้ง</Text>
            </Text>
          </View>
        </SafeAreaView>
      </Layer>
    </View>
  );
};

export default VerificationScreen;
