/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { KeyboardAvoidingView, View, ScrollView, Dimensions, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { AClogo } from '../components/AClogo';
import { Tankcatalizador } from '../components/Tankcatalizador';
import { Tankreact } from '../components/Tankreact';
import { Trompo } from '../components/Trompo';
import { loginStyles } from '../theme/loginTheme';
import { manageStyles } from '../theme/manageTheme';

interface Props extends StackScreenProps<any, any> {}
const { width, height } = Dimensions.get('window');

const ProcessScreen = ({navigation}: Props) => {

  
  let [matriz, setMatriz] = useState([
    { key:'1', 
    action: 
      <>
        <Tankcatalizador/>
        <View style={manageStyles.progressBar}>
          <Text style={manageStyles.labelTank}>Tiempo: </Text>
          <TextInput placeholder=" 00 : 00 : 00 "
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

    { key:'2', 
    action: 
      <>
        <Tankreact/>
        <View style={manageStyles.progressBar}>
          <Text style={manageStyles.labelTank}>Tiempo: </Text>
          <TextInput placeholder=" 00 : 00 : 00 "
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
        <Trompo/>
        <View style={{
          flex:1,
          flexDirection: 'row',
          alignSelf: 'center',
          
        }}>
          <View style={manageStyles.progressBar}>
            <Text style={manageStyles.labelTank}>Tiempo: </Text>
            <TextInput placeholder=" 00 : 00 : 00 "
            placeholderTextColor="rgba(255,255,255,0.4)"
            style={manageStyles.inputs}
            selectionColor='white'

            //TODO: onChange, value
            autoCapitalize='none'
            autoCorrect={false} />
          </View>
          <View style={manageStyles.progressBar}>
            <Text style={manageStyles.labelTank}>Velocidad: </Text>
            <TextInput placeholder=" 00 rpm "
            placeholderTextColor="rgba(255,255,255,0.4)"
            style={manageStyles.inputs}
            selectionColor='white'

            //TODO: onChange, value
            autoCapitalize='none'
            autoCorrect={false} />
          </View>
        </View>
        <Text style={manageStyles.labelTank}>---------------------------------------</Text>
      </>
    },

    { key:'4',
    action: 
      <>
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
          onPress = {() => navigation.replace('ManageScreen')}
          >
              <View style = {manageStyles.fabstop}>
                <Text style = {manageStyles.fabTextstop} >Parar</Text>
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

export default ProcessScreen;