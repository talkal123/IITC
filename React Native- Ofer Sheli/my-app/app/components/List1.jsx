import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { list_ar } from '../data/listTest'
export default function List1() {
  return (
    <View>
      <Text style={{fontSize:30}}>List of products</Text>
      <ScrollView alwaysBounceVertical={false}>
        {list_ar.map(item => {
            return (
                <View style={{padding:12, borderWidth:2,marginVertical:8}} key={item.s_id}>
                    <Text>{item.name} - {item.price} NIS</Text>
                </View>
            )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})