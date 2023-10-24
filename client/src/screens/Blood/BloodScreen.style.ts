import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        alignItems: 'center',
        marginTop: 20,
    },
    hospital: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    underLine_1: {
        borderColor: '#FFB6B6',
        borderBottomWidth: 1,
        marginHorizontal: 20,
        marginTop: 20
    },
    chooseHospital: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
    },
    arrowButton: {
        marginHorizontal: 10
    },
    hospitals: {
        justifyContent: 'center'
    },
    underLine_2: {
        borderColor: 'grey',
        borderBottomWidth: 1,
    },
    underLine_3: {
        borderColor: '#F0888C',
        borderWidth: 1,
        width: 150
    },
    hospitalName: {
        marginTop: 10,
        fontSize: 15
    },
    unit: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        color: 'your_color_here', // Add the color property with your desired text color
    },

})