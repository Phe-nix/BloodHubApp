import { SafeAreaView, ScrollView, TextInput, View } from "react-native";
import AppHeader from "../../core/components/AppHeader";
import { Button } from "../../core/components/Button";
import Layer from "../../core/layouts/Layout";
import { styles } from "./Auth.styles";

const CreateNewPassword = ({navigation} : any) => {
  const header = 'สร้างรหัสผ่านใหม่';
  const subheader = 'รหัสผ่านของคุณควรไม่เหมือนกับ รหัสผ่านก่อนหน้า';

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
                  style={[styles.input]}
                  placeholder='รหัสผ่าน'
                  placeholderTextColor="#856464"
                  secureTextEntry={true}
                />
                <TextInput
                  style={[styles.input]}
                  placeholder='ยืนยันรหัสผ่าน'
                  placeholderTextColor="#856464"
                  secureTextEntry={true}
                />
                <View style={{marginTop: 20}}>
                  <Button title="ยืนยัน" to="SignIn" buttonWidth={100} buttonHeight={10} navigation={navigation}/>
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
