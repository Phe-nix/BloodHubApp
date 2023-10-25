import React from "react";
import { View, Text } from "react-native";

const HowToChangePassword = () => {
    return (
        <View style={{ flex: 1, paddingTop: 5 }}>
            <View style={{ flex: 1, padding: 20, elevation: 10, backgroundColor: 'white' }}>
                <View style={{ marginBottom: 20, borderBottomWidth: 1, paddingBottom: 20, borderColor: "#FFB6B6" }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>หากท่านต้องการขอรับบริจาคเลือด ให้ดำเนินการตามขั้นตอนนี้</Text>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 15 }}>1) เมื่ออยู่ที่หน้าหลักแล้ว ให้กดไปหน้าตั้งค่าที่แถบด้านล่าง</Text>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 15 }}>2) กดเข้าไปที่หน้าโปรไฟล์ แล้วกดออกจากระบบ</Text>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 15 }}>3) กดเข้าสู่ระบบ แล้วกดลืมรหัสผ่าน</Text>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 15 }}>4) กรอกอีเมลของคุณ จากนั้นกดถัดไป</Text>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 15 }}>5) กรอก otp ที่ระบบส่งไปยังอีเมลของคุณ จากนั้นระบบจะพาคุณไปที่หน้าตั้งรหัสผ่าน </Text>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 15 }}>6) กรอกรหัสผ่านของคุณที่ต้องการจะตั้งใหม่ แล้วทำการเข้าสู่ระบบ</Text>
                </View>
            </View>
        </View>
    )
}

export default HowToChangePassword;