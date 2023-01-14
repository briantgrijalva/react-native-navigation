import React from 'react';
import { View, Text } from 'react-native';
import { useEffect } from 'react';
import { styles } from '../themes/appTheme';

// import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {

    useEffect(() => {
      console.log('Tab1Screeen effect');
    }, []);

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
            Iconos
        </Text>
        <Text>
            <TouchableIcon iconName="airplane-outline" />
            <TouchableIcon iconName="attach-outline" />
            <TouchableIcon iconName="bonfire-outline" />
            <TouchableIcon iconName="calculator-outline" />
            <TouchableIcon iconName="chatbubble-ellipses-outline" />
            <TouchableIcon iconName="images-outline" />
            <TouchableIcon iconName="leaf-outline" />
        </Text>
    </View>
  );
};
