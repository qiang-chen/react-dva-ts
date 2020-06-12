/**
 * @description 入口全局model
 * @author cq
 * @Date 2020-06-10 17:22:46
 * @LastEditTime 2020-06-12 15:05:12
 * @LastEditors cq
 */

import { modelExtend } from '../common'
import appState from "@/ts-types/models/app"
import { ReduxSagaEffects, ReduxAction, DvaSetupParams } from '@/ts-types/dva';
import * as app from "@/server/app"


const namespace = 'app';
export default modelExtend<appState>({
  namespace: namespace,
  state: {
    menuList: []
  },
  subscriptions: {
    setupHistory({ history, dispatch }: DvaSetupParams) {
      // history.listen(({ pathname }) => {
      //   if (pathname === '/pages/antd/small') {
          
      //   }
      // })
    },
  },

  effects: {
    * getMenuList(_action: ReduxAction, { put, call, select }: ReduxSagaEffects) {
      const { success, data } = yield call(app.serverGetMenuList, { identity: "user1" })
      if (success === "ok" && data) {
        yield put({
          type: 'updateState',
          payload: {
            menuList: data
          },
        })
      }
    },
  }
})


