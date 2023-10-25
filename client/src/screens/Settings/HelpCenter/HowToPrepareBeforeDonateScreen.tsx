import React from "react";
import { SafeAreaView, ScrollView, Image } from "react-native";

const HowToPrepareBeforeDonate = () => {
    return (
        <SafeAreaView style={{flex:1, alignItems:'center'}}>
        <ScrollView style={{flex:1}}>
        <Image style={{width:410, height:570, flex:1}} source={require("../../../../assets/picture/Prepare.png")} />
        </ScrollView>
    </SafeAreaView>
    )
}

export default HowToPrepareBeforeDonate;