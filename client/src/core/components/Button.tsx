import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

let buttonWidth = 100;

interface buttonProps {
  title: string
  buttonWith: number
  navigation: any
  to: string
}

export const Button = (props: buttonProps) => {
  let text: string | null = props.title ? props.title : "Null";
  

  return (
      <TouchableOpacity onPress={()=>{props.navigation.navigate(props.to)}}>
        <View style={styles.button}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button:{
    paddingVertical: 15,
    paddingHorizontal: buttonWidth,
    borderRadius: 100,
    backgroundColor: '#ED8085',
    margin: 5
  },
  text:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
})