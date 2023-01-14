import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
        style={{
            paddingTop: top,
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        sceneContainerStyle={{
            backgroundColor: 'white',
        }}
        screenOptions={ ({route}) => ({
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            tabBarIcon: ( {color, focused}) => {
                let iconName: string = '';

                switch (route.name) {
                    case 'ChatScreen':
                        iconName = 'paper-plane-outline';
                        break;
                    case 'ContactScreen':
                        iconName = 'people-outline';
                        break;
                    case 'AlbumsScreen':
                        iconName = 'images-outline';
                        break;
                }
                return <Icon name={iconName} size={22} color={color} />;
            },
            tabBarPressColor: colors.primary,
            tabBarShowIcon: true,
            tabBarIndicatorStyle: {
                backgroundColor: colors.primary,
            },
            tabBarStyle: {
                shadowColor: 'transparent',
                elevation: 0,
            },
        })}
    >
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
