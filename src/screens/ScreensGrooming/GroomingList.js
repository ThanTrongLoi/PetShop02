import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import ModalList from '../../components/listitemcomponents/ModalListGrooming';
import { ScrollView } from 'react-native-gesture-handler';



const GroomingListStack = createStackNavigator();

const GroomingList = () => {
    return (

        <GroomingListStack.Navigator
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
            <GroomingListStack.Screen
                name='Service'
                component={ModalList}
            />
        </GroomingListStack.Navigator>

    )
}

export default GroomingList

