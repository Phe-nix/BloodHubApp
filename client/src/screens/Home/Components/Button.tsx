import { View, Image, Text } from "react-native";

const Button = (props: any) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image source={props.image} />
            <View style={{alignItems:'center'}}>
                <Text style={{ marginTop: 10, fontSize: 15 }}>{props.text}</Text>
                <Text style={{ fontSize: 15 }}>{props.text_0}</Text>
            </View>
        </View>
    )

}
export default Button;