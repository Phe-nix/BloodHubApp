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
  const MAX_CODE_LENGTH = 6;

  const header = "ยืนยัน OTP";
  const subheader = "กรอกรหัสยืนยันตัวตน ที่ส่งไปยังอีเมลของคุณ";

  const onOtpInputComplete = () => {
    setPinReady(true);
  };

  useEffect(() => {
    if (pinReady) {
      const otp = code.join('');
      const id = route.params.id;
      console.log(id);
      

      (async () => {
        try {
          const { data: res } = await axios.post(
            "http://localhost:3000/otp/validate",
            {
              userId: id,
              otp: otp,
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
			                // navigation.navigate("SignIn");
			              },
			            },
			          ]
			        );
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
