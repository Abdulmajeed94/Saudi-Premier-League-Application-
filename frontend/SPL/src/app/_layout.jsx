import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router'

const __layout = () => {
  return (
    <Stack>
        
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="HomeScreen" options={{headerShown:false }} />
      <Stack.Screen name="matchDetails" options={{headerShown:false }}/>
    </Stack>
  )
}

export default __layout

const styles = StyleSheet.create({})