import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
// import { StackScreenProps } from '@react-navigation/stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from '../themes/appTheme';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect} from 'react';

interface Props extends DrawerScreenProps< any, any>{}

export const Page1Screen = ({navigation}: Props) => {

    useEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
            <Icon
                name="menu-outline"
                size={40}
                // color={colors.primary}
                onPress={() => navigation.toggleDrawer()}
            />
            // <Button
            //     title="Menu"
            //     onPress={() => navigation.toggleDrawer()}
            // />
        ),
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


  return (
    <View style={styles.globalMargin}>
       <Text style={styles.title}>
           Page1Screen
       </Text>

       <Button
            title="Go page 2"
            onPress={() => navigation.navigate('Page2Screen')}
       />

        <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
                marginVertical: 20,
                fontSize: 20,
                marginLeft: 5,
            }}
        >
            Navigate with arguments
        </Text>

        <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{flexDirection: 'row'}}
        >
            <TouchableOpacity
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                    ...styles.largeButton,
                    backgroundColor: '#5856D6',
                }}
                onPress={ () => navigation.navigate('PersonScreen', {
                    id: 1,
                    name: 'Pedro',
                })}
            >
                <Icon name="male-outline" size={32} color="#FFF" />
                <Text style={styles.textLargeButton}>Pedro</Text>
            </TouchableOpacity>

            <TouchableOpacity
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                    ...styles.largeButton,
                    backgroundColor: '#FF9427',
                }}
                onPress={ () => navigation.navigate('PersonScreen', {
                    id: 2,
                    name: 'Maria',
                })}
            >
                <Icon name="female-outline" size={32} color="#FFF" />
                <Text style={styles.textLargeButton}>Maria</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};
