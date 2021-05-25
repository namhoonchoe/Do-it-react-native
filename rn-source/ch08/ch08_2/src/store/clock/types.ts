// 초기 버전
import type {Action} from 'redux'

export type State = any

export type Actions = Action

// 최종 버전
/*
import type {Action} from 'redux'

export type State = {
  currentDate: string
  currentTime: string
}

export type SetTimeAction = Action<'@clock/setTime'> & State

export type Actions = SetTimeAction
*/
