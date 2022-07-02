/* eslint-disable prettier/prettier */
import React from 'react'
import {Image, View} from 'react-native';

export const Tankreact = () => {
  return (
    <View style={{
        alignItems: 'center'
    }}>
        <Image
            source={require('../assets/tankreact.png')}
            style={{
                marginTop: 10,
                width: 209,
                height: 94
            }}
        />
    </View>
  )
}