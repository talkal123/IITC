import { Image, StyleSheet, Platform, View,Text } from 'react-native';
import Message from '../components/Message';
import Screen1 from '../components/Screen1'
import From1 from '../components/Form1'
import List1 from '../components/List1'


export default function App() {
  return (
    <View style={styles.container}>
      <List1 />
      {/* <From1 /> */}
      {/* <Screen1 /> */}
      {/* <Message txt = "Hello" color="green"/>
      <Message txt = "Bye"  color="red"/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 48,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  
});
