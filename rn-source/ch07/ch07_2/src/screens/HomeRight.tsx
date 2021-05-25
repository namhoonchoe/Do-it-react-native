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
import {useNavigation, useRoute} from '@react-navigation/native'
// prettier-ignore
import {SafeAreaView, View, Text, UnderlineText, TopBar} from '../theme/navigation'
import * as D from '../data'
const title = 'HomeRight'

export default function HomeRight() {
  const navigation = useNavigation()
  const goBack = useCallback(
    () => navigation.canGoBack() && navigation.goBack(),
    []
  )
  const goRight = useCallback(
    () => navigation.navigate('HomeRight', {id: D.randomId()}),
    []
  )
  const route = useRoute()

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
          <Text style={[styles.text]}>{JSON.stringify(route, null, 2)}</Text>
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
import {StyleSheet, Alert} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
// prettier-ignore
import {SafeAreaView, View, Text, TopBar,
NavigationHeader, MaterialCommunityIcon as Icon} from '../theme'
import {LeftRightNavigation} from '../components'

const title = 'HomeRight'

export default function HomeRight() {
  const navigation = useNavigation()
  const route = useRoute()
  const goBack = useCallback(
    () => navigation.canGoBack() && navigation.goBack(),
    []
  )
  const goHome = useCallback(() => navigation.navigate('Home'), [])
  return (
    <SafeAreaView>
      <View style={[styles.view]}>
        <NavigationHeader
          title={title}
          Left={() => (
            <Icon name="arrow-left-bold" size={50} onPress={goBack} />
          )}
          Right={() => (
            <Icon
              name="shield-airplane"
              size={30}
              onPress={() => Alert.alert('menu pressed')}
            />
          )}
        />
        <TopBar>
          <Text onPress={goBack}>go back</Text>
          <Text onPress={goHome} style={{marginLeft: 10}}>
            go Home
          </Text>
        </TopBar>
        <LeftRightNavigation distance={40} onLeftToRight={goHome}>
          <View style={[styles.content]}>
            <Text style={[styles.text]}>{title}</Text>
            <Text style={[styles.text]}>
              route: {JSON.stringify(route, null, 2)}
            </Text>
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
