// 초기 모습
import type {Action} from 'redux'

export type State = any

export type Actions = Action
// 최종 모습
/*
import type {Action} from 'redux'

export type State = number

export type IncreaseAction = Action<'@counter/increase'>
export type DecreaseAction = Action<'@counter/decrease'>

export type Actions = IncreaseAction | DecreaseAction
*/
