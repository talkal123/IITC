import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Screen1() {
  return (
    <View style={styles.parent}>
        <View style={styles.box1}><Text>Screen1</Text></View>
        <View style={styles.box2}><Text>Screen2</Text></View>
        <View style={styles.box3}><Text>Screen3</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
    parent:{
        flex:1,
        backgroundColor:"grey",
        width:"100%",
        padding: 16,
    },
    box1:{
        flex:1,
        backgroundColor: "red",
    },
    box2:{
        flex:1,
        backgroundColor: "gold",
    },
    box3:{
        flex:1,
        backgroundColor: "yellow",
    },
})