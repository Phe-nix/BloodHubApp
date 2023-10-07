import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    underLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#FAB1B1',
        marginVertical:10
    },
    news: {
        flexDirection: 'row',
    },
    newsPicture: {
        width: '30%',
        height: 90,
        borderRadius: 20
    },
    box: {
        paddingLeft:10,
        width: '70%',
        marginRight:10,
        justifyContent:'space-around'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 12
    },
    timeAndBookmark: {
        marginTop: 5, flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    timeNews:{
        fontSize:10,
        color:'#7A7A7A'
    },
    bookmarkIcon:{
        height:18,
        width:15
    }

})