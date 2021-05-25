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
// DrawerContentComponentProps 버전
/*
import React from 'react'
import {StyleSheet} from 'react-native'
import {SafeAreaView, View, Text, TopBar} from '../theme'
import type {FC} from 'react'
import type {DrawerContentComponentProps} from '@react-navigation/drawer'

const title = 'DrawerContent'

const DrawerContent: FC<DrawerContentComponentProps> = props => {
  console.log(Object.keys(props))
  return (
    <SafeAreaView>
      <TopBar />
      <View style={[styles.content]}>
        <Text style={[styles.text]}>{title}</Text>
      </View>
    </SafeAreaView>
  )
}
export default DrawerContent
const styles = StyleSheet.create({
  text: {fontSize: 20},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'}
})
*/
// DrawerContentScrollView 사용 버전
/*
import React, {useCallback} from 'react'
import {StyleSheet} from 'react-native'
import {View, Text, TopBar} from '../theme'
import type {FC} from 'react'
import type {DrawerContentComponentProps} from '@react-navigation/drawer'
import {DrawerContentScrollView} from '@react-navigation/drawer'

const title = 'DrawerContent'
const DrawerContent: FC<DrawerContentComponentProps> = props => {
  const {navigation} = props
  const go = useCallback(() => {}, [])
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={[styles.view]}>
      <TopBar />
      <View style={[styles.content]}>
        <Text style={[styles.text]}>{title}</Text>
      </View>
    </DrawerContentScrollView>
  )
}
export default DrawerContent
const styles = StyleSheet.create({
  view: {flex: 1},
  text: {fontSize: 20},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'}
})
*/
// 서랍을 닫는 UI 구현 버전(최종 버전)
/*
import React, {useMemo, useCallback} from 'react'
import {StyleSheet} from 'react-native'
// prettier-ignore
import {View, Text, NavigationHeader, UnderlineText,
MaterialCommunityIcon as Icon, Switch} from '../theme'
import type {FC} from 'react'
import type {DrawerContentComponentProps} from '@react-navigation/drawer'
import {DrawerContentScrollView} from '@react-navigation/drawer'
import {DrawerActions} from '@react-navigation/native'
import {Avatar} from '../components'
import * as D from '../data'

const loginUser = D.createRandomPerson()

const DrawerContent: FC<DrawerContentComponentProps> = props => {
  const {navigation} = props
  const close = useCallback(
    () => navigation.dispatch(DrawerActions.closeDrawer()),
    []
  )

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={[styles.view]}>
      <NavigationHeader
        Right={() => <Icon name="close" size={24} onPress={close} />}
      />
      <View style={[styles.content]}>
        <View style={[styles.row]}>
          <Avatar uri={loginUser.avatar} size={40} />
          <Text style={[styles.text, styles.m]}>{loginUser.name}</Text>
        </View>
        <View style={[styles.row]}>
          <UnderlineText
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[styles.text, styles.m]}>
            {loginUser.email}
          </UnderlineText>
        </View>
        <View style={[styles.row, {marginTop: 20}]}>
          <Switch />
        </View>
      </View>
    </DrawerContentScrollView>
  )
}
export default DrawerContent
const styles = StyleSheet.create({
  view: {flex: 1, padding: 5},
  row: {flexDirection: 'row', padding: 5, alignItems: 'center'},
  m: {marginLeft: 5},
  text: {fontSize: 20},
  content: {flex: 1, padding: 5}
})
*/
