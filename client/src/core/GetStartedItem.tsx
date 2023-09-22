import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const {width, height} = Dimensions.get('screen');

export const GetStartedItem = ({item}: any) => {
  
  return (
    <View style={styles.container}>
      <Image source={item.img} style={styles.img}/>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>
        {item.content}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  img: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20
  },
  content: {
    fontSize: 18,
    color: '#4D4D4D',
    marginHorizontal: 50,
    lineHeight: 27,
  },
})