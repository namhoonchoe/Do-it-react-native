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
// 서랍 내비게이션 초기 버전
/*
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Login from './Login'
import SignUp from './SignUp'
import TabNavigator from './TabNavigator'
import DrawerContent from './DrawerContent'

const Drawer = createDrawerNavigator()

export default function MainNavigator() {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="SignUp" component={SignUp} />
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{title: 'Home'}}
      />
    </Drawer.Navigator>
  )
}
*/
// drawerContent 수정 버전(최종 버전)
/*
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Login from './Login'
import SignUp from './SignUp'
import TabNavigator from './TabNavigator'
import DrawerContent from './DrawerContent'

const Drawer = createDrawerNavigator()

export default function MainNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="SignUp" component={SignUp} />
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{title: 'Home'}}
      />
    </Drawer.Navigator>
  )
}
*/
