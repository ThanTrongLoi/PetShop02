import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BackComponent from '../../components/BackComponent'

import { useNavigation } from '@react-navigation/native'

const navigation = useNavigation();

// onBackToMainTabScreen = () => navigation.goBack('MainTabScreen')

const GroomingList = () => {

    return (
        <View style={styles.container}>
            {/* <BackComponent onBackToMainTabScreen={this.onBackToMainTabScreen} /> */}
        </View>
    )
}

export default GroomingList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
    }
})