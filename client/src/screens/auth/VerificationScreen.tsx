import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, Alert } from "react-native"; // Import Alert
import AppHeader from "../../core/components/AppHeader";
import OTPInputField from "../../core/components/OTPInputField";
import Layer from "../../core/layouts/Layout";
import { styles } from "./auth.styles";
import axios from "axios";

const VerificationScreen = ({ navigation, route }: any) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [pinReady, setPinReady] = useState(false);
  const [id, setId] = useState("");
  const [otp, setOtp] = useState("");
  const MAX_CODE_LENGTH = 6;

  const header = "ยืนยัน OTP";
  const subheader = "กรอกรหัสยืนยันตัวตน ที่ส่งไปยังอีเมลของคุณ";

  const onOtpInputComplete = () => {
    // Set pinReady to true when OTP input is complete
    setPinReady(true);
  };

  useEffect(() => {
    if (pinReady) {
      // Make the API call when pinReady is true
      (async () => {
        try {
          const { data: res } = await axios.post(
            "http://localhost:3000/otp/validate",
            {
              id: id, // You need to define 'id'
              otp: otp, // Use the entered OTP
            }
          );
          console.log(res);
		  Alert.alert(
			          "Account Created",
			          "You have successfully created an account!",
			          [
			            {
			              text: "OK",
			              onPress: () => {
			                // Navigate to the SignIn screen
			                navigation.navigate("SignIn");
			              },
			            },
			          ]
			        );
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [pinReady, id, otp]);


  return (
    <View style={styles.container}>
      <Layer>
        <SafeAreaView style={{ marginHorizontal: 20 }}>
          <AppHeader header={header} subheader={subheader} />

           <View style={{ marginTop: 30 }}>
            <OTPInputField
              code={code}
              setCode={setCode}
              value={otp}
              onChangeText={setOtp}
              onInputComplete={onOtpInputComplete} // Call the function on OTP input complete
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
