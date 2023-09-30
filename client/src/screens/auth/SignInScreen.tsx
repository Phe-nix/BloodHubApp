import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import AppHeader from '../../core/components/AppHeader';
import { Button } from '../../core/components/Button';
import Layer from '../../core/layouts/Layout';
import { styles } from './auth.styles';

const SignInScreen = ({navigation} : any) => {
  const header = 'เข้าสู่ระบบ';
  const subheader = 'ยินดีต้อนรับเข้าสู่ BloodHub กรุณาใส่รายละเอียดด้านล่างเพื่อเข้าใช้งานแอปพลิเคชั่น';

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
                placeholder='รหัสบัตรประชาชน / เบอร์โทรศัพท์'
                placeholderTextColor="#856464"
              />
              <TextInput
                style={styles.input}
                placeholder='รหัสผ่าน'
                placeholderTextColor="#856464"
                secureTextEntry={true}
              />
              <TouchableOpacity onPress={()=>{navigation.navigate("ForgetPassword")}}>
                <Text style={{color: '#FF6D6E', textAlign: 'right', width: '100%', marginTop: 20}}>ลืมรหัสผ่าน</Text>
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 30}}>
              <Button title={'เข้าสู่ระบบ'} to="Home" buttonWidth={120} buttonHeight={10} navigation={navigation}/>
              <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                <Text style={{marginVertical: 10, marginHorizontal: 10}}>ยังไม่เป็นสมาชิก ?</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate("SignUp")}}>
                  <Text style={{color: '#FF6D6E'}}>สมัครสมาชิก</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Layer>
  );
};

export default SignInScreen;