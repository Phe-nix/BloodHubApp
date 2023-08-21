import React from 'react';
import { Dimensions, StyleSheet, Text, View } from "react-native";

const {width, height} = Dimensions.get('screen');

export const GetStartedItem = ({item}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
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
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#333',
  },
})