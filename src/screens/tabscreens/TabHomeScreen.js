import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from 'react-native'

import CardTouchComponents from '../../components/tabcomponents/CardTouchComponents'

import { useNavigation } from '@react-navigation/native'

const TabHomeScreen = () => {

    const navigation = useNavigation();

    onGoToPetList = () => navigation.navigate('PetList')
    onGoToFoodList = () => navigation.navigate('FoodList')
    onGoToToyList = () => navigation.navigate('ToyList')
    onGoToGroomingList = () => navigation.navigate('GroomingList')
    onGoToHouseList = () => navigation.navigate('HouseList')
    onGoToBagTravelList = () => navigation.navigate('TravelBagList')

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.listCard}>
                    <CardTouchComponents
                        onGoToPetList={this.onGoToPetList}
                        onGoToFoodList={this.onGoToFoodList}
                        onGoToToyList={this.onGoToToyList}
                        onGoToGroomingList={this.onGoToGroomingList}
                        onGoToHouseList={this.onGoToHouseList}
                        onGoToBagTravelList={this.onGoToBagTravelList}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TabHomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    listCard: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})