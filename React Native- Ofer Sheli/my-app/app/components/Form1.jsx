import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function Form1() {
    const [value,setValue] = useState("")
    const [text,setText] = useState("")

  const onBtnPress = () => {
    if(value > 28){
        setText("hot")
    }else if(value <= 28)(
        setText("Ok++ ")
    )
    else{
        setText("Ok")
    }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Temp tester</Text>
      <Text>Enter your temp room:</Text>
      <View style={{ width: "100%", flexDirection:"row",marginVertical:16 }}>
        <TextInput keyboardType='number-pad' maxLength={3} onChangeText={setValue} style={{ flex:1, height: 40, borderWidth: 1, backgroundColor: "white",paddingHorizontal:8 }} />
        <Button onPress={onBtnPress} title="Send" color={"red"}/>
        <Text>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center', // נוסיף את זה כדי למרכז את התוכן
    padding: 8,
    width: "100%",
  },
  title: {
    fontSize: 32,
  },
});
