import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import { DimensionApp } from '../../unit/dimension'
import Icon from 'react-native-vector-icons/Ionicons'

const TravelBagFlatList = (props) => {
    const data = [
        { name: 'food/house/toy/travelbag', uri: require('../../assets/groomingpet.png') },
        { name: 'food/house/toy/travelbag', uri: require('../../assets/groomingpet.png') },
        { name: 'food/house/toy/travelbag', uri: require('../../assets/groomingpet.png') },
        { name: 'food/house/toy/travelbag', uri: require('../../assets/groomingpet.png') },
    ]
    const [products, setProducts] = useState(data);
    const navigation = useNavigation();

    onGOTODETAILTRAVELBAG = () => navigation.navigate('TravelBagsDetail')

    return (
        <ScrollView style={styles.container}>
            <FlatList
                data={products}
                numColumns={2}
                extraData={products}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.box_products}>
                            <TouchableOpacity
                                style={{ alignItems: 'center' }}
                                onPress={() => onGOTODETAILFOOD()}
                            >
                                <Image style={{ width: 100, height: 100 }} source={item.uri} />
                                <Text style={styles.products_name}>{item.name}</Text>
                            </TouchableOpacity>
                            <View style={styles.box_products_event}>
                                <TouchableOpacity
                                    style={styles.products_event}
                                >
                                    <Icon name='heart' size={40} color={'#fff'} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.products_event}
                                >
                                    <Icon name='cart' size={40} color={'#fff'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }}
            />
        </ScrollView>
    )
}

export default TravelBagFlatList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#82e9de',
    },
    box_products: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffab91',
        margin: 10,
        marginVertical: 20,
        paddingHorizontal: 5,
        borderRadius: 16,
        height: DimensionApp.getHEIGHT() / 5.5,
        shadowColor: '#222',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 6
    },
    products_name: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    products_event: {
        position: 'relative',
        flex: 1,
        alignItems: 'center'
    },
    box_products_event: {
        flexDirection: 'row',
        backgroundColor: 'red',
        borderRadius: 40
    }
})