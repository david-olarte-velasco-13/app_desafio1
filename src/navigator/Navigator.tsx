/* eslint-disable prettier/prettier */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import ManageScreen from '../screens/ManageScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProcessScreen from '../screens/ProcessScreen';


const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: '#154360'
            }
        }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ManageScreen" component={ManageScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ProcessScreen" component={ProcessScreen} />
      
    </Stack.Navigator>
  );
}