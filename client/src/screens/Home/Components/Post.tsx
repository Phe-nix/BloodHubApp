import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import React from 'react'

const Post = (props: any, { navigation }: any) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ width: 50, height: 50, borderRadius: 25}} source={props.profile} />
                    <View style={{marginLeft:20}}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{props.name}</Text>
                        <Text>{props.time}</Text>
                    </View>
                    <View style={{ width: 20, height: 20, borderRadius: 10 }} />
                </View>
                <View>
                    <Image style={{ width: 20, height: 25 }} source={require('../../../../assets/icon/cross.png')} />
                </View>
            </View>
            <Image style={{ width: 'auto', height: 300 }} source={props.Image} />
            <View style={{ marginLeft: 20, marginTop: 10, flexDirection: 'row' }}>
                <Text style={{ fontSize: 15 }}>{props.description}...</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('PostDeatail') }}>
                    <Text style={{ marginLeft: 10, color: 'pink'}}>see more</Text>
                </TouchableOpacity>
            </View>
            <View style={{ borderWidth: 1, borderColor: 'grey', marginTop: 20 }} />
        </View>
    )
}

export default Post