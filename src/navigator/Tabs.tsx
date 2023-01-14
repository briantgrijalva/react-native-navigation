import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
// import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../themes/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';


export const Tabs = () => {
    return Platform.OS === 'ios'
            ? <TabsIOS />
            : <TabsAndroid />;
};


const BottomTabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
  return (
    <BottomTabAndroid.Navigator
        sceneAnimationEnabled={true}
        barStyle={{
            backgroundColor: colors.primary,
        }}
        screenOptions={ ({route}) => ({
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            tabBarIcon: ( {color, focused}) => {
                let iconName: string = '';

                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = 'bar-chart-outline';
                        break;
                    case 'Tab2Screen':
                        iconName = 'home-outline';
                        break;
                    case 'StackNavigator':
                        iconName = 'library-outline';
                        break;
                }
                return <Icon name={iconName} size={22} color={color} />;
            },
            tabBarActiveTintColor: colors.primary,
            // tabBarStyle: {
            //     borderTopColor: colors.primary,
            //     borderTopWidth: 0,
            //     elevation: 0,
            // },
            // tabBarLabelStyle: {
            //     fontSize: 15,
            // },
        })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}


const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
        // eslint-disable-next-line react-native/no-inline-styles
        sceneContainerStyle={{
            backgroundColor: 'white',
        }}
        screenOptions={ ({route}) => ({
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            tabBarIcon: ( {color, focused, size}) => {
                let iconName: string = '';

                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = 'T1';
                        break;
                    case 'Tab2Screen':
                        iconName = 'T2';
                        break;
                    case 'StackNavigator':
                        iconName = 'St';
                        break;
                }
                return <Text style={{color}}>{iconName}</Text>;
            },
            tabBarActiveTintColor: colors.primary,
            tabBarStyle: {
                borderTopColor: colors.primary,
                borderTopWidth: 0,
                elevation: 0,
            },
            tabBarLabelStyle: {
                fontSize: 15,
            },
        })}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{title: 'Tab1', tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text>}} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={Tab2Screen} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
};
