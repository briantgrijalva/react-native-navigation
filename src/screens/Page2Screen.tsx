import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../themes/appTheme';

export const Page2Screen = () => {

    const navigator = useNavigation<any>();

    useEffect(() => {
      navigator.setOptions({
        title: 'Hello World',
        headerBackTitle: '',
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <View style={styles.globalMargin}>
       <Text style={styles.title}>
           Page2Screen
       </Text>

       <Button
            title="Go page 3"
            onPress={() => navigator.navigate({name:'Page3Screen'})}
       />
    </View>
  );
};
