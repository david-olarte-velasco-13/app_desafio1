/* eslint-disable prettier/prettier */
import React from 'react'
import {Image, View} from 'react-native';

export const AClogo = () => {
  return (
    <View style={{
        alignItems: 'center'
    }}>
        <Image
            source={require('../assets/ACIV_INDUSTRIA_4.0_red.png')}
            style={{
                width: 250,
                height: 87
            }}
        />
    </View>
  )
}
