import { View, Text, Image } from "react-native";

const Card = (props : any) => {
  
  return(
    <View style={{width: 90, alignItems:'center', borderWidth:1, borderRadius:10, paddingVertical:5, shadowColor:'black', shadowOffset:{width:-2, height:4}, shadowOpacity:0.2, shadowRadius:10 }}>
      <Image style={{width:60}} source={props.image}/>
      <View style={{alignItems:'center', borderWidth:1, borderRadius:10, backgroundColor:'#E5E5E5', marginTop:10, padding:2}}>
        <Text style={{fontSize:10}}>เลือดที่ต้องการ</Text>
        <Text style={{fontSize:12}}>{props.unit}</Text>
        <Text style={{fontSize:10}}>ยูนิต/ต่อเดือน</Text>
      </View>
      <View style={{alignItems:'center', borderWidth:1, borderRadius:10, borderColor:'red', backgroundColor:'pink', marginTop:10, padding:2}}>
      <Text style={{fontSize:10}}>เลือดที่ได้รับ</Text>
      <Text style={{fontSize:10}}>{props.recieve}</Text>
      </View>
    </View>
  );
};

export default Card;