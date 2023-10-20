import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, Alert } from "react-native"; // Import Alert
import AppHeader from "../../core/components/AppHeader";
import OTPInputField from "../../core/components/OTPInputField";
import Layer from "../../core/layouts/Layout";
import { styles } from "./auth.styles";

const VerificationScreen = ({ navigation }: any) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [pinReady, setPinReady] = useState(false);
  const MAX_CODE_LENGTH = 6;

  const header = 'ยืนยัน OTP';
  const subheader = 'กรอกรหัสยืนยันตัวตน ที่ส่งไปยังหมายเลข xxx-xxx-xxxx';

  useEffect(() => {
    if (pinReady) {
      // Show an alert
      Alert.alert(
        'Account Created',
        'You have successfully created an account!',
        [
          {
            text: 'OK',
            onPress: () => {
              // Navigate to the SignIn screen
              navigation.navigate('SignIn');
            },
          },
        ]
      );
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
              MAX_CODE_LENGTH={MAX_CODE_LENGTH}
            />
          </View>
          <View style={{ alignItems: 'center', marginTop: 30 }}>
            <Text style={styles.text}>
              ไม่ได้รับรหัส OTP ?{' '}
              <Text style={{ color: '#FF363C' }}>ส่งอีกครั้ง</Text>
            </Text>
          </View>
        </SafeAreaView>
      </Layer>
    </View>
  );
};

export default VerificationScreen;
