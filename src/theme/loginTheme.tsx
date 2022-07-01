/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
    formContainer: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center',
        height: 700,
        marginBottom: 50
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30
    },
    label: {
        marginTop: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    inputField: {
        color: 'white',
        fontSize: 20
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 30
    },
    button: {
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100
    },
    buttonTex: {
        fontSize: 18,
        color: 'white'
    },
    newUserContainer: {
        alignItems: 'center',
        marginTop: 10
    }
});