import React from 'react'
import { View, Text } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import ToyFlatList from './ToyFlatList'


const ToyListStack = createStackNavigator();

const ToyList = () => {
    return (
        <ToyListStack.Navigator
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
            <ToyListStack.Screen
                name='Toy'
                component={ToyFlatList}
            />
        </ToyListStack.Navigator>
    )
}

export default ToyList

