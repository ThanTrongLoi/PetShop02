import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    FlatList,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { DimensionApp } from '../../unit/dimension'
import { firebaseApp } from '../../components/DBFirebase/FirebaseConfig'
const PetFlatList = () => {
    const itemRef = firebaseApp.database();
    const [products, setProducts] = useState([])

    const listenForItems = (itemRef) => {
        let items = []
        itemRef.ref('PetShop')
            .child('Pet')
            .on('child_added', dataSnapShot => {
                items.push({
                    key: dataSnapShot.key,
                    name: dataSnapShot.val() && dataSnapShot.val().name,
                    age: dataSnapShot.val() && dataSnapShot.val().age,
                    origin: dataSnapShot.val() && dataSnapShot.val().origin,
                    kind: dataSnapShot.val() && dataSnapShot.val().kind,
                    isCart: dataSnapShot.val() && dataSnapShot.val().isCart,
                    isFavorite: dataSnapShot.val() && dataSnapShot.val().isFavorite,
                    isGender: dataSnapShot.val() && dataSnapShot.val().isGender,
                    price: dataSnapShot.val() && dataSnapShot.val().pricem,
                    quantity: dataSnapShot.val() && dataSnapShot.val().quantity
                })
                setProducts(items)
            })
    }

    useEffect(() => {
        listenForItems(itemRef)
    }, [])
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
    //s
    // const Cart = (key) => {
    //     const newProducts = products.map(product => {
    //         if (key === product.key) {
    //             itemRef.ref('PetShop')
    //                 .child('Cart')
    //                 .push({
    //                     nameCart: product.name,
    //                     quantityCart: 1,
    //                     priceCart: product.price
    //                 })
    //             Alert.alert('Confirm Dialog', 'Add ' + product.name + ' to Cart Success')
    //             return { ...product }
    //         }
    //         return product
    //     })
    //     setProducts(newProducts)
    // }
    return (
        <ScrollView style={styles.container}>
            <FlatList
                data={products}
                extraData={products}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.box}>
                            <View style={styles.box_img}>
                                <Image style={styles.box_img_view} source={require('../../assets/dog3.png')} />
                            </View>
                            <View style={styles.box_info}>
                                <View style={styles.info_header}>
                                    <Text style={styles.dog_name}>{item.name}</Text>
                                    <Icon name={item.isGender ? 'mars' : 'venus'} size={20} />
                                </View>
                                <View style={styles.dog_origin}>
                                    <Text style={{ fontSize: 20 }}>Origin: {item.origin}</Text>
                                </View>
                                <View style={styles.dog_age}>
                                    <Text style={{ fontSize: 20 }}>Age: {item.age}</Text>
                                </View>
                                <View style={styles.dog_kind}>
                                    <Text style={{ fontSize: 20 }}>Kind: {item.kind}</Text>
                                </View>
                                <View style={styles.dog_icon}>
                                    <TouchableOpacity
                                        onPress={() => Favorite(item.key)}
                                    >
                                        <Ionicon name={item.isFavorite ? 'heart-outline' : 'heart'} size={26} color={item.isFavorite ? '#000' : 'red'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => Cart(item.key)}
                                    >
                                        <Ionicon name={'cart'} size={26} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )
                }}
            />
        </ScrollView>
    )
}

export default PetFlatList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#82e9de',
        padding: 10
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    box_img: {
        flex: 2 / 4,
        backgroundColor: '#fff',
        height: DimensionApp.getHEIGHT() / 4.5,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box_img_view: {
        width: DimensionApp.getWIDTH() / 2.5,
        height: DimensionApp.getWIDTH() / 2.5,
    },
    box_info: {
        flex: 2 / 4,
        backgroundColor: '#ffccbc',
        height: DimensionApp.getHEIGHT() / 5,
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20,
        padding: 10
    },
    info_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dog_name: {
        fontSize: 20,
        fontWeight: 'bold',

    },
    // dog_origin: {
    //     flexDirection: 'row'
    // },
    // dog_age: {
    //     flexDirection: 'row'
    // },
    // dog_kind: {
    //     flexDirection: 'row'
    // },
    dog_icon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomEndRadius: 20,
        borderTopWidth: 2
    }
})