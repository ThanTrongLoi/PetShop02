import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView
} from 'react-native'
import { DimensionApp } from '../../unit/dimension'
import { firebaseApp } from '../DBFirebase/FirebaseConfig'


const ModalList = () => {
    const itemRef = firebaseApp.database();
    const [Lists, setLists] = useState([])
    const listenForItems = (itemRef) => {
        let items = []
        itemRef.ref('PetShop')
            .child('Service')
            .on('child_added', snapShot => {
                items.push({
                    _key: snapShot.key,
                    titles: (snapShot.val() && snapShot.val().title) || 'NetWorking...',
                    details: (snapShot.val() && snapShot.val().detail) || 'NetWorking...',
                    price: (snapShot.val() && snapShot.val().price),
                    contact: (snapShot.val() && snapShot.val().contact)
                })
                setLists(items)
            })
    }
    useEffect(() => {
        listenForItems(itemRef)
    }, [])


    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <FlatList
                data={Lists}
                extraData={Lists}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={styles.box_grooming}
                            onPress={() => { }}
                        >
                            <View style={styles.box_img_grooming}>
                                <Image style={styles.img_grooming} source={require('../../assets/groomingpet.png')} />
                            </View>
                            <View style={styles.box_info_grooming}>
                                <View style={styles.box_info_grooming}>
                                    <View style={styles.box_title_grooming}>
                                        <Text style={styles.title_grooming}>
                                            {item.titles}
                                        </Text>
                                    </View>
                                    <View style={styles.box_description_grooming}>
                                        <Text style={styles.descriptiong_grooming}>
                                            {item.details}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Price: {item.price}</Text>

                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Contact: {item.contact}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                    )
                }}
            />
        </ScrollView>
    )
}

export default ModalList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#82e9de'
    },
    box_grooming: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#ffab91',
        height: DimensionApp.getHEIGHT() / 4.5,
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: '#222',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 12,
        marginVertical: 10
    },
    box_img_grooming: {
        flex: 1 / 3,
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    img_grooming: {
        width: DimensionApp.getWIDTH() / 3.5,
        height: DimensionApp.getWIDTH() / 3
    },
    box_info_grooming: {
        flex: 2 / 3,
        padding: 5
    },
    box_title_grooming: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title_grooming: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
})