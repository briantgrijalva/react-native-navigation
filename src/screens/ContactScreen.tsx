import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../themes/appTheme';

export const ContactScreen = () => {

    const { authState ,signIn } = useContext( AuthContext );

  return (
    <View style={styles.globalMargin}>
       <Text style={styles.title}>
            ContactScreen
       </Text>
        {
            authState.isLoggedIn
            ?
                null
            :
                <Button
                    title="SignIn"
                    onPress={ () => signIn() }
                />
        }
    </View>
  );
};
