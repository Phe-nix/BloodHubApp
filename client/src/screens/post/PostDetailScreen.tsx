import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './PostDetailScreen.style';
import User from './components/User';

const PostDetailScreen = ({route}: any) => {
  const { post } = route.params;
  console.log(post.image);
  

  return(
    <View style={styles.container}>
      <User image={post.user.profileImage}userName={`${post.user.firstName} ${post.user.lastName}`} time={post.createdAt} />
      
      <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
        <Text>Post Name</Text>
      </View>
      <Image source={{uri: post.image}} style={{height: '30%'}}/>
      <View style={styles.underline} />
      <View style={{gap: 20}}>
        <View style={{gap: 10}}>
            <Text style={{fontWeight: 'bold'}}>รายละเอียด</Text>
            <Text>{post.description}</Text>
        </View>
        <View style={{gap: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex:1, color: "#856464"}}>กรุ๊ปเลือด</Text>
            <Text style={{flex:1}}>{post.bloodType}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex:1, color: "#856464"}}>เคส</Text>
            <Text style={{flex:1}}>{post.case}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex:1, color: "#856464"}}>เบอร์ติดต่อ</Text>
            <Text style={{flex:1}}>{post.phone_number}</Text>
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