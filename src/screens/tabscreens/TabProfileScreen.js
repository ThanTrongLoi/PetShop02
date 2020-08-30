import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ProfildeComponent from '../../components/tabcomponents/ProfildeComponent'


const TabProfileScreen = () => {
    return (
        <View style={styles.container}>
            <ProfildeComponent />
        </View>
    )
}

export default TabProfileScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#80d6ff'
    }
})