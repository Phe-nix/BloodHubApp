import React, { useRef } from 'react';
import { Animated, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GetStartedItem } from '../core/GetStartedItem';
import Panigation from '../core/Panigation';
import { Button } from '../core/components/Button';
import Layer from '../core/layouts/Layout';
import { item } from '../mock/getStart';

export const GetStarted = ({navigation} : any) => {
  let scrollX = useRef(new Animated.Value(0)).current;
  
  
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
      <Layer>
        <SafeAreaView style={styles.center}>
          <View style={styles.content}>
            <FlatList
              data={item} 
              renderItem={({item}) => <GetStartedItem item={item} /> }
              horizontal
              pagingEnabled
              snapToAlignment='center'
              showsHorizontalScrollIndicator={false}
              onScroll={handleOnScroll}
            />
          </View>

          <Panigation data={item} scrollX={scrollX}/>
          
          <View style={styles.buttons}>
            <Button title="Get Started" buttonWith={100} to="SignUp" navigation={navigation} />
            <TouchableOpacity onPress={()=>{navigation.navigate('SignIn')}}>
              <Text style={{color: 'grey', margin: 10}}>Existing user? Sign in</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Layer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  center:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content:{
    flex: 7,
  },
  buttons:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  }
})