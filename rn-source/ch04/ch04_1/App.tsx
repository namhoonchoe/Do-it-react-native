// 초기 모습
import React from 'react'
import {StyleSheet, SafeAreaView, Text} from 'react-native'

export default function App() {
  const time = new Date()
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={[styles.digitFont, styles.time]}>
        {time.toLocaleTimeString()}
      </Text>
      <Text style={styles.digitFont}>{time.toLocaleDateString()}</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  digitFont: {fontFamily: 'MajorMonoDisplay-Regular', fontWeight: '400'},
  time: {fontSize: 50},
})

// useEffect, useState 훅 사용
/*
import React, {useEffect, useState} from 'react'
import {StyleSheet, SafeAreaView, Text} from 'react-native'

export default function App() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date()) // App을 재렌더링합니다.
    }, 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={[styles.digitFont, styles.time]}>
        {time.toLocaleTimeString()}
      </Text>
      <Text style={styles.digitFont}>{time.toLocaleDateString()}</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  digitFont: {fontFamily: 'MajorMonoDisplay-Regular', fontWeight: '400'},
  time: {fontSize: 50},
})
*/
// useClock 커스텀 훅 사용
/*
import React from 'react'
import {StyleSheet, SafeAreaView, Text} from 'react-native'
import {useClock} from './src/hooks'

export default function App() {
  const time = useClock()
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={[styles.digitFont, styles.time]}>
        {time.toLocaleTimeString()}
      </Text>
      <Text style={styles.digitFont}>{time.toLocaleDateString()}</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  digitFont: {fontFamily: 'MajorMonoDisplay-Regular', fontWeight: '400'},
  time: {fontSize: 50},
})
*/
