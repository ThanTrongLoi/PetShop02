/**
 * =================== Card =======================
 */
import React from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image
} from 'react-native'

import { DimensionApp } from '../../unit/dimension'

import Materialicons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const CardTouchComponents = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardBox}>
                <View style={styles.cardView}>
                    <TouchableOpacity
                        style={styles.cardTouch}
                        onPress={() => props.onGoToPetList()}
                    >
                        <View style={styles.cardLeft}>
                            <Materialicons name='pets' size={30} color='#000' />
                            <Text style={styles.cardTitle}>Pets</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.cardTouch}
                        onPress={() => props.onGoToFoodList()}
                    >
                        <View style={styles.cardRight}>
                            <MaterialCommunityIcons name='food-apple' size={30} color='#000' />
                            <Text style={styles.cardTitle}>Food</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardView}>
                    <TouchableOpacity
                        style={styles.cardTouch}
                        onPress={() => props.onGoToToyList()}
                    >
                        <View style={styles.cardLeft}>
                            <Materialicons name='toys' size={30} color='#000' />
                            <Text style={styles.cardTitle}>Toys</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.cardTouch}
                        onPress={() => props.onGoToGroomingList()}
                    >
                        <View style={styles.cardRight}>
                            <Materialicons name='content-cut' size={30} color='#000' />
                            <Text style={styles.cardTitle}>Grooming</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardView}>
                    <TouchableOpacity
                        style={styles.cardTouch}
                        onPress={() => props.onGoToHouseList()}
                    >
                        <View style={styles.cardLeft}>
                            <Materialicons name='home' size={30} color='#000' />
                            <Text style={styles.cardTitle}>House</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.cardTouch}
                        onPress={() => props.onGoToBagTravelList()}
                    >
                        <View style={styles.cardRight}>
                            <MaterialCommunityIcons name='bag-checked' size={30} color='#000' />
                            <Text style={styles.cardTitle}>Travel Bag</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CardTouchComponents

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    //
    cardBox: {
        flex: 1,
        flexDirection: 'column',
        marginVertical: 2,
        borderRadius: 16,
        shadowColor: '#222',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 12
    },
    //
    cardView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        backgroundColor: '#ffccbc',
        padding: 10
    },
    //
    cardTouch: {
        flex: 1,
        height: DimensionApp.getHEIGHT() / 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 3,
        backgroundColor: '#fff',
        marginHorizontal: 5
    },
    //
    cardRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    //
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})