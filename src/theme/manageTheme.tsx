/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export const manageStyles = StyleSheet.create({
    container: {
        flexDirection:'column',
        height: height,
        width: width,
        marginTop: 15
    },
    panel:{
        backgroundColor: '#131e35',
        height: height*0.87,
        width: width,
        position: 'absolute',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        paddingBottom: 15,
        bottom: 0,
    },
    inputs: {
        heigth: 15,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: '#154360',
        borderRadius: 20,
        color: 'white',
        fontSize: 20
    },
    label: {
        marginTop: 25,
        marginBottom: 3,
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        alignItems: 'center'
    },
    progressBar: {
        marginVertical: 15,
        alignItems: 'center'
    },
    fab: {
        backgroundColor: '#154360',
        borderColor: '#28f658',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderWidth: 3,
        borderRadius: 20,
        justifyContent: 'center'
    },
    fabText: {
        color: '#28f658',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    fabstop: {
        backgroundColor: '#154360',
        borderColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderWidth: 3,
        borderRadius: 20,
        justifyContent: 'center'
    },
    fabTextstop: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    labelTank: {
        marginTop: 25,
        marginBottom: 3,
        fontSize: 25,
        alignContent: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    imagescreen: {
        height: height*0.25,
        width: width,
    },
})