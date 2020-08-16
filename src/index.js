import React from 'react'
import { View, Text } from 'react-native'
// ======================================================================== /
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// ======================================================================== /
import MainTabScreen from './screens/tabscreens/index'
import SplashScreen from './screens/splashscreen/index'
import FoodsDetail from './screens/detailscreens/PetsDetail'
import GroomingsDetail from './screens/detailscreens/GroomingsDetail'
import HousesDetail from './screens/detailscreens/HousesDetail'
import PetsDetail from './screens/detailscreens/PetsDetail'
import ToysDetail from './screens/detailscreens/ToysDetail'
import TravelBagsDetail from './screens/detailscreens/TravelBagsDetail'
import PetList from './screens/listscreens/PetList'
import FoodList from './screens/listscreens/FoodList'
import GroomingList from './screens/listscreens/GroomingList'
import ToyList from './screens/listscreens/ToyList'
import HouseList from './screens/listscreens/HouseList'
import TravelBagList from './screens/listscreens/TravelBagList'
// ======================================================================== /
const Stack = createStackNavigator();
// ======================================================================== /
const MainHomeScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'SplashScreen'} headerMode='none'>
                <Stack.Screen
                    name='SplashScreen'
                    component={SplashScreen}
                />
                <Stack.Screen
                    name='MainTabScreen'
                    component={MainTabScreen}
                />
                <Stack.Screen
                    name='PetsDetail'
                    component={PetsDetail}
                />
                <Stack.Screen
                    name='FoodsDetail'
                    component={FoodsDetail}
                />
                <Stack.Screen
                    name='ToysDetail'
                    component={ToysDetail}
                />
                <Stack.Screen
                    name='GroomingsDetail'
                    component={GroomingsDetail}
                />
                <Stack.Screen
                    name='HousesDetail'
                    component={HousesDetail}
                />
                <Stack.Screen
                    name='TravelBagsDetail'
                    component={TravelBagsDetail}
                />
                <Stack.Screen
                    name='PetList'
                    component={PetList}
                />
                <Stack.Screen
                    name='FoodList'
                    component={FoodList}
                />
                <Stack.Screen
                    name='ToyList'
                    component={ToyList}
                />
                <Stack.Screen
                    name='GroomingList'
                    component={GroomingList}
                />
                <Stack.Screen
                    name='HouseList'
                    component={HouseList}
                />
                <Stack.Screen
                    name='TravelBagList'
                    component={TravelBagList}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
// ======================================================================== /
export default MainHomeScreen
