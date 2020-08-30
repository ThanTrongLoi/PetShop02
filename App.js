import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


import MainHomeScreen from './src'
import PushModalDatabase from './src/components/DBFirebase/PushModalDatabase'
import SignupScreen from './src/screens/LoginScreens/SignupScreen'
import LoginScreen from './src/screens/LoginScreens'


const App = () => {
  return (
    <View style={styles.container}>
      <MainHomeScreen />
    </View>
  )
}

export default App
console.disableYellowBox = true
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})