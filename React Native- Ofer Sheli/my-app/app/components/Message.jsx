import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Message() {
  return (
    <View style={styles.messageBox}>
      <Text style={{fontSize: 24}}>Message</Text>
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
    }
})