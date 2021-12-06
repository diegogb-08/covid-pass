import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import es from './i18n/locale/es'
import en from './i18n/locale/en'
// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  es,
  en
}
// Set the locale once at the beginning of your app.
const languageCode = Localization.locale.split('-')
i18n.locale = languageCode[0]

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
