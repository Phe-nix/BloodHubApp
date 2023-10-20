import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#E99999'
    },
    container: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    timeAndBookmark: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    time: {
        fontSize: 12,
        color: '#7A7A7A'
    },
    bookmarkIcon: {
        width: 17,
        height: 20
    },
    newsPicture: {
        marginTop: 20,
        width: 'auto',
        borderRadius: 30,
        height: 250
    },
    description: {
        marginTop: 20,
        fontSize: 15
    }

})