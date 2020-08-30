import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CartComponents from '../../../components/tabcomponents/CartComponetns'


const CartScreen = () => {
    return (
        <View style={styles.container}>
            <CartComponents />
        </View>
    )
}

export default CartScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})