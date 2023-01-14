import React from 'react';
import { View, Text } from 'react-native';
import { useEffect } from 'react';

export const Tab3Screen = () => {

    useEffect(() => {
        console.log('Tab3Screeen effect');
      }, []);

  return (
    <View>
        <Text>
            Tab3Screen
        </Text>
    </View>
  );
};
