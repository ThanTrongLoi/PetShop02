import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    FlatList,
    Image, TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { DimensionApp } from '../../unit/dimension'
const PetFlatList = () => {
    const data = [
        { id: '1', name: 'Dog3', kind: 'Dog', origin: 'China', age: '3 years', isGen: true, uri: require('../../assets/dog3.png'), isFavorite: true },
        { id: '2', name: 'Dog3', kind: 'Dog', origin: 'China', age: '3 years', isGen: false, uri: require('../../assets/dog3.png'), isFavorite: true },
        { id: '3', name: 'Dog3', kind: 'Dog', origin: 'China', age: '3 years', isGen: true, uri: require('../../assets/dog3.png'), isFavorite: true },
        { id: '4', name: 'Dog3', kind: 'Dog', origin: 'China', age: '3 years', isGen: false, uri: require('../../assets/dog3.png'), isFavorite: true },
        { id: '5', name: 'Dog3', kind: 'Dog', origin: 'China', age: '3 years', isGen: true, uri: require('../../assets/dog3.png'), isFavorite: true },
        { id: '6', name: 'Dog3', kind: 'Dog', origin: 'China', age: '3 years', isGen: true, uri: require('../../assets/dog3.png'), isFavorite: true },
    ]

    const [products, setProducts] = useState(data)

    const Favorite = (id) => {
        const newProducts = products.map(product => {
            if (id === product.id) {
                return { ...product, isFavorite: !product.isFavorite }
            }
            return product
        })
        setProducts(newProducts)
    }

    // const Gen = (id)=>{
    //     const newProducts = products.map(product => {

    //     })
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
                                <Image style={styles.box_img_view} source={item.uri} />
                            </View>
                            <View style={styles.box_info}>
                                <View style={styles.info_header}>
                                    <Text style={styles.dog_name}>DOG3</Text>
                                    <Icon name={item.isGen ? 'mars' : 'venus'} size={20} />
                                </View>
                                <View style={styles.dog_origin}>
                                    <Text style={{ fontSize: 20 }}>Origin: </Text>
                                    <Text style={{ fontSize: 20 }}>{item.origin}</Text>
                                </View>
                                <View style={styles.dog_age}>
                                    <Text style={{ fontSize: 20 }}>Age: </Text>
                                    <Text style={{ fontSize: 20 }}>{item.age}</Text>
                                </View>
                                <View style={styles.dog_kind}>
                                    <Text style={{ fontSize: 20 }}>Kind: </Text>
                                    <Text style={{ fontSize: 20 }}>{item.abc}</Text>
                                </View>
                                <View style={styles.dog_icon}>
                                    <TouchableOpacity
                                        onPress={() => Favorite(item.id)}
                                    >
                                        <Ionicon name={item.isFavorite ? 'heart-outline' : 'heart'} size={26} color={item.isFavorite ? '#000' : 'red'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
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
        height: DimensionApp.getHEIGHT() / 5.5,
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20,

    },
    info_header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    dog_name: {
        fontSize: 25,
        fontWeight: 'bold',

    },
    dog_origin: {
        flexDirection: 'row'
    },
    dog_age: {
        flexDirection: 'row'
    },
    dog_kind: {
        flex: 1,
        flexDirection: 'row'
    },
    dog_icon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomEndRadius: 20,
        borderTopWidth: 2
    }
})