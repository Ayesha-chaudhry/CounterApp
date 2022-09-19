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
    <View style={{ flex: 1 }}>
      {refreshing ? <ActivityIndicator /> : null}
      <FlatList
        data={data}
        renderItem={({ item }) => {
          const obj = JSON.parse(item[1])
          return (

            <TouchableOpacity
              onPress={() => { onRemoveItem(item[0]) }}
              style={styles.card}
            >
              <View style={styles.card_right}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{obj.selectedItem ? obj.selectedItem : "Zikr"}</Text>
                <Text style={{ fontSize: 16, marginTop: 20 }}>{obj.date}</Text>
              </View>

              <View style={styles.card_left}>
                <Text style={{ fontSize: 32, fontWeight: 'bold' }}>{obj.counter}</Text>
              </View>
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
  card: {
    Display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 10,
    width: '95%',
    height: 110,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowOpacity: 2.25,
    shadowRadius: 2.84,
    elevation: 3,
    borderColor: 'gray',
    borderRadius: 12,
    borderWidth: 0.6,
  },
  card_right: {
    flex: 0.6,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card_left: {
    flex: 0.4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  }
})