import React from 'react'
import { View, Text } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import ModalList from '../../components/listitemcomponents/ModalListGrooming';



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
                component={ModalList}
            />
        </PetListStack.Navigator>
    )
}

export default PetList

