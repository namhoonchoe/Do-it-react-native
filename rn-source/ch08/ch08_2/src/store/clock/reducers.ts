// 초기 버전
import * as T from './types'

const initialState: T.State = {}

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  return state
}
// 최종 버전
/*
import type {State, Actions} from './types'
const initialState: State = {currentDate: '', currentTime: ''}
export const reducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case '@clock/setTime':
      return {currentDate: action.currentDate, currentTime: action.currentTime}
  }
  return state
}
*/
