import React from 'react'
import { View, Text } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import PetFlatList from './PetFlatList';



const PetListStack = createStackNavigator();

const PetList = () => {
    return (
        <PetListStack.Navigator
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
            <PetListStack.Screen
                name='Pet'
                component={PetFlatList}
            />
        </PetListStack.Navigator>
    )
}

export default PetList

