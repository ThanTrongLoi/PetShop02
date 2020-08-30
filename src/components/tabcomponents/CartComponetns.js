import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Alert,
    SafeAreaView
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { DimensionApp } from '../../unit/dimension'
import { firebaseApp } from '../DBFirebase/FirebaseConfig'


const CartComponents = () => {

    const [products, setProducts] = useState([])

    const [amounts, setAmounts] = useState(1)
    const itemRef = firebaseApp.database();
    listenForItems = (itemRef) => {
        let items = []
        itemRef.ref('PetShop')
            .child('Cart')
            .on('child_added', dataSnapShot => {
                items.push({
                    _key: dataSnapShot.key,
                    nameC: (dataSnapShot.val() && dataSnapShot.val().nameCart) || 'NetWorking...',
                    quantityC: (dataSnapShot.val() && dataSnapShot.val().quantityCart),
                    priceC: (dataSnapShot.val() && dataSnapShot.val().priceCart) || '...'
                })
                setProducts(items)
            })
        itemRef.ref('PetShop')
            .child('Cart')
            .on('child_removed', dataSnapShot => {
                items = items.filter((x) => x._key !== dataSnapShot.key)
                setProducts(items)
            })
    }

    useEffect(() => {
        listenForItems(itemRef)
    }, [])

    remove_press = (_key) => {
        const newProducts = products.map(product => {
            Alert.alert('Confirm Dialog',
                'Are you sure to remove ' + product.nameF + '?',
                [
                    {
                        text: 'Yes',
                        onPress: () => {
                            itemRef.ref('PetShop')
                                .child('Cart/' + product._key)
                                .remove()
                        }
                    },
                    { text: 'No' }
                ]
            )
            return product
        })
        return listenForItems(itemRef)
    }
    // total product
    onUpQuantity = (_key) => {
        const newProducts = products.map(product => {
            if (_key === product._key) {
                product.quantityC += 1
                return { ...product }
            }
            return product
        })
        setProducts(newProducts)
    }
    onDownQuantity = (_key) => {
        const newProducts = products.map(product => {
            if (_key === product._key) {
                product.quantityC -= 1
                return { ...product }
            }
            return product
        })
        setProducts(newProducts)
    }
    let totalQuantity = 0;
    let totalPrice = 0;
    products.forEach(item => {
        totalQuantity += item.quantityC
        totalPrice += item.quantityC * item.priceC
    })
    // end-total-product
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={products}
                extraData={products}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            style={styles.box_cart}
                            onPress={() => remove_press(item._key)}
                        >
                            <Image style={styles.img} source={require('../../assets/dog3.png')} />
                            <View style={styles.box_name}>
                                <Text style={styles.textFavorite}>{item.nameC}</Text>
                                <Text style={styles.price}>${item.priceC}</Text>
                            </View>
                            <View style={styles.box_end}>
                                <View style={styles.amount}>
                                    <TouchableOpacity
                                        onPress={() => onUpQuantity(item._key)}
                                    >
                                        <Icon
                                            name='ios-caret-up-outline'
                                            size={30}
                                        />
                                    </TouchableOpacity>
                                    <Text style={{ textAlign: 'center' }} >{item.quantityC}</Text>
                                    <TouchableOpacity
                                        onPress={() => onDownQuantity(item._key)}
                                    >
                                        <Icon
                                            name='ios-caret-down-outline'
                                            size={30}
                                        />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </TouchableOpacity>
                    )
                }}
            />

            <TouchableOpacity style={styles.pay}>
                <Text style={styles.textpay}>Thanh Toán</Text>
                <View style={styles.total}>
                    <Text style={{ ...styles.textpay, fontSize: 15 }}>{totalQuantity} :Quantity</Text>
                    <Text style={{ ...styles.textpay, fontSize: 17 }}>${totalPrice} :Price</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default CartComponents


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    box_cart: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffccbc',
        height: DimensionApp.getHEIGHT() / 7,
        borderRadius: 10,
        marginVertical: 15,
    },
    img: {
        width: 160,
        height: 160,
    },
    textFavorite: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    box_end: {
        flex: 1,
        flexDirection: 'row'
    },
    price: {
        // flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
    },
    pay: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#ff9800',
        position: 'absolute',
        bottom: 0,
        width: DimensionApp.getWIDTH(),
        height: DimensionApp.getWIDTH() / 8,
    },
    textpay: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '500',
        color: '#fff'
    },
    total: {
        alignItems: 'flex-end'
    },
    box_name: {
        flex: 4,
        paddingVertical: 5,
        alignItems: 'center',
    }
})