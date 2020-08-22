import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FavoriteComponents from '../../components/tabcomponents/FavoriteComponents'


const TabFavoriteScreen = () => {
    return (
        <View style={styles.container}>
            <FavoriteComponents />
        </View>
    )
}

export default TabFavoriteScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff6090'
    }
})