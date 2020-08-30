import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { DimensionApp } from '../../unit/dimension'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {

    useEffect(() => {
        setTimeout(() => {
            goToScreen();
        }, 3000)
    })

    const navigation = useNavigation();

    const goToScreen = () => {
        navigation.navigate('LoginScreen')
    }

    return (
        <View style={styles.container}>
            <Image style={{
                width: DimensionApp.getWIDTH() - 10,
                height: DimensionApp.getWIDTH() - 10
            }}
                source={require('../../assets/logo.png')}
            />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4db6ac',
        justifyContent: 'center',
        alignItems: 'center'
    }
})