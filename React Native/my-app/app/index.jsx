import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import iceCoffeeImg from "@/assets/images/demi-deherrera-L-sm1B4L1Ns-unsplash.jpg"
const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={iceCoffeeImg}
        resizeMode="cover"
        style={styles.image}
      >
      <Text style={styles.text}>Coffee shop</Text>
      </ImageBackground>
    </View>
  )
}

export default app























const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column', 
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: "center",
    justifyContent: "center",
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  
})