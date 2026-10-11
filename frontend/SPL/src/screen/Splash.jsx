import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const Splash = () => {
  return (
    <View style={{flex:1 , alignItems:"center" , justifyContent:'center', margin:0}}>
      <LottieView   
        source={require('../../assets/SliderRicard.json')}
        style={{width:300 , height:300}}
        autoPlay
        loop={true}
        resizeMode="cover"
       
      />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})