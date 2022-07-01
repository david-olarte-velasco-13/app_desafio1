/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';

export const Background = () => {
  return (
    <View
        style={{
            position: 'absolute',
            backgroundColor: '#131e35',
            top: -260,
            width: 1000,
            height: 1200,
            transform: [
                {rotate: '-70deg'}
            ]

        }}
    />
  )
}
