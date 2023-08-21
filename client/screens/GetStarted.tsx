import React, { useRef } from 'react';
import { Animated, FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GetStartedItem } from '../components/GetStartedItem';
import Panigation from '../components/Panigation';
import { item } from '../model/getStart';

export const GetStarted = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      { 
        useNativeDriver: false
      },
      )(event);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList data={item} renderItem=
          {({item}) => <GetStartedItem item={item} /> }
          horizontal
          pagingEnabled
          snapToAlignment='center'
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
        />
        <Panigation data={item} scrollX={scrollX}/>
        <TouchableOpacity>
          <Text style={styles.btn}>Get Started</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: 'red',
    textAlign: 'center',
    fontSize: 24,
    bottom: 100,
  }
})