import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


const ContactUsScreen = () => {
    return (
        <View style={{ flex: 1, paddingTop: 5 }}>
            <View style={{ flex: 1, padding: 20, elevation: 10, backgroundColor: 'white' }}>
                <View style={{ borderBottomWidth: 1, paddingBottom: 20, marginBottom: 20, borderColor: "#FFB6B6" }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ติดต่อเราได้ผ่านช่องทางนี้</Text>
                </View>
                <View style={{ marginBottom: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ borderColor: 'pink', marginRight: 5, marginBottom:10 }}>
                        <FontAwesome style={{ borderColor: 'pink', color: '#7A7A7A' }} name="envelope-o" size={30} color="#fff" />
                    </View>
                    <Text style={{ fontSize: 15 }}> : 64070054@kmitl.ac.th</Text>
                </View>
                <View style={{ marginBottom: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ borderColor: 'pink', marginRight: 12 }}>
                        <FontAwesome style={{ borderColor: 'pink', color: '#7A7A7A' }} name="phone" size={30} color="#fff" />
                    </View>
                    <Text style={{ fontSize: 15 }}> : 0982471610</Text>
                </View>
            </View>
        </View>
    )
}

export default ContactUsScreen;