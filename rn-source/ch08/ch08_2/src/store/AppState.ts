// 초기 모습
import * as L from './login'
export type AppState = {
  login: L.State
}
// counter, clock, people 추가(최종 버전)
/*
import * as L from './login'
import * as C from './counter'
import * as CL from './clock'
import * as P from './people'

export type AppState = {
  login: L.State
  counter: C.State
  clock: CL.State
  people: P.State
}
*/
