import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button } from '../../core/components/Button';
import Layer from '../../core/layouts/Layout';

export const SignUpScreen = ({navigation} : any) => {
  return (
    <View style={styles.container}>
      <Layer>
        <View style={[styles.headerApp, {flex: 1}]}>
          <Image source={require("../../../assets/Logo.png")} style={styles.img}/>
          <Text style={styles.header}>สมัครสมาชิก</Text>
          <View style={styles.content}>
            <Text>ดูเหมือนคุณยังไม่มีบัญชีของเรา</Text>
            <Text>กรุณาใส่รายละเอียดด้านล่างเพื่อเข้าใช้งานแอปพลิเคชั่น</Text>
          </View>
        </View>


        <View style={[styles.panel, {flex: 1}]}>
          <View style={{marginTop: 20, width: '85%'}}>
            <TextInput
              style={[styles.input, {marginTop: 20}]}
              placeholder='รหัสบัตรประชาชน'
            />
            <TextInput
              style={[styles.input, {marginTop: 20}]}
              placeholder='รหัสผ่าน'
              secureTextEntry={true}
            />
            <TextInput
              style={[styles.input, {marginTop: 20}]}
              placeholder='ยืนยันรหัสผ่าน'
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
      </Layer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headerApp: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 150,
  },
  header: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20
  },
  content: {
    fontSize: 18,
    color: '#4D4D4D',
    marginHorizontal: 50,
    lineHeight: 27,
    justifyContent: 'center',
    alignItems: 'center',
  },
  panel: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  input: {
    borderBottomWidth: 1,
    width: '100%',
    paddingVertical: 10
  }
})

export default SignUpScreen