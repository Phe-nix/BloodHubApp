import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    },
    lastestNews: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    lastestNewsPicture: {
        marginTop: 20,
        width: 'auto',
        height: 250,
        borderRadius: 30
    },
    title: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    description: {
        marginTop: 10,
        fontSize: 15
    },
    seeMore: {
        marginLeft: 10,
        fontSize: 15,
        color: '#FA9598'
    },
    timeAndBookmark: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    lastestTimeNews: {
        color: '#7A7A7A',
        fontSize: 12
    },
    bookmarkIcon:{
        width: 18,
         height: 20
    }

})