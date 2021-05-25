import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Colors} from 'react-native-paper'
import * as D from '../data'

const title = 'Country'
export default function Country() {
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  view: {padding: 5, backgroundColor: Colors.blue900},
  text: {fontSize: 20, color: 'white'},
})
// 최종 모습
/*
import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import type {FC} from 'react'
import * as D from '../data'

export type CountryProps = {
  country: D.ICountry
}
const Country: FC<CountryProps> = ({country}) => {
  const {name, capital, population, subregion, region} = country
  return (
    <View style={styles.view}>
      <View>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View>
        <Text>capital: {capital}</Text>
        <Text>population: {population}</Text>
        <Text>subregion: {subregion}</Text>
        <Text>region: {region}</Text>
      </View>
    </View>
  )
}
export default Country
const styles = StyleSheet.create({
  view: {padding: 5},
  name: {fontSize: 30, fontWeight: '400'},
})
*/
