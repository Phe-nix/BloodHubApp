import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './PostDetailScreen.style';
import User from './components/User';

const PostDetailScreen = () => {
  return(
    <View style={styles.container}>
      <User userName="Norrapat Srimoonnoi" subHeader="test" />
      
      <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
        <Text>Post Name</Text>
        <Text>Post Name</Text>
      </View>
      <View style={{borderWidth: 1, height: '30%'}}>
        <Image source={require('../../../assets/citizen1.png')}/>
      </View>
      <View style={styles.underline} />
      <View style={{gap: 20}}>
        <View>
            <Text style={{fontWeight: 'bold'}}>รายละเอียด</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum possimus in officiis est, animi expedita dolor a quae iusto deleniti!</Text>
        </View>
        <View style={{gap: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex:1, color: "#856464"}}>กรุ๊ปเลือด</Text>
            <Text style={{flex:1}}>AB</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex:1, color: "#856464"}}>เคส</Text>
            <Text style={{flex:1}}>AB</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex:1, color: "#856464"}}>เบอร์ติดต่อ</Text>
            <Text style={{flex:1}}>AB</Text>
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.text}>บริจาคเลือด</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PostDetailScreen;