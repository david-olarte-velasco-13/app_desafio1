/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */


import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { KeyboardAvoidingView, ProgressBarAndroid, Text, TouchableOpacity, View, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AClogo } from '../components/AClogo';
import { Tank } from '../components/Tank';
import { loginStyles } from '../theme/loginTheme';
import { manageStyles } from '../theme/manageTheme';

interface Props extends StackScreenProps<any, any> {}
const { width, height } = Dimensions.get('window');

const ManageScreen = ({navigation}: Props) => {

  
  let [matriz, setMatriz] = useState([
    { key:'1', 
    action: 
      <>
        <Text style={manageStyles.label}>Cantidad de catalizador:</Text>
        <TextInput placeholder="  ej: 6000 g"
        placeholderTextColor="rgba(255,255,255,0.4)"
        style={manageStyles.inputs}
        selectionColor='white'

        //TODO: onChange, value
        autoCapitalize='none'
        autoCorrect={false} />
      </>
    },

    { key:'2', 
    action: 
      <>
        <View style={manageStyles.progressBar}>
          <Text style={manageStyles.labelTank}>Contenedor de Niquel</Text>
        </View>
        <Tank />
        <View style={manageStyles.progressBar}>
          <Text style={manageStyles.labelTank}>Contenido: </Text>
          <TextInput placeholder="  ej: 600 g"
          placeholderTextColor="rgba(255,255,255,0.4)"
          style={manageStyles.inputs}
          selectionColor='white'

          //TODO: onChange, value
          autoCapitalize='none'
          autoCorrect={false} />
        </View>
        <Text style={manageStyles.labelTank}>---------------------------------------</Text>
      </>
    },

    { key:'3',
    action: 
      <>
        <View style={manageStyles.progressBar}>
          <Text style={manageStyles.labelTank}>Contenedor de Vanadio</Text>
        </View>
        <Tank />
        <View style={manageStyles.progressBar}>
          <Text style={manageStyles.labelTank}>Contenido: </Text>
          <TextInput placeholder="  ej: 600 g"
          placeholderTextColor="rgba(255,255,255,0.4)"
          style={manageStyles.inputs}
          selectionColor='white'

          //TODO: onChange, value
          autoCapitalize='none'
          autoCorrect={false} />
        </View>
        <Text style={manageStyles.labelTank}>---------------------------------------</Text>
      </>
    },

    { key:'4',
    action: 
      <>
        <View style={manageStyles.progressBar}>
          <Text style={manageStyles.labelTank}>Contenedor de Ciclohexano</Text>
        </View>
        <Tank />
        <View style={manageStyles.progressBar}>
          <Text style={manageStyles.labelTank}>Contenido: </Text>
          <TextInput placeholder="  ej: 600 g"
          placeholderTextColor="rgba(255,255,255,0.4)"
          style={manageStyles.inputs}
          selectionColor='white'

          //TODO: onChange, value
          autoCapitalize='none'
          autoCorrect={false} />
        </View>
        <Text style={manageStyles.labelTank}>---------------------------------------</Text>
      </>
    },

    { key:'5',
    action: 
      <>
        <Text style={{
          marginTop: 25,
          marginBottom: 3,
          fontSize: 25,
          alignSelf: 'center',
          color: '#28f658',
          fontWeight: 'bold'
        }}>¿Desea dar inicio al proceso?</Text>
        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity
          activeOpacity={0.8}
          onPress = {() => navigation.replace('ProcessScreen')}
          >
              <View style = {manageStyles.fab}>
                <Text style = {manageStyles.fabText} >Iniciar</Text>
              </View>
          </TouchableOpacity>
        </View>
        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity
          activeOpacity={0.8}
          onPress = {() => navigation.replace('LoginScreen')}
          >
              <View style = {loginStyles.button}>
                <Text style = {loginStyles.buttonTex} >Salir</Text>
              </View>
          </TouchableOpacity>
        </View>
        
      </>
    },

  ]);

  return (
    <View style={manageStyles.container}>

      {/*<ImageBackground
          style={manageStyles.imagescreen}
          source={ require('../assets/ACIV_INDUSTRIA_4.0_red.png')}
  />*/}
      <AClogo/>
      <View style={manageStyles.panel}>
        {/*Background */}
        


        
            <ScrollView style={{
              flex:1,
              height:height,
              marginHorizontal: 15,
              marginVertical: 15}}>
              <KeyboardAvoidingView 
              style={{flex: 1}}
              >
              { 
                matriz.map((item) => {
                  return (
                      <View key = {item.key}>
                      {item.action}
                      </View>
                      )
                  })
              }
              </KeyboardAvoidingView>
            </ScrollView>
        


      </View>
    </View>
    
    

  )
}

export default ManageScreen;


