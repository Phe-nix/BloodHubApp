import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./NewScreen.style"
import picture from "../../../assets/picture/kitten.png"
import New from "./Components/New"
import React, {useState, useEffect} from "react";
import axios from "axios";



const NewScreen = ({ navigation }: any) => {

  const [image, setImage] = React.useState(picture)
  const [title, setTitle] = React.useState("Black Cat");
  const [description, setDescription] = React.useState("Black Cat are well known for their association with Halloween, witchcraft, and bad luck. However, despite heir reputation, they are...")
  const [newsData, setNewsData] = React.useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:3000/news/getAllNews");
        const data = res.data;
        setNewsData(data);
        console.log('Data received:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error here, e.g., show an error message to the user.
      }
    }    
  
    fetchData();
  
    console.log(newsData);
  }, []);
  

  return (
    <View style={styles.background}>
      <View style={{marginBottom:10}}>
        <Text style={styles.lastestNews}>ข่าวสารล่าสุด</Text>
        <Image style={styles.lastestNewsPicture} source={image} />
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>{description}
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