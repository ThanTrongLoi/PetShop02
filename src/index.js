import React from 'react'
import { View, Text } from 'react-native'
// ======================================================================== /
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// ======================================================================== /
import MainTabScreen from './screens/tabscreens/index'
import SplashScreen from './screens/splashscreen/index'
import FoodsDetail from './screens/ScreensFood/FoodsDetail'
import GroomingsDetail from './screens/ScreensGrooming/GroomingsDetail'
import HousesDetail from './screens/ScreensHouse/HousesDetail'
import ToysDetail from './screens/ScreensToy/ToysDetail'
import TravelBagsDetail from './screens/ScreensTravelBag/TravelBagsDetail'
import FoodList from './screens/ScreensFood/FoodList'
import GroomingList from './screens/ScreensGrooming/GroomingList'
import ToyList from './screens/ScreensToy/ToyList'
import HouseList from './screens/ScreensHouse/HouseList'
import TravelBagList from './screens/ScreensTravelBag/TravelBagList'
import PetList from './screens/ScreensPet/PetList'
import PetsDetail from './screens/ScreensPet/PetsDetail'
import BillScreen from './screens/tabscreens/OrderScreens/BillScreen'
import CartScreen from './screens/tabscreens/OrderScreens/CartScreen'
import LoginScreen from './screens/LoginScreens'
import SignupScreen from './screens/LoginScreens/SignupScreen'


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
                <Stack.Screen
                    name='BillScreen'
                    component={BillScreen}
                />
                <Stack.Screen
                    name='CartScreen'
                    component={CartScreen}
                />
                <Stack.Screen
                    name='LoginScreen'
                    component={LoginScreen}
                />
                <Stack.Screen
                    name='SignupScreen'
                    component={SignupScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
// ======================================================================== /
export default MainHomeScreen
