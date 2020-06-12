/**
 * @description 
 * @author cq
 * @Date 2020-06-08 15:52:13
 * @LastEditTime 2020-06-11 17:35:12
 * @LastEditors cq
 */
import { modelExtend } from '../common'
import { RootState } from "@/ts-types/models"
import antdSmallState from "@/ts-types/models/antdSmall"
import { ReduxSagaEffects, ReduxAction, DvaSetupParams } from '@/ts-types/dva';
import * as antdSmall from "@/server/antdSmall"

const namespace = 'antdSmall';
export default modelExtend<antdSmallState>({
  namespace: namespace,
  state: {
    homeList: []
  },
  subscriptions: {
    setupHistory({ history, dispatch }: DvaSetupParams) {
      history.listen(({ pathname }) => {
        if (pathname === '/pages/antd/small') {
          dispatch({ type: "query", payload: { type: 3 } })
          // dispatch({ type: "queryAllLinears" });
        }
      })
    },
  },

  effects: {
    * query({ payload }: ReduxAction, { put, call, select }: ReduxSagaEffects) {
      const { homeList }: antdSmallState = yield select((_: RootState) => _[namespace]);
      const { success, data } = yield call(antdSmall.serverHomeList, { ...payload })
      if (success === "ok" && data) {
        yield put({
          type: 'updateState',
          payload: {
            homeList: data
          },
        })
      }
    },
    * addHomeList({ payload }: ReduxAction, { put, call, select }: ReduxSagaEffects) {
      const { success, data } = yield call(antdSmall.serverAddHomeList, payload)
      if (success === "ok" && data) {
        return success
      }
    },
    * removeHomeList({ payload }: ReduxAction, { put, call, select }: ReduxSagaEffects) {
      const { success, data } = yield call(antdSmall.serverRemoveHomeList, payload)
      if (success === "ok" && data) {
        return success
      }
    },
  }
})


