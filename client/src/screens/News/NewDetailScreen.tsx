import { StyleSheet, Text, View, Image} from 'react-native'
import {styles} from "./NewDetailScreen.style"
import bookmark from "../../../assets/icon/icon_bookmark.png"
import picture from "../../../assets/picture/kitten.png"
import React, {useState, useEffect} from "react";
import axios from "axios";

const NewDetailScreen = () => {
  return (
    <View style={styles.background}>
        <View style={styles.container}>
            <View style={{marginTop:10}}>
                <Text style={styles.title}>Black Cat</Text>
                <View style={styles.timeAndBookmark}>
                    <Text style={styles.time}>22 พ.ค. 2546 · สุราษฎร์ธานี</Text>
                    <Image style={styles.bookmarkIcon} source={bookmark}/>
                </View>
                <Image style={styles.newsPicture} source={picture}/>
                <Text style={styles.description}>Black cats are well known for their association with Halloween, witchcraft, and bad luck. However, despite their reputation, they are unique felines that are thought to bring good luck in some countries, and they have a rich history dating all the way back to the Middle Ages. Of course, other than the color of their fur, black cats are really no different from any other feline; the difference is in how people think about them.</Text>
            </View>
        </View>
    </View>
  )
}

export default NewDetailScreen