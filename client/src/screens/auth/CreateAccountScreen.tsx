import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "../../core/components/Button";
import Layer from "../../core/layouts/Layout";

const {width, height} = Dimensions.get('screen')

const CreateAccountScreen = ({navigation} : any) => {
  return(
    <View style={styles.container}>
      <Layer>
        <SafeAreaView style={[styles.container, {marginHorizontal: 20}]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
            <View style={[styles.headerApp, {flex: 1}]}>
              <Image source={require("../../../assets/Logo.png")} style={styles.img}/>
              <Text style={styles.header}>ลงทะเบียน</Text>
              <View style={styles.subheader}>
                <Text>กรุณากรอกข้อมูลด้านล่างเพื่อเข้าใช้งานแอปพลิเคชั่น</Text>
              </View>
            </View>

            <Text style={styles.headerPanel}>ข้อมูลส่วนตัว</Text>
            <View style={[styles.panel, {flex: 1}]}>
              <View style={{width: '85%', paddingTop: 10, paddingBottom: 20}}>
                <TextInput
                  style={[styles.input]}
                  placeholder='คำนำหน้า'
                />
                <TextInput
                  style={[styles.input, {marginTop: 20}]}
                  placeholder='ชื่อ'
                />
                <TextInput
                  style={[styles.input, {marginTop: 20}]}
                  placeholder='นามสกุล'
                />
                <TextInput
                  style={[styles.input, {marginTop: 20}]}
                  placeholder='วัน/เดือน/ปี เกิด'
                />
                <TextInput
                  style={[styles.input, {marginTop: 20}]}
                  placeholder='หมายเลขโทรศัพท์'
                />
              </View>
            </View>

            <Text style={styles.headerPanel}>บัตรประชาชน</Text>
            <View style={[styles.panel, {flex: 1}]}>
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
              <Button title="Next" to="Home" buttonWidth={100} buttonHeight={10} navigation={navigation}/>
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
    paddingVertical: 10
  }
})

export default CreateAccountScreen