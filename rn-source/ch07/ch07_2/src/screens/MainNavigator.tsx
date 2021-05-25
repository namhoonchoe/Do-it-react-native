// 초기 버전
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './Home'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'

const Stack = createStackNavigator()

export default function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeLeft" component={HomeLeft} />
      <Stack.Screen name="HomeRight" component={HomeRight} />
    </Stack.Navigator>
  )
}
// Stack.Navigator에 screenOptions 설정
/*
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Colors} from 'react-native-paper'
import Home from './Home'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'

const Stack = createStackNavigator()

export default function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.pink500
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeLeft" component={HomeLeft} />
      <Stack.Screen name="HomeRight" component={HomeRight} />
    </Stack.Navigator>
  )
}
*/
// 헤더가 보이지 않도록 설정
/*
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './Home'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'

const Stack = createStackNavigator()

export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeLeft" component={HomeLeft} />
      <Stack.Screen name="HomeRight" component={HomeRight} />
    </Stack.Navigator>
  )
}
*/
// 최종 버전
/*
import React, {useMemo} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import type {StackNavigationOptions} from '@react-navigation/stack'
import {useNavigationHorizontalInterpolator} from '../hooks'
import Home from './Home'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'

const Stack = createStackNavigator()

export default function MainNavigator() {
  const interpolator = useNavigationHorizontalInterpolator()
  const leftOptions = useMemo<StackNavigationOptions>(
    () => ({
      gestureDirection: 'horizontal-inverted',
      cardStyleInterpolator: interpolator
    }),
    []
  )
  const rightOptions = useMemo<StackNavigationOptions>(
    () => ({
      gestureDirection: 'horizontal',
      cardStyleInterpolator: interpolator
    }),
    []
  )
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="HomeLeft"
        component={HomeLeft}
        options={leftOptions}
      />
      <Stack.Screen
        name="HomeRight"
        component={HomeRight}
        options={rightOptions}
      />
    </Stack.Navigator>
  )
}
*/
