import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button } from '../../core/components/Button';
import Layer from '../../core/layouts/Layout';

export const SignInScreen = ({navigation} : any) => {
  return (
    <View style={styles.container}>
      <Layer>
        <View style={[styles.headerApp, {flex: 1}]}>
          <Image source={require("../../../assets/Logo.png")} style={styles.img}/>
          <Text style={styles.header}>เข้าสู่ระบบ</Text>
          <View style={styles.content}>
            <Text>ยินดีต้อนรับเข้าสู่ BloodHub</Text>
            <Text>กรุณาใส่รายละเอียดด้านล่างเพื่อเข้าใช้งานแอปพลิเคชั่น</Text>
          </View>
        </View>


        <View style={[styles.panel, {flex: 1}]}>
          <View style={{marginTop: 20, width: '85%'}}>
            <TextInput
              style={{borderBottomWidth: 1, width: '100%', paddingVertical: 10, marginVertical: 20}}
              placeholder='รหัสบัตรประชาชน / หมายเลขโทรศัพท์'
            />
            <TextInput
              style={{borderBottomWidth: 1, width: '100%', paddingVertical: 10}}
              placeholder='รหัสผ่าน'
              secureTextEntry={true}
            />
            <Text style={{color: '#FF6D6E', textAlign: 'right', width: '100%', marginTop: 20}}>ลืมรหัสผ่าน</Text>
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
  }
})