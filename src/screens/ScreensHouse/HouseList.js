import React from 'react'
import { View, Text, StatusBar } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import HouseFlatList from './HouseFlatList'


const HouseListStack = createStackNavigator();

const HouseList = () => {
    return (
        <HouseListStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#82e9de'
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerBackTitleVisible: false
            }}
        >
            <HouseListStack.Screen
                name='House'
                component={HouseFlatList}
            />
        </HouseListStack.Navigator>

    )
}

export default HouseList

