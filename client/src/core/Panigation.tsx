import React from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { initItems } from '../mock/getStart';

interface PanigationProps {
  data: initItems[];
  scrollX: Object;
}

const Panigation: React.FC<PanigationProps> = ({data, scrollX}: any) => {
  const {width} = Dimensions.get('screen');
  
  return (
    <View style={styles.container}>
      {data.map((_: any, idx: number) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#ccc','#ED8085','#ccc'],
          extrapolate: 'clamp',
        });
        return <Animated.View key={idx.toString()} style={[styles.dot, {backgroundColor: dotColor}]}/>
      })}
    </View>
  )
}

export default Panigation

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
    // backgroundColor: '#ccc',
    
  }
})