import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { DimensionApp } from '../../unit/dimension'
import { ScrollView } from 'react-native-gesture-handler'


const ModalList = () => {
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.box_grooming}>
                <View style={styles.box_img_grooming}>
                    <Image style={styles.img_grooming} source={require('../../assets/groomingpet.png')} />
                </View>
                <View style={styles.box_info_grooming}>
                    <View style={styles.box_title_grooming}>
                        <Text style={styles.title_grooming}>
                            Dịch Vụ Grooming Cắt Tỉa Lông Chó Mèo
                        </Text>
                    </View>
                    <View style={styles.box_description_grooming}>
                        <Text style={styles.descriptiong_grooming}>

                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
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
        shadowRadius: 12
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
    },
    box_title_grooming: {
        flex: 1 / 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title_grooming: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    box_description_grooming: {

    },
    descriptiong_grooming: {

    }
})