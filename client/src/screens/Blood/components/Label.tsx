import { Text, View } from "react-native";

const Label = (props: any) => {
    return (
        <View style={{ width: 90, alignItems: 'center', borderWidth: 1, borderRadius: 10, paddingTop: 5, paddingBottom: 10 }}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 40, color: 'red' }}>{props.bloodType}</Text>
            </View>
            <View style={{ alignItems: 'center', borderWidth: 1, borderRadius: 10, borderColor: 'red', backgroundColor: 'pink', marginTop: 5, padding: 4 }}>
                <Text style={{ fontSize: 10, color: 'black' }}>เลือดที่ต้องการ</Text>
                <Text style={{ fontSize: 12, color: 'black' }}>{props.unit}</Text>
                <Text style={{ fontSize: 12, color: 'black' }}>ยูนิต/เดือน</Text>
            </View>
        </View>
    )
}
export default Label;