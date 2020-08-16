import React from 'react'
// ======================================================================== /
import TabHomeScreen from '../tabscreens/TabHomeScreen'
import TabFavoriteScreen from '../tabscreens/TabFavoriteScreen'
import TabOrderScreen from '../tabscreens/TabOrderScreen'
import TabProfileScreen from '../tabscreens/TabProfileScreen'
// ======================================================================== /
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
// ======================================================================== /
const Tab = createMaterialBottomTabNavigator();
const FavoriteStack = createStackNavigator();
const OrderStack = createStackNavigator();
// ======================================================================== /
const MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName='TabHomeScreen'
            activeColor='#fff'
        >
            {/* Card-Tab-Home */}
            <Tab.Screen
                name='TabHomeScreen'
                component={TabHomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#64d8cb',
                    tabBarIcon: ({ color }) => (
                        <Icon name='ios-home-outline' color={color} size={26} />
                    )
                }}
            />
            {/* End-Card-Tab-Home */}

            {/* Card-Tab-Favorite */}
            <Tab.Screen
                name='TabFavoriteScreen'
                component={FavoriteStackScreen}
                options={{
                    tabBarLabel: 'Favorite',
                    tabBarColor: '#ff6090',
                    tabBarIcon: ({ color }) => (
                        <Icon name='heart-outline' color={color} size={26} />
                    )
                }}
            />
            {/* End-Card-Tab-Favorite */}

            {/* Card-Tab-Order */}
            <Tab.Screen
                name='TabOrderScreen'
                component={OrderStackScreen}
                options={{
                    tabBarLabel: 'Order',
                    tabBarColor: '#ff9800',
                    tabBarIcon: ({ color }) => (
                        <Icon name='document-text-outline' color={color} size={26} />
                    )
                }}
            />
            {/* End-Card-Tab-Order */}

            {/* Card-Tab-Profile */}
            <Tab.Screen
                name='TabProfileScreen'
                component={TabProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor: '#80d6ff',
                    tabBarIcon: ({ color }) => (
                        <Icon name='person-circle-outline' color={color} size={26} />
                    )
                }}
            />
            {/* End-Card-Tab-Profile */}
        </Tab.Navigator>
    )
}
// ======================================================================== /
export default MainTabScreen
// ================= Custom-Header-Tab-Favorite ============== /
const FavoriteStackScreen = () => (
    <FavoriteStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#ff6090'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}
    >
        <FavoriteStack.Screen
            name='Favorite'
            component={TabFavoriteScreen}
            options={{
                headerRight: () => (
                    <Icon.Button
                        name='search-sharp'
                        size={26}
                        backgroundColor='#ff6090'

                    />
                ),
                headerLeft: () => (
                    <Icon.Button
                        name='apps'
                        size={26}
                        backgroundColor='#ff6090'
                    />
                )
            }}
        />
    </FavoriteStack.Navigator>
)
// ================= End-Custom-Header-Tab-Favorite ============== /
//
// ================= Custom-Header-Tab-Order ============== /
const OrderStackScreen = () => (
    <OrderStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#ff9800'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerBackTitleVisible: false,
        }}
    >
        <OrderStack.Screen
            name='Order'
            component={TabOrderScreen}
            options={{
                headerLeft: () => (
                    <Icon
                        name='document-text-outline'
                        size={26}
                        backgroundColor='#ff9800'
                        color='#fff'
                    />
                )
            }}

        />
    </OrderStack.Navigator>
)
// ================= End-Custom-Header-Tab-Order ============== /
