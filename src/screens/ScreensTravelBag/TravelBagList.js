import React from 'react'
import { View, Text } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import TravelBagFlatList from './TravelBagFlatList'


const TravelBagListStack = createStackNavigator();

const TravelBagList = () => {
    return (
        <TravelBagListStack.Navigator
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
            <TravelBagListStack.Screen
                name='TravelBag'
                component={TravelBagFlatList}
            />
        </TravelBagListStack.Navigator>
    )
}

export default TravelBagList

