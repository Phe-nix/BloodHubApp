import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    appointMent: {
        flexDirection: 'row',
        borderRadius: 30,
        shadowColor: "#00000",
        elevation: 10,
        marginBottom: 10
    },
    picture: {
        width: '45%',
        height: 120
    },
    box: {
        width:'55%',
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        padding: 10,
        justifyContent: 'space-between'
    },
    profileAndCross: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    pictureProfile: {
        width: 40,
        height: 40,
        borderRadius: 20,
    }, detail: {
        marginLeft: 10
    },

    nameProfile: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    postTime: {
        fontSize: 10
    },
    cross: {
        marginTop: 5, marginRight: 10, width: 15, height: 15, marginLeft: 10
    },
    description: {
        fontSize: 15,
        marginTop: 10
    },
    pending: {
        color: 'orange',
        fontSize: 12,
        textAlign: 'right',
        marginRight: 10
    }

})