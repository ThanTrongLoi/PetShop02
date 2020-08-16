import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'


const BackComponent = (props) => {
    return (
        <View>
            <StatusBar>
                <TouchableOpacity
                    onPress={() => props.onBackToMainTabScreen()}
                >
                    <Icon name='arrow-back' size={26} />
                </TouchableOpacity>

            </StatusBar>
        </View>
    )
}

export default BackComponent
