// 초기 버전
import React from 'react'
import {StyleSheet} from 'react-native'
import {SafeAreaView, View, Text, TopBar} from '../theme/navigation'

const title = 'CopyMe'
export default function CopyMe() {
  return (
    <SafeAreaView>
      <View style={[styles.view]}>
        <TopBar />
        <View style={[styles.content]}>
          <Text style={[styles.text]}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  view: {flex: 1, padding: 5},
  text: {fontSize: 20},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'}
})
// 중간 버전
/*
import React, {useCallback} from 'react'
import {StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'
// prettier-ignore
import {SafeAreaView, View, Text, UnderlineText, TopBar} from '../theme/navigation'
import * as D from '../data'

const title = 'HomeLeft'

export default function HomeLeft() {
  const navigation = useNavigation()
  const goBack = useCallback(
    () => navigation.canGoBack() && navigation.goBack(),
    []
  )
  const goRight = useCallback(
    () => navigation.navigate('HomeRight', {id: D.randomId()}),
    []
  )
  return (
    <SafeAreaView>
      <View style={[styles.view]}>
        <TopBar>
          <UnderlineText onPress={goBack} style={[styles.text]}>
            go back
          </UnderlineText>
          <UnderlineText
            onPress={goRight}
            style={[styles.text, {marginLeft: 10}]}>
            go Right
          </UnderlineText>
        </TopBar>
        <View style={[styles.content]}>
          <Text style={[styles.text]}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  view: {flex: 1, padding: 5},
  text: {fontSize: 20},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'}
})
*/
// 최종 버전
/*
import React, {useCallback} from 'react'
import {StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'
// prettier-ignore
import {SafeAreaView, View, Text, NavigationHeader,
MaterialCommunityIcon as Icon} from '../theme'
import {LeftRightNavigation} from '../components'

const title = '카메라 접근을 허가해 주세요'

export default function HomeLeft() {
  const navigation = useNavigation()
  const goHome = useCallback(() => navigation.navigate('Home'), [])
  return (
    <SafeAreaView>
      <View style={[styles.view]}>
        <NavigationHeader
          Right={() => <Icon name="close" size={30} onPress={goHome} />}
        />
        <LeftRightNavigation distance={40} onRightToLeft={goHome}>
          <View style={[styles.content]}>
            <Text style={[styles.text]}>{title}</Text>
          </View>
        </LeftRightNavigation>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  view: {flex: 1, padding: 5},
  text: {fontSize: 20},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'}
})
*/
