import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    StyleSheet,
    Alert
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import { DimensionApp } from '../../unit/dimension'
import Icon from 'react-native-vector-icons/Ionicons'
import { firebaseApp } from '../../components/DBFirebase/FirebaseConfig'

const HouseFlatList = (props) => {
    // const data = [
    //     { id: '1', name: 'food/house/toy/travelbag', uri: require('../../assets/groomingpet.png'), isFavorite: true },
    //     { id: '2', name: 'food/house/toy/travelbag', uri: require('../../assets/groomingpet.png'), isFavorite: true },
    //     { id: '3', name: 'food/house/toy/travelbag', uri: require('../../assets/groomingpet.png'), isFavorite: true },
    //     { id: '4', name: 'food/house/toy/travelbag', uri: require('../../assets/groomingpet.png'), isFavorite: true },
    //     { id: '5', name: 'food/house/toy/travelbag', uri: require('../../assets/groomingpet.png'), isFavorite: true },
    //     { id: '6', name: 'food/house/toy/travelbag', uri: require('../../assets/groomingpet.png'), isFavorite: true },
    //     { id: '7', name: 'food/house/toy/travelbag', uri: require('../../assets/groomingpet.png'), isFavorite: true },
    //     { id: '8', name: 'food/house/toy/travelbag', uri: require('../../assets/groomingpet.png'), isFavorite: true },
    // ]
    const itemRef = firebaseApp.database()
    const [products, setProducts] = useState([]);
    const listenForItems = (itemRef) => {
        let houseList = []
        itemRef.ref('PetShop')
            .child('House')
            .on('child_added', dataSnapShot => {
                houseList.push({
                    key: dataSnapShot.key,
                    name: (dataSnapShot.val() && dataSnapShot.val().name),
                    isFavorite: (dataSnapShot.val() && dataSnapShot.val().isFavorite),
                    isCart: (dataSnapShot.val() && dataSnapShot.val().isCart),
                    quantity: (dataSnapShot.val() && dataSnapShot.val().quantity) || '...',
                    price: (dataSnapShot.val() && dataSnapShot.val().price) || '...'
                })
                setProducts(houseList)
            })
    }
    useEffect(() => {
        listenForItems(itemRef)
    }, [])
    // add favorite product to favorites
    const Favorite = (key) => {
        const newProducts = products.map(product => {
            if (key === product.key) {
                itemRef.ref('PetShop')
                    .child('Favorite')
                    .push({
                        nameFavorite: product.name,
                    })
                Alert.alert('Confirm Dialog', 'Add ' + product.name + ' to Favorites Success')
                return { ...product, isFavorite: !product.isFavorite }
            }
            return product
        })
        setProducts(newProducts)
    }
    // add product to cart
    const Cart = (key) => {
        const newProducts = products.map(product => {
            if (key === product.key) {
                itemRef.ref('PetShop')
                    .child('Cart')
                    .push({
                        nameCart: product.name,
                        quantityCart: 1,
                        priceCart: product.price
                    })
                Alert.alert('Confirm Dialog', 'Add ' + product.name + ' to Cart Success')
                return { ...product }
            }
            return product
        })
        setProducts(newProducts)
    }
    const navigation = useNavigation();

    onGOTODETAILHOUSE = () => navigation.navigate('HousesDetail')

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
                                <Image style={{ width: 100, height: 100 }} source={require('../../assets/house.png')} />
                                <Text style={styles.products_name}>{item.name}</Text>
                            </TouchableOpacity>
                            <View style={styles.box_products_event}>
                                <TouchableOpacity
                                    style={styles.products_event}
                                    onPress={() => Favorite(item.key)}
                                >
                                    <Icon name={item.isFavorite ? 'heart-outline' : 'heart'} size={40} color={item.isFavorite ? '#000' : 'red'} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.products_event}
                                    onPress={() => Cart(item.key)}
                                >
                                    <Icon name='cart' size={40} color={'#000'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }}
            />
        </ScrollView>
    )
}

export default HouseFlatList

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
        marginVertical: 25,
        padding: 10,
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
        marginBottom: 40,
    },
    products_event: {
        // position: 'relative',
        flex: 1,
        alignItems: 'center',

    },
    box_products_event: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 40,
        position: 'absolute',
        bottom: -20
    }
})