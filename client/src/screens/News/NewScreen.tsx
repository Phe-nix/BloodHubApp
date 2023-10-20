import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./NewScreen.style"
import picture from "../../../assets/picture/kitten.png"
import New from "./Components/New"



const NewScreen = ({ navigation }: any) => {
  return (
    <View style={styles.background}>
      <View style={{marginBottom:10}}>
        <Text style={styles.lastestNews}>ข่าวสารล่าสุด</Text>
        <Image style={styles.lastestNewsPicture} source={picture} />
        <Text style={styles.title}>Black Cat</Text>

        <Text style={styles.description}>Black Cat are well known for their association with Halloween, witchcraft, and bad luck. However, despite heir reputation, they are...
          <Text style={styles.seeMore}> see more</Text>
        </Text>
        <View style={styles.timeAndBookmark}>
          <Text style={styles.lastestTimeNews}>22 พ.ค. 2546 · สุราษฎร์ธานี</Text>
          <Image style={styles.bookmarkIcon} source={require('../../../assets/icon/icon_bookmark.png')} />
        </View>
      </View>
      <TouchableOpacity onPress={() => { navigation.navigate('NewDetail') }}>
        <New image={picture} title={"I love cat"} description={"Black Cat are well known for their association with..."} time={"22 พ.ค. 2546 · สุราษฎร์ธานี"} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate('NewDetail') }}>
        <New image={picture} title={"I love cat"} description={"Black Cat are well known for their association with..."} time={"22 พ.ค. 2546 · สุราษฎร์ธานี"} />
      </TouchableOpacity>

    </View>
  );
};

export default NewScreen;