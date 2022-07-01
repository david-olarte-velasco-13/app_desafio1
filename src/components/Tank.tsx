/* eslint-disable prettier/prettier */
import React from 'react'
import {Image, View} from 'react-native';

export const Tank = () => {
  return (
    <View style={{
        alignItems: 'center'
    }}>
        <Image
            source={require('../assets/tank.png')}
            style={{
                marginTop: 10,
                width: 150,
                height: 150
            }}
        />
    </View>
  )
}