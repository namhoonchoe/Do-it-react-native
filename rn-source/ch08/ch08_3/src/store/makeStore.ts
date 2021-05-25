// logger 적용 버전
/*
import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from './rootReducer'
import {logger} from './logger'

export const makeStore = () => {
  let middlewares: any[] = []
  if (__DEV__) {
    middlewares.push(logger)
  }
  return createStore(rootReducer, applyMiddleware(...middlewares))
}
*/
// logger, thunk 적용 버전(최종 버전)
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {logger} from './logger'
import {rootReducer} from './rootReducer'

export const makeStore = () => {
  let middlewares: any[] = [thunk]
  if (__DEV__) {
    middlewares.push(logger)
  }
  return createStore(rootReducer, applyMiddleware(...middlewares))
}
