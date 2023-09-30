import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "../../core/components/Button";
import Layer from "../../core/layouts/Layout";

const ForgetPassword = ({navigation} : any) => {
  return(
    <View style={styles.container}>
      <Layer>
        <SafeAreaView style={[styles.container, {marginHorizontal: 20}]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
            <View style={[styles.headerApp, {flex: 1}]}>
              <Image source={require("../../../assets/Logo.png")} style={styles.img}/>
              <Text style={styles.header}>ลืมรหัสผ่าน</Text>
              <View style={styles.subheader}>
                <Text>เราจะทำการส่ง OTP ไปยังหมายเลขโทรศัพท์ของท่าน</Text>
              </View>
            </View>

            <View style={[styles.panel, {flex: 1, marginTop: 30}]}>
              <View style={{width: '85%', paddingTop: 10, paddingBottom: 20}}>
                <TextInput
                  style={[styles.input]}
                  placeholder='หมายเลขโทรศัพท์'
                />
                <View style={{marginTop: 20}}>
                  <Button title="Next" to="VerificationScreen" buttonWidth={100} buttonHeight={10} navigation={navigation}/>
                </View>
              </View>
            </View>

          </ScrollView>
        </SafeAreaView>
      </Layer>
    </View>
  );
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
    marginVertical: 10
  },
  subheader: {
    fontSize: 18,
    color: '#4D4D4D',
    lineHeight: 27,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerPanel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20
  },
  panel: {
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  input: {
    borderBottomWidth: 1,
    width: '100%',
    paddingVertical: 10,
    marginTop: 20
  }
})

export default ForgetPassword
