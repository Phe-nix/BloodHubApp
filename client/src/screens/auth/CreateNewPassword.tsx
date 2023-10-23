import { SafeAreaView, ScrollView, TextInput, View } from "react-native";
import AppHeader from "../../core/components/AppHeader";
import { Button } from "../../core/components/Button";
import Layer from "../../core/layouts/Layout";
import { styles } from "./auth.styles";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface CreateNewPasswordProps {
  navigation: any;
  route: any;
}

const CreateNewPassword: React.FC<CreateNewPasswordProps> = ({ navigation, route }) => {  const header = 'สร้างรหัสผ่านใหม่';
  const subheader = 'รหัสผ่านของคุณควรไม่เหมือนกับ รหัสผ่านก่อนหน้า';
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const reset = async () => {
    const id = route.params.id;
    try {
        const { data: res } = await axios.post(
        "http://localhost:3000/auth/resetPassword",
        {
          userId: id,
          password: password,
        }
      );
      navigation.navigate("SignIn");
    } catch (error) {
      console.log(error);
    }
  };

  return(
    <View style={styles.container}>
      <Layer>
        <SafeAreaView style={[styles.container, {marginHorizontal: 20}]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
            <View style={{flex: 1, justifyContent: 'center'}}>
              <AppHeader header={header} subheader={subheader}/>
            </View>

            <View style={[{flex: 1, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, marginTop: 30}, styles.panel]}>
              <View style={{width: '85%', paddingTop: 10, paddingBottom: 20}}>
                <TextInput
                style={[styles.input,{marginBottom: 10}]}
                placeholder='รหัสผ่าน'
                  placeholderTextColor="#856464"
                  secureTextEntry={true}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  autoCapitalize="none"
                />
                <TextInput
                style={[styles.input,{marginBottom: 10}]}
                placeholder='ยืนยันรหัสผ่าน'
                  placeholderTextColor="#856464"
                  secureTextEntry={true}
                  value={confirmPassword}
                  onChangeText={(text) => setConfirmPassword(text)}
                  autoCapitalize="none"
                />
                <View style={{marginTop: 20}}>
                  <Button title="ยืนยัน" onPress={reset} buttonWidth={100} buttonHeight={10} navigation={navigation}/>
                </View>
              </View>
            </View>

          </ScrollView>
        </SafeAreaView>
      </Layer>
    </View>
  );
};

export default CreateNewPassword;
