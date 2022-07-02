/* eslint-disable prettier/prettier */
import React from 'react'
import {Image, View} from 'react-native';

export const Tankcatalizador = () => {
  return (
    <View style={{
        alignItems: 'center'
    }}>
        <Image
            source={require('../assets/tankcatalizador.png')}
            style={{
                marginTop: 10,
                width: 219,
                height: 135
            }}
        />
    </View>
  )
}