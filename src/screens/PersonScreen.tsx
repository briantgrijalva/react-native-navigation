import React, { useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../themes/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'>{}

// interface RouterParams {
//     id: number;
//     name: string;
// }

export const PersonScreen = ({route, navigation}: Props) => {

    const { changeUsername } = useContext( AuthContext );

    // const params = route.params as RouterParams;
    const params = route.params;

    useEffect(() => {
      navigation.setOptions({
        title: params.name,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      changeUsername(params.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
    <View style={styles.globalMargin}>
       <Text style={styles.title}>
           {
            JSON.stringify(params, null, 3)
           }
       </Text>
    </View>
  );
};
