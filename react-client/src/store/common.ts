/**
 * @description 公共的model
 * @author cq
 * @Date 2020-06-08 16:17:25
 * @LastEditTime 2020-06-09 13:57:05
 * @LastEditors cq
 */
import { DvaModel } from '@/ts-types/dva';
// import _modelExtend from 'dva-model-extend'
const _modelExtend = require('dva-model-extend').default;

const commonModel = {
  reducers: {
    updateState(state: any, { payload }: any) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}

const modelExtend = <T>(model: DvaModel<T>): DvaModel<T> => _modelExtend(commonModel, model);

export {
  modelExtend,
  commonModel,
}