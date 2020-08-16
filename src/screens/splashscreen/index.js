import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {

    useEffect(() => {
        setTimeout(() => {
            goToScreen();
        }, 3000)
    })

    const navigation = useNavigation();

    const goToScreen = () => {
        navigation.navigate('MainTabScreen')
    }

    return (
        <View style={styles.container}>
            <Text>SPLASHSCREEN</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
})