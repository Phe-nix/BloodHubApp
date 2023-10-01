import { SafeAreaView, Text, View, Image, FlatList} from "react-native";
import { styles } from "./BloodScreen.style";

import Siriraj from '../../../assets/hospital/Siriraj.png';
import aType from ',,/../..'

const BloodScreen = () => {
  const hospitals = [
    {image: Siriraj, name:'โรงพยาบาลศิริราช'},
  ];
  const bloodBlank = [
    {image: }
  ]
  return (
    <SafeAreaView style={styles.Container}>
      <FlatList
      data={hospitals}
      keyExtractor={(item : any) => item.name}
      renderItem={({item, key} : any) => {
        console.log(item);
        return(
          <View key={key}>
            <View style={styles.Header}>
              <Text style={styles.Text_header}>Hospital</Text>
              <Text>________________________________________</Text>
            </View>
            <View>
              <View style={{flexDirection:'row', justifyContent: "space-around", alignItems: 'center', marginTop:10}}>
                <Image source={require('../../../assets/Arrow-left.png')} />
                <Image source={item.image}/>
                <Image source={require('../../../assets/Arrow-right.png')} />
              </View>
            </View>
            <View style={{alignItems:'center', marginTop:10}}>
              <Text>{item.name}</Text>
              <Text>_________________________________________________________________</Text>
            </View>
            <View style={styles.Header}>
            <Text style={styles.Text_header}>สภากาชาดไทย</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
              <Text>______________________</Text>
              <Text>______________________</Text>
            </View>
            <View style={{alignItems:'center', marginTop:10}}>
              <Text>ปริมาณเลือดในคลังข้อมูล</Text>
              <Text>ณ วันที่ 3 สิงหาคม 2566</Text>
            </View>
          </View>
        )
      }}/>
      <FlatList
      data={hospitals}
      keyExtractor={(item : any) => item.name}
      renderItem={({item, key} : any) => {
        console.log(item);
      />
      
    </SafeAreaView>
  );
}
      
export default BloodScreen;