// 04-4절 때의 모습
import React, {useEffect, useState} from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native'
import {Colors} from 'react-native-paper'
import Country from './Country'
import * as D from '../data'

export default function Fetch() {
  const [countries, setCountries] = useState<D.ICountry[]>([])
  const [error, setError] = useState<Error | null>(null)
  useEffect(() => {
    D.getCountries().then(setCountries).catch(setError)
  }, [])
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Fetch</Text>
      {error && <Text>{error.message}</Text>}
      <FlatList
        data={countries}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Country country={item} />}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', backgroundColor: Colors.blue100},
  title: {fontSize: 30, fontWeight: '600'},
  separator: {borderBottomColor: Colors.blue50, borderBottomWidth: 1},
})
// 최종 모습
/*
import React, {useState} from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native'
import {Colors} from 'react-native-paper'
import Country from './Country'
import * as D from '../data'
import {useAsync} from '../hooks'

export default function Fetch() {
  const [countries, setCountries] = useState<D.ICountry[]>([])
  const [error, resetError] = useAsync(async () => {
    setCountries([])
    resetError()
    // await Promise.reject(new Error('some error occurs'))
    const countries = await D.getCountries()
    setCountries(countries)
  })
  
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Fetch</Text>
      {error && <Text>error: {error.message}</Text>}
      <FlatList
        data={countries}
        renderItem={({item}) => <Country country={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', backgroundColor: Colors.blue100},
  title: {fontSize: 30, fontWeight: '600'},
  separator: {borderBottomColor: Colors.blue50, borderBottomWidth: 1},
})
*/
