/* eslint-disable prettier/prettier */
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AClogo } from '../components/AClogo';
//import { Text, View } from 'react-native';
import { Background } from '../components/Background';
import { loginStyles } from '../theme/loginTheme';


interface Props extends StackScreenProps<any, any> {}

const RegisterScreen = ({navigation}: Props) => {
  return (
    <>
        {/*Background */}
        <Background/>


        <KeyboardAvoidingView 
            style={{flex: 1}}
            >
            <View style = {loginStyles.formContainer}>
                {/*Keyboard avoid view */}
                <AClogo/>

                <Text style={loginStyles.title}>Crear nueva cuenta</Text>

                <Text style={loginStyles.label}>Correo electrónico:</Text>
                <TextInput placeholder="Ingrese su correo"
                placeholderTextColor="rgba(255,255,255,0.4)"
                keyboardType='email-address'
                underlineColorAndroid="white"
                style = {loginStyles.inputField} 
                selectionColor = 'white'

                //TODO: onChange, value

                autoCapitalize = 'none'
                autoCorrect = {false}
                />

                <Text style={loginStyles.label}>Nombre:</Text>
                <TextInput placeholder="Ingrese su nombre"
                secureTextEntry = {true}
                placeholderTextColor="rgba(255,255,255,0.4)"
                underlineColorAndroid="white"
                style = {loginStyles.inputField} 
                selectionColor = 'white'

                //TODO: onChange, value

                autoCapitalize = 'none'
                autoCorrect = {false}
                />

                <Text style={loginStyles.label}>Contraseña:</Text>
                <TextInput placeholder="************"
                secureTextEntry = {true}
                placeholderTextColor="rgba(255,255,255,0.4)"
                underlineColorAndroid="white"
                style = {loginStyles.inputField} 
                selectionColor = 'white'

                //TODO: onChange, value

                autoCapitalize = 'none'
                autoCorrect = {false}
                />
                <Text style={loginStyles.label}>Confirmar contraseña:</Text>
                <TextInput placeholder="************"
                secureTextEntry = {true}
                placeholderTextColor="rgba(255,255,255,0.4)"
                underlineColorAndroid="white"
                style = {loginStyles.inputField} 
                selectionColor = 'white'

                //TODO: onChange, value

                autoCapitalize = 'none'
                autoCorrect = {false}
                />



                {/*Boton */}
                <View style = {loginStyles.buttonContainer}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress = {() => navigation.replace('ManageScreen')}
                        style = {loginStyles.button}>
                            <Text
                                style ={loginStyles.buttonTex}
                                >
                                Crear cuenta</Text>
                        </TouchableOpacity>
                </View>

                {/* crear una cuenta */}
                <View style = {loginStyles.newUserContainer}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress = {() => navigation.replace('LoginScreen')}
                        >
                            <Text style = {loginStyles.buttonTex}>
                                Volver
                            </Text>

                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>



    </>
  )
}

export default RegisterScreen;