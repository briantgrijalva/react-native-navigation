import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import { SettingsScreen } from '../screens/SettingsScreen';
// import { StackNavigator } from './StackNavigator';
import { useWindowDimensions, View, Image, TouchableOpacity, Text } from 'react-native';
import { styles } from '../themes/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {

    const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
        screenOptions={{
            headerShown:false,
            drawerType: width >= 768 ? 'permanent' : 'front',
        }}
        drawerContent={ (props) => <InternalMenu {...props} />}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const InternalMenu = ( {navigation}: DrawerContentComponentProps) => {

    return (
        <DrawerContentScrollView>
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri:'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
                    }}
                    style={styles.avatar}
                />
            </View>

            <View style={styles.menuContainer}>
                <TouchableOpacity
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                        ...styles.menuButton,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                    onPress={ () => navigation.navigate('Tabs')}
                >
                    <Icon name="compass-outline" size={22} />
                    <Text // eslint-disable-next-line react-native/no-inline-styles
                        style={{
                            ...styles.menuText,
                            marginLeft: 4,
                            }}
                        >
                            Navigation
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                        ...styles.menuButton,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                    onPress={ () => navigation.navigate('SettingsScreen')}
                >
                    <Icon name="settings-outline" size={22} />
                    <Text
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{
                            ...styles.menuText,
                            marginLeft: 4,
                            }}
                        >
                            Settings
                    </Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
};
