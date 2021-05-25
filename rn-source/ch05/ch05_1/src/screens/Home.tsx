/*
import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Colors} from 'react-native-paper'
import * as D from '../data'

const title = 'Home'
export default function Home() {
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  view: {flex: 1, padding: 5, backgroundColor: Colors.blue900},
  text: {fontSize: 20, color: 'white'},
})
*/
// useTheme 사용 모습
/*
import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {useTheme} from 'react-native-paper'

export default function Home() {
  const theme = useTheme()
  const {fonts, colors} = theme
  return (
    <View style={[styles.view, {backgroundColor: colors.background}]}>
      <View style={[styles.bar, {backgroundColor: colors.primary}]}>
        <Text style={[styles.text, {color: colors.text}, fonts.medium]}>
          TopBar
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={[styles.text, {color: colors.text}, fonts.regular]}>
          Welcome to Context world!
        </Text>
      </View>
      <View style={[styles.bar, {backgroundColor: colors.accent}]}>
        <Text style={[styles.text, {color: colors.text}, fonts.light]}>
          BottomBar
        </Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  view: {flex: 1},
  bar: {height: 50, flexDirection: 'row', padding: 5, alignItems: 'center'},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 20, textAlign: 'center'}
})
*/
// 최종 모습
import React from 'react'
import {StyleSheet, View, Text, Switch} from 'react-native'
import {useTheme} from 'react-native-paper'
import {useToggleTheme} from '../contexts'

export default function Home() {
  const {dark, colors, fonts} = useTheme()
  const toggleTheme = useToggleTheme()
  return (
    <View style={[styles.view, {backgroundColor: colors.background}]}>
      <View style={[styles.bar, {backgroundColor: colors.primary}]}>
        <Text style={[styles.text, {color: colors.text}, fonts.medium]}>
          TopBar
        </Text>
        <View style={[{flex: 1}]} />
        <Switch value={dark} onValueChange={toggleTheme} />
      </View>
      <View style={styles.content}>
        <Text style={[styles.text, {color: colors.text}, fonts.regular]}>
          Welcome to Context world!
        </Text>
      </View>
      <View style={[styles.bar, {backgroundColor: colors.accent}]}>
        <Text style={[styles.text, {color: colors.text}, fonts.light]}>
          BottomBar
        </Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  view: {flex: 1},
  bar: {height: 50, flexDirection: 'row', padding: 5, alignItems: 'center'},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 20, textAlign: 'center'}
})
