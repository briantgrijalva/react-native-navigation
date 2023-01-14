import React, {useContext} from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../themes/appTheme';

export const AlbumsScreen = () => {

    const { authState, signOut } = useContext( AuthContext );

  return (
    <View style={styles.globalMargin}>
       <Text style={styles.title}>
            AlbumsScreen
       </Text>
       {
            authState.isLoggedIn
            ?
                <Button
                    title="SignOut"
                    onPress={ () => signOut() }
                />
            :
                null
        }
    </View>
  );
};
