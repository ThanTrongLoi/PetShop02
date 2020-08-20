import React from 'react'
import { View, Text } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import FoodFlatList from './FoodFlatList'



const FoodListStack = createStackNavigator();

const FoodList = () => {
    return (
        <FoodListStack.Navigator
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
            <FoodListStack.Screen
                name='Food'
                component={FoodFlatList}
            />
        </FoodListStack.Navigator>
    )
}

export default FoodList

