// 04-4절 때의 모습
import React, {useEffect, useLayoutEffect, useCallback} from 'react'
import {Platform, StyleSheet, View, Text} from 'react-native'
import {Colors} from 'react-native-paper'
import type {LayoutChangeEvent} from 'react-native'

export default function LifeCycle() {
  useEffect(() => {
    console.log(Platform.OS, 'useEffect called')
    return () => console.log(Platform.OS, 'useEffect finished')
  }, [])
  useLayoutEffect(() => {
    console.log(Platform.OS, 'useLayoutEffect called')
    return () => console.log(Platform.OS, 'useLayoutEffect finished')
  }, [])
  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const {layout} = e.nativeEvent
    console.log(Platform.OS, 'onLayout called', layout)
  }, [])
  console.log(Platform.OS, 'render start')

  return (
    <View onLayout={onLayout} style={styles.view}>
      <Text style={styles.title}>LifeCycle</Text>
    </View>
  )
}
// prettier-ignore
const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', backgroundColor: Colors.blue100},
  title: {fontSize: 30, fontWeight: '600'}
  })
// 최종 모습
/*
import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Colors} from 'react-native-paper'
import {useLayout} from '../hooks'

export default function LifeCycle() {
  const [layout, setLayout] = useLayout()
  
  return (
    <View onLayout={setLayout} style={styles.view}>
      <Text style={styles.title}>LifeCycle</Text>
      <Text>layout: {JSON.stringify(layout, null, 2)}</Text>
    </View>
  )
}
// prettier-ignore
const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', backgroundColor: Colors.blue100},
  title: {fontSize: 30, fontWeight: '600'}
  })
  */
