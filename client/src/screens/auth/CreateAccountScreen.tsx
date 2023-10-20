import { Dimensions, Image, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import AppHeader from "../../core/components/AppHeader";
import { Button } from "../../core/components/Button";
import Layer from "../../core/layouts/Layout";
import { styles } from "./auth.styles";
import axios from "axios";
import React from "react";


const {width, height} = Dimensions.get('screen')

const CreateAccountScreen = ({navigation} : any) => {
  const header = 'ลงทะเบียน'
  const subheader = 'กรุณากรอกข้อมูลด้านล่างเพื่อเข้าใช้งานแอปพลิเคชั่น'
  // const [prefix, setPrefix] = React.useState('')
  // const [firstName, setFirstName] = React.useState('')
  // const [lastName, setLastName] = React.useState('')
  // const [dob, setDob] = React.useState('')
  // const [phoneNumber, setPhoneNumber] = React.useState('')
  // const [citizenBack, setCitizenBack] = React.useState('')
  // const [BloodType, setBloodType] = React.useState('')
  // const [gender, setGender] = React.useState('')
  // const [weight, setWeight] = React.useState('')
  // const [height, setHeight] = React.useState('')
  // const [disease, setDisease] = React.useState('')

  const create = async () => {
    // console.log("login");
    // try {
    //   const { data: res } = await axios.post(
    //     "http://localhost:3000/auth/login",
    //     {

    //     }
    //   );
        // navigation.navigate("VerificationScreen");
    //   navigation.navigate("App");
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return(
    <View style={styles.container}>
      <Layer>
        <SafeAreaView>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View style={{marginHorizontal: 20, flex: 1}}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <AppHeader header={header} subheader={subheader}/>
              </View>

              <Text style={styles.headerPanel}>ข้อมูลส่วนตัว</Text>
              <View style={[{flex: 1, borderBottomLeftRadius: 30, borderBottomRightRadius: 30}, styles.panel]}>
                <View style={{width: '85%', paddingTop: 10, paddingBottom: 20}}>
                  <TextInput
                    style={[styles.input]}
                    placeholder='คำนำหน้า'
                    placeholderTextColor="#856464"
                  />
                  <TextInput
                    style={[styles.input, {marginTop: 20}]}
                    placeholder='ชื่อ'
                    placeholderTextColor="#856464"
                  />
                  <TextInput
                    style={[styles.input, {marginTop: 20}]}
                    placeholder='นามสกุล'
                    placeholderTextColor="#856464"
                  />
                  <TextInput
                    style={[styles.input, {marginTop: 20}]}
                    placeholder='วัน/เดือน/ปี เกิด'
                    placeholderTextColor="#856464"
                  />
                  <TextInput
                    style={[styles.input, {marginTop: 20}]}
                    placeholder='หมายเลขโทรศัพท์'
                    placeholderTextColor="#856464"
                  />
                </View>
              </View>

              <Text style={styles.headerPanel}>บัตรประชาชน</Text>
              <View style={[{flex: 1, borderBottomLeftRadius: 50, borderBottomRightRadius: 50}, styles.panel]}>
                <View style={{width: '85%', paddingTop: 10, paddingBottom: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image style={{marginTop: 20}} source={require("../../../assets/citizen1.png")}/>
                  <TextInput
                    style={[styles.input, {marginTop: 20}]}
                  />
                  <Image style={{marginTop: 40}}  source={require("../../../assets/citizen2.png")}/>
                  <TextInput
                    style={[styles.input, {marginTop: 20}]}
                  />
                </View>
              </View>
              <View style={{marginTop: 20}}>
                <Button title="Next" onPress={create()} buttonWidth={100} buttonHeight={10} navigation={navigation}/>
              </View>
            </View>
            </ScrollView>
        </SafeAreaView>
      </Layer>
    </View>
  );
}

export default CreateAccountScreen