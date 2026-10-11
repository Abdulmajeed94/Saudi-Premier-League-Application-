import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Seperator = () => {
  return (
    <View style={styles.seperator}>
     
    </View>
  )
}

export default Seperator

const styles = StyleSheet.create({

    seperator:{
        height:1,
        width:"100%",
        flexGrow:1,
        backgroundColor: "#141414"
    }
}

)