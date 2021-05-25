// 04-4절 때의 모습
import React, {useEffect, useCallback, useState} from 'react'
import {StyleSheet, View, Text, ActivityIndicator, Button} from 'react-native'
import {Colors} from 'react-native-paper'

export default function Timer() {
  const [loading, setLoading] = useState(true)
  const toggleLoading = useCallback(() => setLoading(loading => !loading), [])
  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(id)
  }, [loading])
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Timer</Text>
      <Text>loading: {loading.toString()}</Text>
      <Button
        onPress={toggleLoading}
        title={loading ? 'stop loading' : 'start loading'}
      />
      {loading && (
        <ActivityIndicator size="large" color={Colors.deepPurple700} />
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', backgroundColor: Colors.yellow300},
  title: {fontSize: 30, fontWeight: '600'},
})
// 최종 모습
/*
import React from 'react'
import {StyleSheet, View, Text, ActivityIndicator, Button} from 'react-native'
import {Colors} from 'react-native-paper'
import {useToggle, useTimeout} from '../hooks'

export default function Timer() {
  const [loading, toggleLoading] = useToggle(true)
  useTimeout(() => loading && toggleLoading(), 3000, [loading])
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Timer</Text>
      <Text>loading: {loading.toString()}</Text>
      <Button
        onPress={toggleLoading}
        title={loading ? 'stop loading' : 'start loading'}
      />
      {loading && (
        <ActivityIndicator size="large" color={Colors.deepPurple700} />
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', backgroundColor: Colors.yellow300},
  title: {fontSize: 30, fontWeight: '600'},
})
*/
