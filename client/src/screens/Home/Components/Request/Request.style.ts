import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    underLine: {
        borderWidth: 1,
        borderColor: '#FAB1B1',
        marginVertical: 20
    },
    profile: {
        flexDirection: 'row'
    },
    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    },
    profileName: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    requestTime: {
        fontSize: 10
    },
    profileAndInfo: {
        marginTop: 10
    },
    iconAndInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    telIcon: {
        width: 18,
        height: 18,
        
    },
    bloodIcon: {
        width: 18,
        height: 23,
    },
    ageIcon: {
        width: 18,
        height: 15,

    },
    diseaseIcon: {
        width: 18,
        height: 18,

    },
    info: {
        fontSize: 15,
        marginLeft: 10,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    acceptButton: {
        backgroundColor: '#F8D3D4',
        width: 170,
        padding: 2,
        borderRadius:5
    },
    declineButton:{
        backgroundColor: '#D6D6D6',
        width: 170,
        padding: 5,
        borderRadius:5
    },
    acceptButtonText:{
        fontSize:15,
        textAlign:'center',
        color:'#FF363C'
    },
    declineButtonText:{
        fontSize:15,
        textAlign:'center'
    }
})