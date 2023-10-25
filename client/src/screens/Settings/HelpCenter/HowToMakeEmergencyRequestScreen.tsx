import React from "react";
import { View, Text } from "react-native";

const HowToMakeEmergencyRequest = () => {
    return (
        <View style={{ flex: 1, paddingTop:5 }}>
            <View style={{flex:1,padding:20,elevation:10, backgroundColor:'white'}}>
                <View style={{ marginBottom: 20, borderBottomWidth:1, paddingBottom:20, borderColor:"#FFB6B6"}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>หากท่านต้องการขอรับบริจาคเลือด ให้ดำเนินการตามขั้นตอนนี้</Text>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 15 }}>1) เมื่อเข้ามาที่หน้าหลักแล้ว ให้กดไปหน้าโพต์ที่แถบด้านล่าง</Text>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 15 }}>2) กรอกรายละเอียดการขอรับบริจาคเลือดให้ครบถ้วน และเปลี่ยนประเภทของโพสต์ให้เป็น "ฉุกเฉิน"</Text>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 15 }}>3) กดโพสต์เพื่อสร้างโพสต์ขอรับบริจาคเลือด</Text>
                </View>
            </View>
        </View>
    )
}

export default HowToMakeEmergencyRequest;