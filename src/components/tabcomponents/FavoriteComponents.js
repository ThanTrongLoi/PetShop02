import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native'
import { DimensionApp } from '../../unit/dimension'
import Icon from 'react-native-vector-icons/Ionicons'
import { firebaseApp } from '../DBFirebase/FirebaseConfig'
const FavoriteComponents = () => {
    const [names, setNames] = useState([])

    const itemRef = firebaseApp.database();
    listenForItems = (itemRef) => {
        let arrFavorite = []
        itemRef.ref('PetShop')
            .child('Favorite')
            .on('child_added', dataSnapShot => {
                arrFavorite.push({
                    _key: dataSnapShot.key,
                    nameF: (dataSnapShot.val() && dataSnapShot.val().nameFavorite) || 'NetWorking...'
                })
                setNames(arrFavorite)
            })
        itemRef.ref('PetShop')
            .child('Favorite')
            .on('child_removed', dataSnapShot => {
                arrFavorite = arrFavorite.filter((x) => x._key !== dataSnapShot.key)
                setNames(arrFavorite)
            })
    }
    useEffect(() => {
        listenForItems(itemRef)
    }, []);

    remove_press = (_key) => {
        const newProducts = names.map((product) => {
            if (_key === product._key) {
                Alert.alert('Confirm Dialog',
                    'Are you sure to remove ' + product.nameF + '?',
                    [
                        {
                            text: 'Yes',
                            onPress: () => {
                                itemRef.ref('PetShop')
                                    .child('Favorite/' + product._key)
                                    .remove()
                            }
                        },
                        { text: 'No' }
                    ]
                )
            }
            return product
        })
        setNames(newProducts)
        return listenForItems(itemRef)
    }
    return (
        <ScrollView style={styles.container}>
            <FlatList
                data={names}
                extraData={names}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.box}>
                            <Image style={styles.img} source={require('../../assets/dog3.png')} />
                            <Text style={styles.textFavorite}>{item.nameF}</Text>
                            <View style={{ flex: 1 / 5 }}>
                                <TouchableOpacity
                                    style={styles.box_icdelete}
                                    onPress={() => { remove_press(item._key) }}
                                >
                                    <Icon
                                        style={styles.icdelete}
                                        name={'close'}
                                        size={26}
                                        color={'#fff'} />
                                </TouchableOpacity>
                                <View style={{ flex: 1 }}></View>
                            </View>
                        </View>

                    )
                }}
            />
        </ScrollView>
    )
}

export default FavoriteComponents

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        height: DimensionApp.getHEIGHT() / 7,
        alignItems: 'center',
        backgroundColor: '#ffccbc',
        borderRadius: 10,
        shadowColor: '#222',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        marginVertical: 15
    },
    img: {
        flex: 2 / 4,
        width: 160,
        height: 160,
        borderRightWidth: 2,
        borderRightColor: '#ff6090'
    },
    textFavorite: {
        flex: 2 / 4,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        borderLeftWidth: 2,
        borderLeftColor: '#ff6090'
    },
    box_icdelete: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: "flex-start",
        backgroundColor: 'red',
        borderTopEndRadius: 10,
        borderBottomLeftRadius: 80,
    },
    icdelete: {
        flex: 1,
        borderRadius: 100
    }
})