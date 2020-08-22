import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native'
import { DimensionApp } from '../../unit/dimension'
const FavoriteComponents = () => {

    const datas = [
        { id: '1', name: 'Favorite', uri: require('../../assets/dog3.png') },
        { id: '1', name: 'Favorite', uri: require('../../assets/groomingpet.png') },
        { id: '1', name: 'Favorite', uri: require('../../assets/groomingpet.png') },
        { id: '1', name: 'Favorite', uri: require('../../assets/groomingpet.png') },
        { id: '1', name: 'Favorite', uri: require('../../assets/groomingpet.png') },
        { id: '1', name: 'Favorite', uri: require('../../assets/groomingpet.png') },

    ]

    const [names, setNames] = useState(datas)

    return (
        <ScrollView style={styles.container}>
            <FlatList
                data={datas}
                extraData={datas}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.box}>
                            <Image style={styles.img} source={item.uri} />
                            <Text style={styles.textFavorite}>{item.name}</Text>
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
        marginVertical: 6
    },
    img: {
        flex: 1 / 3,
        width: 140,
        height: 140,
        borderRightWidth: 2,
        borderRightColor: '#ff6090'
    },
    textFavorite: {
        flex: 2 / 3,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        borderLeftWidth: 2,
        borderLeftColor: '#ff6090'
    }
})