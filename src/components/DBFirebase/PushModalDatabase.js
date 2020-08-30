/**
 * File này chỉ để push dữ liệu có sẵn thay cho hệ thống của cửa hàng lên firebase
 */
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { firebaseApp } from './FirebaseConfig'
import { ListItem } from 'react-native-elements';
const RealtimeDB = () => {
    const itemRef = firebaseApp.database();
    const [products, setProducts] = useState([])
    useEffect(() => {
        let items = []
        itemRef.ref('PetShop')
            .child('Service')
            .on('child_added', (snapShot) => {
                items.push({
                    detail: snapShot.val().detail || 'abc',
                    title: snapShot.val().title || 'abc',
                    _key: snapShot.key
                })
                setProducts(items)
            });
    }, [])


    pushPet = () => {
        itemRef.ref('PetShop').child('Pet').push({
            name: 'Corgi',
            age: '3 years old',
            origin: 'Japan',
            kind: 'Dog',
            isGender: true,
            isFavorite: true,
            isCart: false,
            quantity: 0,
            price: 150
        })
    } // đưa dữ liệu mẫu lên firebase
    pushFood = () => {
        itemRef.ref('PetShop').child('Food').push({
            name: 'Hạt',
            isFavorite: true,
            isCart: false,
            quantity: 0,
            price: 50
        })
    } // đưa dữ liệu mẫu lên firebase
    pushToy = () => {
        itemRef.ref('PetShop').child('Toy').push({
            name: 'Banh',
            isFavorite: true,
            isCart: false,
            quantity: 0,
            price: 50
        })
    } // đưa dữ liệu mẫu lên firebase
    pushHouse = () => {
        itemRef.ref('PetShop').child('House').push({
            name: 'Nệm',
            isFavorite: true,
            isCart: false,
            quantity: 0,
            price: 50
        })
    } // đưa dữ liệu mẫu lên firebase
    pushService = () => {
        itemRef.ref('PetShop').child('Service').push({
            title: 'Banh',
            detail: 'aaaaaaaaaaaaaaaaalkasjdlfkjasdklfjklasdjflkdsa',
            contact: '0346***589',
            price: 300
        })
    } // đưa dữ liệu mẫu lên firebase
    pushTravelBag = () => {
        itemRef.ref('PetShop').child('TravelBag').push({
            name: 'Túi du lịch',
            isFavorite: true,
            isCart: false,
            quantity: 0,
            price: 50
        })
    } // đưa dữ liệu mẫu lên firebase
    const removeItems = (_key) => {
        const newproducts = products.map((product) => {
            if (_key === product._key) {
                itemRef.ref('PetShop')
                    .child('Favorite')
                    .child(product._key)
                    .remove()

            }
            return product
        })
        setProducts(newproducts)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={styles.touch}
                    onPress={() => { removeItems() }}
                >
                    <Text>Remove</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touch}
                    onPress={() => { pushPet() }}
                >
                    <Text>PushPet</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touch}
                    onPress={() => pushFood()}
                >
                    <Text>PushFood</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touch}
                    onPress={() => { pushToy() }}
                >
                    <Text>pushToy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touch}
                    onPress={() => pushHouse()}
                >
                    <Text>pushHouse</Text>
                </TouchableOpacity><TouchableOpacity
                    style={styles.touch}
                    onPress={() => { pushService() }}
                >
                    <Text>pushService</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touch}
                    onPress={() => pushTravelBag()}
                >
                    <Text>pushTravelBag</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={products}
                    extraData={products}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <ListItem
                                title={item.title}
                                subtitle={item.detail}
                                onPress={() => { }}
                            />
                        )
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default RealtimeDB

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touch: {
        marginVertical: 10,
        borderWidth: 2
    }
})