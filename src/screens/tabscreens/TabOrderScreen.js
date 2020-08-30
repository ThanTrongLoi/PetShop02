import React from 'react'
import { View, Text } from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import BillScreen from './OrderScreens/BillScreen'
import CartScreen from './OrderScreens/CartScreen'

const Tab = createMaterialTopTabNavigator()

const TabOrderScreen = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                backgroundColor: 'red',
                activeTintColor: '#fff',
                showIcon: true,
                showLabel: false,
                style: {
                    backgroundColor: '#ff9800',

                },

            }}

        >
            <Tab.Screen
                name='Cart'
                component={CartScreen}
                options={{
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Icon
                            name={!focused ? 'cart' : 'cart-outline'}
                            size={focused ? 26 : 22}
                            color={focused ? '#fff' : tintColor}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='History'
                component={BillScreen}
                options={{
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Icon
                            name={!focused ? 'document-text' : 'document-text-outline'}
                            size={focused ? 26 : 22}
                            color={focused ? '#fff' : tintColor}
                        />
                    )
                }}

            />
        </Tab.Navigator >
    )
}

export default TabOrderScreen
