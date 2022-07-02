/* eslint-disable prettier/prettier */
import React from 'react'
import {Image, View} from 'react-native';

export const Trompo = () => {
  return (
    <View style={{
        alignItems: 'center'
    }}>
        <Image
            source={require('../assets/trompo.png')}
            style={{
                marginTop: 10,
                width: 150,
                height: 150
            }}
        />
    </View>
  )
}