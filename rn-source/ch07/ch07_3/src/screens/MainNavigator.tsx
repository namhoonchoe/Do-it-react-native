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
// 탭 내비게이션 적용
/*
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Login from './Login'
import SignUp from './SignUp'
import HomeNavigator from './HomeNavigator'

const Tab = createBottomTabNavigator()

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{tabBarLabel: 'Home'}}
      />
    </Tab.Navigator>
  )
}
*/
// 탭에 아이콘을 부착하는 방법 1
/*
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AntIcon from 'react-native-vector-icons/AntDesign'
import FontawesomeIcon from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Login from './Login'
import SignUp from './SignUp'
import HomeNavigator from './HomeNavigator'
import type {RouteProp, ParamListBase} from '@react-navigation/native'

type TabBarIconProps = {focused: boolean; color: string; size: number}
const screenOptions = ({route}: {route: RouteProp<ParamListBase, string>}) => {
  return {
    tabBarIcon: ({focused, color, size}: TabBarIconProps) => {
      const {name} = route
      switch (name) {
        case 'Login':
          return <AntIcon name="login" size={size} color={color} />
        case 'SignUp':
          return <FontawesomeIcon name="sign-in" size={size} color={color} />
      }
      return <Icon name="home" size={size} color={color} />
    }
  }
}
const Tab = createBottomTabNavigator()

export default function MainNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{tabBarLabel: 'Home'}}
      />
    </Tab.Navigator>
  )
}
*/
// 탭에 아이콘을 부착하는 방법 2 (최종 버전)
/*
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Login from './Login'
import SignUp from './SignUp'
import HomeNavigator from './HomeNavigator'
import type {RouteProp, ParamListBase} from '@react-navigation/native'

type TabBarIconProps = {focused: boolean; color: string; size: number}
const icons: Record<string, string[]> = {
  HomeNavigator: ['home-circle', 'home-circle-outline'],
  Login: ['account-search', 'account-search-outline'],
  SignUp: ['account-clock', 'account-clock-outline']
}
const screenOptions = ({route}: {route: RouteProp<ParamListBase, string>}) => {
  return {
    tabBarIcon: ({focused, color, size}: TabBarIconProps) => {
      const {name} = route
      const focusedSize = focused ? size + 6 : size
      const focusedColor = focused ? Colors.lightBlue500 : color
      const [icon, iconOutline] = icons[name]
      const iconName = focused ? icon : iconOutline
      return <Icon name={iconName} size={focusedSize} color={focusedColor} />
    }
  }
}
const Tab = createBottomTabNavigator()

export default function MainNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{tabBarLabel: 'Home', tabBarBadge: 3}}
      />
    </Tab.Navigator>
  )
}
*/
