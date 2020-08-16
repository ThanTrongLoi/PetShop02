import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


import MainHomeScreen from './src'

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