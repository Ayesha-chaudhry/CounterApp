import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, RefreshControl } from 'react-native'
import { React, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


const List = (props) => {

  const [data, setData] = useState()
  const [refreshing, setRefreshing] = useState(true);

  useEffect(() => {
    readData()
    onRemoveItem
  }, [])

  const onRemoveItem = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch (e) {
      console.log(e)
    }
  }


  const readData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys(); // keys
      const result = await AsyncStorage.multiGet(keys); // keys,time,slected,counter
      setData(result)
      setRefreshing(false)

      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <View st={{ flex: 1 }}>
      {refreshing ? <ActivityIndicator /> : null}
      <FlatList
        data={data}
        renderItem={({ item }) => {
          const obj = JSON.parse(item[1])   //['key','value']
          return (
            <TouchableOpacity
              onPress={() => { onRemoveItem(item[0]) }}
              style={{ padding: 20 }}
            >
              <Text>{item[0]}</Text>
              <Text>{obj.date}</Text>
              <Text>{obj.selectedItem}</Text>
              <Text>{obj.counter}</Text>
            </TouchableOpacity >
          )
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing}
            onRefresh={readData}

          />
        }
      />
    </View>
  )
}

export default List

const styles = StyleSheet.create({

})