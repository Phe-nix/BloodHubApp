import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import AppHeader from '../../core/components/AppHeader';
import { Button } from '../../core/components/Button';
import Layer from '../../core/layouts/Layout';
import { styles } from './auth.styles';

export const SignUpScreen = ({navigation} : any) => {
  const header = 'สมัครสมาชิก'
  const subheader = 'ดูเหมือนคุณยังไม่มีบัญชีของเรา กรุณาใส่รายละเอียดด้านล่างเพื่อเข้าใช้งานแอปพลิเคชั่นของเรา'

  return (
    <Layer>
      <View style={{marginHorizontal: 20, flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <AppHeader header={header} subheader={subheader}/>
        </View>

        <View style={{flex: 1, height: '100%'}}>
          <View style={styles.panel}>
            <View style={{width: '85%'}}>
              <TextInput
                style={styles.input}
                placeholder='รหัสบัตรประชาชน'
                placeholderTextColor="#856464"
              />
              <TextInput
                style={styles.input}
                placeholder='รหัสผ่าน'
                placeholderTextColor="#856464"
                secureTextEntry={true}
              />
              <TextInput
                style={styles.input}
                placeholder='ยืนยันรหัสผ่าน'
                placeholderTextColor="#856464"
                secureTextEntry={true}
              />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 30}}>
              <Button title={'สมัครสมาชิก'} to="CreateAccount" buttonWidth={120} buttonHeight={10} navigation={navigation}/>
              <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                <Text style={{marginVertical: 10, marginHorizontal: 10}}>มีบัญชีแล้ว ?</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate("SignIn")}}>
                  <Text style={{color: '#FF6D6E'}}>เข้าสู่ระบบ</Text>
                </TouchableOpacity>
              </View>
            </View>
            
          </View>
        </View>
      </View>
    </Layer>
  )
}

export default SignUpScreen