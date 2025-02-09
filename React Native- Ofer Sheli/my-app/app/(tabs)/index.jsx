import { Image, StyleSheet, Platform, View,Text } from 'react-native';
import Message from '../components/Message';



export default function App() {
  return (
    <View style={styles.container}>
      <Message txt = "Hello" color="green"/>
      <Message txt = "Bye"  color="red"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 48,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textRed: {
    color: "red",
    fontSize: 30
  }
});
