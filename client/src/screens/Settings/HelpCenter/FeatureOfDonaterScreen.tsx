import React from "react";
import { View, Image, SafeAreaView, ScrollView} from "react-native";

const FeatureOfDonaterScreen = () => {
    return (
        <SafeAreaView style={{flex:1, alignItems:'center'}}>
            <ScrollView style={{flex:1}}>
            <Image style={{width:440, height:600, flex:1}} source={require("../../../../assets/picture/Feature.png")} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default FeatureOfDonaterScreen;