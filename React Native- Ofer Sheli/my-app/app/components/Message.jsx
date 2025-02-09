import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Message({txt, color}) {
  return (
    <View style={styles.messageBox}>
      <Text style={{fontSize: 24 , color}}>Message: {txt}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    messageBox: {
        padding: 8,
        backgroundColor: "orange",
        borderWidth: 4,
        borderColor: "blue",
        width: "80%",
        marginVertical:8
    }
})