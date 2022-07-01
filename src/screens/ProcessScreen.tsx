/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { KeyboardAvoidingView, View, ScrollView, Dimensions, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { AClogo } from '../components/AClogo';
import { loginStyles } from '../theme/loginTheme';
import { manageStyles } from '../theme/manageTheme';

interface Props extends StackScreenProps<any, any> {}
const { width, height } = Dimensions.get('window');

const ProcessScreen = ({navigation}: Props) => {

  
  let [matriz, setMatriz] = useState([
    { key:'1', 
    action: 
      <>
        
      </>
    },

    { key:'2', 
    action: 
      <>
        
      </>
    },

    { key:'3',
    action: 
      <>
        
      </>
    },

    { key:'4',
    action: 
      <>
        
      </>
    },

    { key:'5',
    action: 
      <>
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