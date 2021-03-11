/**
 * @description 入口全局model
 * @author cq
 * @Date 2020-06-10 17:22:46
 * @LastEditTime 2021-03-11 14:20:55
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
    menuList: [
      { menu_path: "/pages/antd", name: "demo演练", pid: 0, id: 1 },
      { menu_path: "/pages/left", name: "测试二号", pid: 0, id: 2 },
      { menu_path: "/pages/antd/small", name: "antd演练", pid: 1, id: 3 },
      { menu_path: "/pages/antd/tabel", name: "tabel测试", pid: 1, id: 12 },
      { menu_path: "/pages/antd/ahooks", name: "ahooks页面", pid: 1, id: 11 },
      { menu_path: "/pages/antd/ui", name: "UI测试", pid: 1, id: 4 },
      { menu_path: "/pages/antd/indexedDB", name: "indexedDB测试", pid: 1, id: 10 },
      { menu_path: "/pages/antd/dexie", name: "dexie测试", pid: 1, id: 11 },
      { menu_path: "/pages/antd/callback", name: "useCallback", pid: 1, id: 9 },
      { menu_path: "/pages/antd/menu1", name: "测试页面1", pid: 1, id: 5 },
      { menu_path: "/pages/antd/menu2", name: "测试页面2", pid: 2, id: 6 },
      { menu_path: "/pages/antd/menu3", name: "测试页面3", pid: 2, id: 7 },
      { menu_path: "/pages/antd/menu4", name: "测试页面4", pid: 1, id: 8 },
    ]
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


