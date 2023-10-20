import {Text, View} from "react-native";

const Label = (props: any) => {
    return(
        <View style={{width: 90, alignItems:'center', borderWidth:1, borderRadius:10, paddingVertical:5}}>
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:40, color:'red'}}>{props.bloodType}</Text>
            </View>
            <View style={{alignItems:'center', borderWidth:1, borderRadius:10, borderColor:'red', backgroundColor:'pink', marginTop:5, padding:2}}>
                <Text style={{fontSize:10, color:'white'}}>เลือดที่ต้องการ</Text>
                <Text style={{fontSize:12, color:'white'}}>{props.unit}</Text>
            </View>
        </View>
    )
}
export default Label;